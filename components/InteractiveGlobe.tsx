'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type GeoJsonFeature = {
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
  properties?: {
    name?: string | null;
  };
};

type ProjectedPoint = [number, number];

const GLOBE_RADIUS = 3.3;
const ATMOSPHERE_RADIUS = GLOBE_RADIUS * 1.05;
const COUNTRY_OUTLINE_SCALE = 1.0022;
const COUNTRY_TEXTURE_WIDTH = 2048;
const COUNTRY_TEXTURE_HEIGHT = 1024;

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lng + 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

function projectRingToTexture(ring: number[][]): ProjectedPoint[] {
  if (!ring.length) {
    return [];
  }

  const projected: ProjectedPoint[] = [];
  let prevLng = ring[0][0];
  let offset = 0;

  for (let i = 0; i < ring.length; i += 1) {
    const [lng, lat] = ring[i];
    if (i > 0) {
      const delta = lng - prevLng;
      if (delta > 180) {
        offset -= 360;
      } else if (delta < -180) {
        offset += 360;
      }
      prevLng = lng;
    }

    const adjustedLng = lng + offset;
    const x = ((adjustedLng + 180) / 360) * COUNTRY_TEXTURE_WIDTH;
    const y = ((90 - lat) / 180) * COUNTRY_TEXTURE_HEIGHT;
    projected.push([x, y]);
  }

  return projected;
}

function computeOffsets(points: ProjectedPoint[]) {
  if (!points.length) {
    return [0];
  }

  let minX = points[0][0];
  let maxX = points[0][0];
  for (let i = 1; i < points.length; i += 1) {
    const x = points[i][0];
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
  }

  const offsets = [0];
  if (maxX > COUNTRY_TEXTURE_WIDTH) {
    offsets.push(-COUNTRY_TEXTURE_WIDTH);
  }
  if (minX < 0) {
    offsets.push(COUNTRY_TEXTURE_WIDTH);
  }
  return offsets;
}

function traceRing(
  ctx: CanvasRenderingContext2D,
  points: ProjectedPoint[],
  offsetX: number
) {
  if (!points.length) {
    return;
  }

  ctx.moveTo(points[0][0] + offsetX, points[0][1]);
  for (let i = 1; i < points.length; i += 1) {
    ctx.lineTo(points[i][0] + offsetX, points[i][1]);
  }
  ctx.closePath();
}

function getCountryFill(name?: string | null) {
  if (!name) {
    return '#1a9f60';
  }

  const normalized = name.toLowerCase();
  if (normalized === 'antarctica' || normalized === 'greenland') {
    return '#f5fbff';
  }

  return '#1a9f60';
}

function getCountryStroke(name?: string | null) {
  if (!name) {
    return 'rgba(6, 56, 33, 0.45)';
  }
  const normalized = name.toLowerCase();
  if (normalized === 'antarctica' || normalized === 'greenland') {
    return 'rgba(118, 156, 184, 0.35)';
  }
  return 'rgba(6, 56, 33, 0.45)';
}

function buildCountryLines(features: GeoJsonFeature[], radius: number) {
  const group = new THREE.Group();

  features.forEach((feature) => {
    const { geometry } = feature;
    if (!geometry || (geometry.type !== 'Polygon' && geometry.type !== 'MultiPolygon')) {
      return;
    }

    const rings =
      geometry.type === 'Polygon'
        ? [geometry.coordinates as number[][][]]
        : (geometry.coordinates as number[][][][]);

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
        color: new THREE.Color('#caffea'),
        transparent: true,
        opacity: 0.45
      });

      const lineSegments = new THREE.LineSegments(geometry, material);
      lineSegments.scale.setScalar(COUNTRY_OUTLINE_SCALE);
      group.add(lineSegments);
    }
  });

  return group;
}

