'use client';

import Link from 'next/link';
import { type CSSProperties, useEffect, useRef } from 'react';

type SpotlightStyle = CSSProperties & {
  '--spotlight-x'?: string;
  '--spotlight-y'?: string;
};

const highlights = [
  {
    title: 'Lightning Recall',
    description:
      'Speed rounds sharpen your memory with beautifully legible typography tuned for focus across Retina and ProMotion displays.',
    accent: 'from-accent/80 via-accent to-white/80'
  },
  {
    title: 'Immersive Touch',
    description:
      'Handcrafted multi-touch hit zones glide across the sphere without pixelated seams, so every swipe feels like liquid metal.',
    accent: 'from-aurora/70 via-aurora to-white/80'
  },
  {
    title: 'Sonic Atmosphere',
    description:
      'Spatial soundscapes swell as you travel, matching every discovery with an orchestral score tuned for AirPods and beyond.',
    accent: 'from-amber/70 via-amber to-white/80'
  }
];

const narratives = [
  {
    heading: 'Cartography for clarity',
    body: 'Every border is redrawn in high fidelity, then tinted with lush emerald hues so countries feel alive yet perfectly legible.'
  },
  {
    heading: 'A rhythm designed to flow',
    body: 'Progression, streaks, and challenges cascade as you scroll—each panel gently overlapping the next so the story never breaks.'
  }
];

const timeline = [
  {
    step: '01',
    title: 'Orbit in real time',
    copy: 'Pan, tilt, and spin with buttery-smooth inertia. Adaptive damping keeps motion stable even on smaller devices.'
  },
  {
    step: '02',
    title: 'Discover the unexpected',
    copy: 'Micro-animations illuminate capitals, coastlines, and achievements the moment you unlock them.'
  },
  {
    step: '03',
    title: 'Share your mastery',
    copy: 'One tap exports gorgeous session summaries ready for Messages, social, or your personal study journal.'
  }
];

const metrics = [
  { label: 'Average daily session', value: '6m 12s' },
  { label: 'Countries rendered', value: '195' },
  { label: 'Star particles', value: '60k adaptive' },
  { label: 'Supported devices', value: 'iPhone + iPad + Mac' }
];

export default function Hero() {
  const highlightRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const nodes = highlightRefs.current;
    const cleanups = nodes.map((node) => {
      if (!node) {
        return () => {};
      }

      const setSpotlight = (event: PointerEvent) => {
        const rect = node.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        node.style.setProperty('--spotlight-x', `${x}%`);
        node.style.setProperty('--spotlight-y', `${y}%`);
      };

      const resetSpotlight = () => {
        node.style.setProperty('--spotlight-x', '50%');
        node.style.setProperty('--spotlight-y', '50%');
      };

      node.addEventListener('pointermove', setSpotlight);
      node.addEventListener('pointerleave', resetSpotlight);
      node.addEventListener('pointerup', resetSpotlight);

      return () => {
        node.removeEventListener('pointermove', setSpotlight);
        node.removeEventListener('pointerleave', resetSpotlight);
        node.removeEventListener('pointerup', resetSpotlight);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section
      id="overview"
      className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-16 px-4 pb-28 pt-28 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end">
        <div className="space-y-8 lg:max-w-2xl">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-aurora" />
            Early access now open
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Command the world’s knowledge from a living, responsive sphere.
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Atlas blends artistry and precision so you can effortlessly explore every border, capital, and flag. Learn faster,
              compete smarter, and fall in love with the world again.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="https://apps.apple.com"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold text-surface shadow-[0_24px_44px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5"
            >
              <span className="text-xl"></span>
              Download for iOS
            </Link>
            <Link
              href="#download"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-base text-white/80 backdrop-blur transition hover:border-white/40 hover:text-white"
            >
              Watch the trailer
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M5.5 4l6 4-6 4V4z" fill="currentColor" />
              </svg>
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-sm text-white/60 sm:max-w-lg">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur">
                <dt className="text-xs uppercase tracking-[0.35em] text-white/45">{metric.label}</dt>
                <dd className="mt-2 text-lg font-semibold text-white">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative isolate flex w-full max-w-sm flex-col gap-6 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.07] p-8 text-sm text-white/75 shadow-[0_40px_160px_-70px_rgba(5,11,24,0.95)] backdrop-blur">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Live Globe Feed</p>
            <p className="mt-3 text-base text-white">
              The hero globe anchors the entire site. Scroll and the narrative glides around it, revealing modes, challenges, and
              soundscapes like constellations in motion.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.3em] text-white/55">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-aurora" />
              Live preview synched
            </span>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Motion aware physics
            </span>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 scrollbar-hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-6 sm:overflow-visible">
        {highlights.map((highlight, index) => (
          <div
            key={highlight.title}
            ref={(el) => {
              highlightRefs.current[index] = el;
            }}
            style={{ '--spotlight-x': '50%', '--spotlight-y': '50%' } as SpotlightStyle}
            className="group relative min-w-[240px] snap-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-500 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_30px_80px_rgba(18,32,59,0.45)] sm:min-w-0"
          >
            <span
              className={`pointer-events-none absolute inset-0 opacity-60 blur-2xl transition duration-500 group-hover:opacity-90 bg-gradient-to-br ${highlight.accent}`}
            />
            <span
              className="pointer-events-none absolute inset-[-30%] opacity-0 transition duration-700 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(circle at var(--spotlight-x) var(--spotlight-y), rgba(255,255,255,0.28), transparent 65%)'
              }}
            />
            <div className="relative space-y-3">
              <div className="text-sm font-semibold text-white/90">{highlight.title}</div>
              <p className="text-xs leading-relaxed text-white/65">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-10 rounded-[44px] border border-white/10 bg-white/[0.06] p-10 text-white/75 shadow-[0_60px_160px_-60px_rgba(5,12,26,0.85)] backdrop-blur lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Design Ethos</p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Crafted like an Apple flagship experience.</h2>
            <p className="text-sm leading-relaxed">
              Sections cascade beneath the globe with gentle parallax, creating a cinematic rhythm you can feel on desktop and mobile alike.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {narratives.map((item) => (
              <div key={item.heading} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                <h3 className="text-lg font-semibold text-white">{item.heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col justify-between gap-6 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-8 text-sm text-white/70">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">Scroll Story</p>
            <p className="text-base text-white">
              Follow the arc from first touch to global mastery. Each beat unlocks another layer of Atlas without ever losing sight of the cosmos behind it.
            </p>
          </div>
          <ol className="space-y-4 text-white/60">
            {timeline.map((item) => (
              <li key={item.step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">{item.step}</span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs leading-relaxed">{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
