'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type GeoJsonFeature = {
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
};

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lng + 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

function buildCountryLines(features: GeoJsonFeature[], radius: number) {
  const group = new THREE.Group();

  features.forEach((feature) => {
    const { geometry } = feature;
    if (!geometry || (geometry.type !== 'Polygon' && geometry.type !== 'MultiPolygon')) {
      return;
    }

    const rings = geometry.type === 'Polygon' ? [geometry.coordinates as number[][][]] : (geometry.coordinates as number[][][][]);

    const positions: number[] = [];

    rings.forEach((polygon) => {
      polygon.forEach((ring) => {
        for (let i = 0; i < ring.length - 1; i += 1) {
          const [lngA, latA] = ring[i];
          const [lngB, latB] = ring[i + 1];

          const pointA = latLngToVector3(latA, lngA, radius);
          const pointB = latLngToVector3(latB, lngB, radius);

          positions.push(pointA.x, pointA.y, pointA.z);
          positions.push(pointB.x, pointB.y, pointB.z);
        }
      });
    });

    if (positions.length) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color('#e5f2ff'),
        transparent: true,
        opacity: 0.35
      });

      const lineSegments = new THREE.LineSegments(geometry, material);
      lineSegments.scale.setScalar(1.0015);
      group.add(lineSegments);
    }
  });

  return group;
}

export default function InteractiveGlobe() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return () => undefined;
    }

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const ambient = new THREE.AmbientLight(0x7ba0d9, 0.6);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfaf7f1, 1.4);
    keyLight.position.set(5.5, 3.5, 6.5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x3b82f6, 0.8);
    rimLight.position.set(-6, 3, -6);
    scene.add(rimLight);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const earthGeometry = new THREE.SphereGeometry(3, 160, 160);
    const earthMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0a4dbf'),
      roughness: 0.6,
      metalness: 0.08
    });

    earthMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.uTopColor = { value: new THREE.Color('#1f8bff') };
      shader.uniforms.uBottomColor = { value: new THREE.Color('#021a3d') };
      shader.vertexShader = `varying vec3 vPosition;\n${shader.vertexShader}`.replace(
        '#include <begin_vertex>',
        ['vPosition = position;', '#include <begin_vertex>'].join('\n')
      );
      shader.fragmentShader = `uniform vec3 uTopColor;\nuniform vec3 uBottomColor;\nvarying vec3 vPosition;\n${shader.fragmentShader}`.replace(
        'vec4 diffuseColor = vec4( diffuse, opacity );',
        [
          'float gradient = smoothstep(-3.0, 3.0, vPosition.y);',
          'vec3 gradientColor = mix(uBottomColor, uTopColor, gradient);',
          'vec3 finalColor = mix(gradientColor, diffuse, 0.35);',
          'vec4 diffuseColor = vec4(finalColor, opacity);'
        ].join('\n')
      );
    };

    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    const atmosphereGeometry = new THREE.SphereGeometry(3.2, 128, 128);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#6bb8ff'),
      transparent: true,
      opacity: 0.25,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphere);

    const starCount = 1400;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i += 1) {
      const radius = 26 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;

      const twinkle = 0.8 + Math.random() * 0.2;
      starColors[i * 3] = twinkle;
      starColors[i * 3 + 1] = twinkle * (0.85 + Math.random() * 0.15);
      starColors[i * 3 + 2] = 1;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.16,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      sizeAttenuation: true
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    let countryGroup: THREE.Group | null = null;
    fetch('/data/world.geojson')
      .then((response) => response.json())
      .then((data) => {
        countryGroup = buildCountryLines(data.features as GeoJsonFeature[], 3.01);
        if (countryGroup) {
          countryGroup.renderOrder = 2;
          countryGroup.traverse((child) => {
            if (child instanceof THREE.LineSegments) {
              child.material.depthWrite = false;
            }
          });
          globeGroup.add(countryGroup);
        }
      })
      .catch(() => {
        // ignore fetch failures silently – globe will still render beautifully
      });

    const currentRotation = new THREE.Vector2(0.4, 0);
    const targetRotation = new THREE.Vector2(0.4, 0);
    let isInteracting = false;
    const pointerStart = new THREE.Vector2();

    const handlePointerDown = (event: PointerEvent) => {
      isInteracting = true;
      pointerStart.set(event.clientX, event.clientY);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isInteracting) {
        return;
      }
      const deltaX = (event.clientX - pointerStart.x) / container.clientWidth;
      const deltaY = (event.clientY - pointerStart.y) / container.clientHeight;
      pointerStart.set(event.clientX, event.clientY);
      targetRotation.y += deltaX * Math.PI * 0.9;
      targetRotation.x += deltaY * Math.PI * 0.6;
      targetRotation.x = THREE.MathUtils.clamp(targetRotation.x, -Math.PI / 2.2, Math.PI / 2.2);
    };

    const handlePointerUp = () => {
      isInteracting = false;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) {
        return;
      }
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    resize();

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    let animationFrame = 0;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      if (!isInteracting) {
        targetRotation.y += 0.0016;
      }

      currentRotation.lerp(targetRotation, 0.08);
      globeGroup.rotation.set(currentRotation.x, currentRotation.y, 0);

      stars.rotation.y += 0.0004;
      stars.rotation.x += 0.0001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      renderer.dispose();
      container.removeChild(renderer.domElement);
      earthGeometry.dispose();
      earthMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      if (countryGroup) {
        countryGroup.traverse((child) => {
          if (child instanceof THREE.LineSegments) {
            child.geometry.dispose();
            (child.material as THREE.LineBasicMaterial).dispose();
          }
        });
      }
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" aria-hidden />;
}