function createCountryTexture(features: GeoJsonFeature[], renderer: THREE.WebGLRenderer) {
  if (typeof document === 'undefined') {
    return null;
  }

  const canvas = document.createElement('canvas');
  canvas.width = COUNTRY_TEXTURE_WIDTH;
  canvas.height = COUNTRY_TEXTURE_HEIGHT;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return null;
  }

  ctx.fillStyle = '#031227';
  ctx.fillRect(0, 0, COUNTRY_TEXTURE_WIDTH, COUNTRY_TEXTURE_HEIGHT);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  features.forEach((feature) => {
    const { geometry } = feature;
    if (!geometry || (geometry.type !== 'Polygon' && geometry.type !== 'MultiPolygon')) {
      return;
    }

    const polygons =
      geometry.type === 'Polygon'
        ? [geometry.coordinates as number[][][]]
        : (geometry.coordinates as number[][][][]);

    ctx.beginPath();
    polygons.forEach((polygon) => {
      polygon.forEach((ring) => {
        const projected = projectRingToTexture(ring);
        const offsets = computeOffsets(projected);
        offsets.forEach((offsetX) => {
          traceRing(ctx, projected, offsetX);
        });
      });
    });

    ctx.fillStyle = getCountryFill(feature.properties?.name);
    ctx.strokeStyle = getCountryStroke(feature.properties?.name);
    ctx.lineWidth = 0.7;
    ctx.fill('evenodd');
    ctx.stroke();
  });

  const glow = ctx.createRadialGradient(
    COUNTRY_TEXTURE_WIDTH * 0.68,
    COUNTRY_TEXTURE_HEIGHT * 0.28,
    COUNTRY_TEXTURE_WIDTH * 0.05,
    COUNTRY_TEXTURE_WIDTH * 0.48,
    COUNTRY_TEXTURE_HEIGHT * 0.55,
    COUNTRY_TEXTURE_WIDTH * 0.65
  );
  glow.addColorStop(0, 'rgba(255,255,255,0.22)');
  glow.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.globalCompositeOperation = 'lighter';
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, COUNTRY_TEXTURE_WIDTH, COUNTRY_TEXTURE_HEIGHT);
  ctx.globalCompositeOperation = 'source-over';

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy?.() ?? 4, 8);
  texture.needsUpdate = true;

  return texture;
}

let countriesPromise: Promise<GeoJsonFeature[]> | null = null;

async function loadCountryFeatures() {
  if (!countriesPromise) {
    countriesPromise = fetch('/data/world.geojson')
      .then((response) => response.json())
      .then((data) => (data.features as GeoJsonFeature[]) ?? [])
      .catch(() => {
        countriesPromise = null;
        return [];
      });
  }

  return countriesPromise;
}

type InteractiveGlobeProps = {
  className?: string;
};

