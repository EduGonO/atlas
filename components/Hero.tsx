'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const InteractiveGlobe = dynamic(() => import('./InteractiveGlobe'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-12 w-12 animate-pulse rounded-full bg-white/10" />
    </div>
  )
});

const highlights = [
  {
    title: 'Lightning Recall',
    description: 'Speed rounds sharpen your memory with beautifully legible typography tuned for focus.',
    accent: 'from-accent/80 via-accent to-white/80'
  },
  {
    title: 'Immersive Touch',
    description: 'Handcrafted Multi-Touch hit zones glide across the sphere without pixelated seams.',
    accent: 'from-aurora/70 via-aurora to-white/80'
  },
  {
    title: 'Sonic Atmosphere',
    description: 'Spatial soundscapes swell as you travel, matching every discovery with a score.',
    accent: 'from-amber/70 via-amber to-white/80'
  }
];

const narratives = [
  {
    heading: 'Cartography built for clarity',
    body: 'Every border is redrawn in high fidelity, then tinted with lush emerald hues so countries feel alive yet readable in motion.'
  },
  {
    heading: 'A rhythm made to flow',
    body: 'Progression, streaks, and challenges cascade as you scroll—each panel gently overlapping the next so the story never breaks.'
  }
];

export default function Hero() {
  return (
    <section id="overview" className="relative isolate overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-32 lg:pb-40 lg:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(11,27,66,0.85)_0%,rgba(6,16,38,0.82)_42%,rgba(2,9,24,0.94)_78%,rgba(0,5,16,0.92)_100%)]" />
        <div className="absolute inset-x-0 top-8 h-72 bg-gradient-to-b from-white/10 via-transparent to-transparent blur-[160px]" />
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-aurora/25 blur-[140px]" />
        <div className="absolute -right-12 top-20 h-80 w-80 rounded-full bg-accent/25 blur-[160px]" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#06112d]/80 via-transparent to-transparent blur-[180px]" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:items-start lg:gap-20">
        <div className="flex flex-col gap-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-aurora" />
            Now accepting early access sign-ups
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              A world-class geography challenge designed for the iPhone.
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
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-500 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_30px_80px_rgba(18,32,59,0.45)]"
              >
                <div className={`absolute inset-0 opacity-60 blur-2xl transition duration-500 group-hover:opacity-90 bg-gradient-to-br ${highlight.accent}`} />
                <div className="relative space-y-2">
                  <div className="text-sm font-semibold text-white/90">{highlight.title}</div>
                  <p className="text-xs leading-relaxed text-white/60">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[540px] lg:sticky lg:top-32">
            <div className="absolute -inset-12 -z-10 rounded-[64px] bg-gradient-to-br from-aurora/10 via-transparent to-accent/20 blur-[180px]" />
            <div className="relative aspect-square overflow-visible rounded-[48px] border border-white/10 bg-white/[0.08] p-6 shadow-[0_60px_180px_-40px_rgba(6,12,26,0.85)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-px rounded-[42px] border border-white/5" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[42px] bg-gradient-to-br from-[#04122b]/92 via-[#030b1d]/88 to-[#02060f]/92">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,134,255,0.22),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(85,235,211,0.2),transparent_65%)]" />
                <InteractiveGlobe />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.08] px-6 py-5 text-sm text-white/70 shadow-[0_30px_90px_-40px_rgba(7,15,32,0.8)] backdrop-blur">
              <div>
                <div className="font-semibold text-white">Atlas</div>
                <div className="text-xs text-white/50">10 countries from all continents</div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/[0.12] px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-aurora" />
                Live
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-8 rounded-[44px] border border-white/10 bg-white/[0.06] p-10 text-white/75 shadow-[0_60px_160px_-60px_rgba(5,12,26,0.85)] backdrop-blur lg:grid-cols-2">
        {narratives.map((item) => (
          <div key={item.heading} className="space-y-3">
            <h3 className="text-lg font-semibold text-white">{item.heading}</h3>
            <p className="text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}
        <div className="relative flex flex-col justify-between gap-6 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-8 text-sm text-white/70">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">Scroll Story</p>
            <p className="mt-3 text-base text-white">
              Sections cascade beneath the globe with gentle parallax, creating a cinematic rhythm you can feel on desktop and
              mobile alike.
            </p>
          </div>
          <div className="flex gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
            <span className="rounded-full border border-white/20 px-3 py-1">Glide</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Discover</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Repeat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