export default function InteractiveGlobe({ className }: InteractiveGlobeProps = {}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return () => undefined;
    }

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 120);
    camera.position.set(0, 0, 8.6);

    const ambient = new THREE.AmbientLight(0x7ba0d9, 0.65);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfaf7f1, 1.35);
    keyLight.position.set(5.5, 3.6, 6.2);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x3b82f6, 0.82);
    rimLight.position.set(-5.8, 3.2, -6.3);
    scene.add(rimLight);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const earthGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 128, 128);
    const earthMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#08346a'),
      roughness: 0.5,
      metalness: 0.15
    });

    earthMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.uTopColor = { value: new THREE.Color('#3ea5ff') };
      shader.uniforms.uBottomColor = { value: new THREE.Color('#02132f') };
      shader.fragmentShader = `uniform vec3 uTopColor;\nuniform vec3 uBottomColor;\n${shader.fragmentShader}`;
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <color_fragment>',
        [
          '#include <color_fragment>',
          'float gradientMix = smoothstep(-3.5, 3.5, vViewPosition.y);',
          'diffuseColor.rgb = mix(diffuseColor.rgb, mix(uBottomColor, uTopColor, gradientMix), 0.35);'
        ].join('\n')
      );
    };

    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    const atmosphereGeometry = new THREE.SphereGeometry(ATMOSPHERE_RADIUS, 96, 96);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#6bb8ff'),
      transparent: true,
      opacity: 0.26,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphere);

    const { width: initialWidth, height: initialHeight } = container.getBoundingClientRect();
    const estimatedArea = Math.max(initialWidth * initialHeight, 480 * 480);
    const starCount = Math.round(THREE.MathUtils.clamp(estimatedArea / 260, 420, 1200));
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i += 1) {
      const radius = 34 + Math.random() * 24;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;

      const twinkle = 0.82 + Math.random() * 0.18;
      starColors[i * 3] = twinkle;
      starColors[i * 3 + 1] = twinkle * (0.78 + Math.random() * 0.18);
      starColors[i * 3 + 2] = 1;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.18,
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      sizeAttenuation: true
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    stars.frustumCulled = false;
    scene.add(stars);

    let countryGroup: THREE.Group | null = null;
    let countryTexture: THREE.Texture | null = null;
    let isDisposed = false;

    loadCountryFeatures().then((features) => {
      if (isDisposed || !features.length) {
        return;
      }

      countryTexture = createCountryTexture(features, renderer);
      if (countryTexture) {
        earthMaterial.map = countryTexture;
        earthMaterial.needsUpdate = true;
      }

      countryGroup = buildCountryLines(features, GLOBE_RADIUS * COUNTRY_OUTLINE_SCALE);
      countryGroup.renderOrder = 2;
      countryGroup.traverse((child) => {
        if (child instanceof THREE.LineSegments) {
          child.material.depthWrite = false;
        }
      });
      globeGroup.add(countryGroup);
    });

    const currentRotation = new THREE.Vector2(0.35, 0);
    const targetRotation = new THREE.Vector2(0.35, 0);
    let isInteracting = false;
    let activePointerId: number | null = null;
    const pointerStart = new THREE.Vector2();
    let prefersReducedMotion = false;
    let isVisible = true;

    const motionQuery = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    const handleMotionChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      if (prefersReducedMotion) {
        targetRotation.copy(currentRotation);
      }
    };
    if (motionQuery) {
      prefersReducedMotion = motionQuery.matches;
      if (typeof motionQuery.addEventListener === 'function') {
        motionQuery.addEventListener('change', handleMotionChange);
      } else {
        motionQuery.addListener(handleMotionChange);
      }
    }

    const handlePointerDown = (event: PointerEvent) => {
      isInteracting = true;
      activePointerId = event.pointerId;
      pointerStart.set(event.clientX, event.clientY);
      if (typeof container.setPointerCapture === 'function') {
        try {
          container.setPointerCapture(event.pointerId);
        } catch {
          // pointer capture is optional; safely ignore failures
        }
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isInteracting || event.pointerId !== activePointerId) {
        return;
      }
      const deltaX = (event.clientX - pointerStart.x) / container.clientWidth;
      const deltaY = (event.clientY - pointerStart.y) / container.clientHeight;
      pointerStart.set(event.clientX, event.clientY);
      targetRotation.y += deltaX * Math.PI * 0.9;
      targetRotation.x += deltaY * Math.PI * 0.6;
      targetRotation.x = THREE.MathUtils.clamp(targetRotation.x, -Math.PI / 2.1, Math.PI / 2.1);
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (event.pointerId !== activePointerId) {
        return;
      }
      isInteracting = false;
      activePointerId = null;
      if (
        typeof container.releasePointerCapture === 'function' &&
        typeof container.hasPointerCapture === 'function' &&
        container.hasPointerCapture(event.pointerId)
      ) {
        container.releasePointerCapture(event.pointerId);
      }
    };

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerUp);

    const previousTouchAction = container.style.touchAction;
    container.style.touchAction = 'none';

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) {
        return;
      }
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };

    resize();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => resize());
      resizeObserver.observe(container);
    } else {
      window.addEventListener('resize', resize);
    }

    let visibilityObserver: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      visibilityObserver = new IntersectionObserver(
        (entries) => {
          isVisible = entries.some((entry) => entry.isIntersecting);
        },
        { threshold: 0.12 }
      );
      visibilityObserver.observe(container);
    }

    let animationFrame = 0;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      if (!isVisible && !isInteracting) {
        return;
      }

      if (!prefersReducedMotion && !isInteracting && isVisible) {
        targetRotation.y += 0.0012;
      }

      const lerpFactor = prefersReducedMotion ? 0.16 : 0.08;
      currentRotation.lerp(targetRotation, lerpFactor);
      globeGroup.rotation.set(currentRotation.x, currentRotation.y, 0);

      if (!prefersReducedMotion && isVisible) {
        stars.rotation.y += 0.00028;
        stars.rotation.x += 0.00006;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      if (!resizeObserver) {
        window.removeEventListener('resize', resize);
      }
      visibilityObserver?.disconnect();
      if (motionQuery) {
        if (typeof motionQuery.removeEventListener === 'function') {
          motionQuery.removeEventListener('change', handleMotionChange);
        } else {
          motionQuery.removeListener(handleMotionChange);
        }
      }
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);
      container.style.touchAction = previousTouchAction;
      renderer.dispose();
      container.removeChild(renderer.domElement);
      earthGeometry.dispose();
      earthMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      countryGroup?.traverse((child) => {
        if (child instanceof THREE.LineSegments) {
          child.geometry.dispose();
          (child.material as THREE.LineBasicMaterial).dispose();
        }
      });
      if (countryTexture) {
        countryTexture.dispose();
      }
    };
  }, []);

  const combinedClassName = ['h-full w-full', className].filter(Boolean).join(' ');

  return <div ref={containerRef} className={combinedClassName} aria-hidden />;
}
