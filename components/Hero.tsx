'use client';

import Link from 'next/link';

const essentials = [
  {
    title: 'Three focused game modes',
    description: 'Name, locate, and match the world’s countries without distraction.'
  },
  {
    title: 'Built for touch',
    description: 'Fluid gestures and gentle motion keep the globe in constant flow.'
  },
  {
    title: 'Play in minutes',
    description: 'Quick sessions adapt to the time you have, from a spare moment to a streak.'
  }
];

export default function Hero() {
  return (
    <section
      id="overview"
      className="mx-auto flex w-full max-w-4xl flex-col gap-12 rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur"
    >
      <div className="space-y-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/60">
          Atlas
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Geography mastery, distilled to its purest form.
          </h1>
          <p className="text-lg text-white/70">
            Atlas is a minimalist geography game focused on calm discovery. Spin the globe, choose a mode, and build world
            fluency without the noise.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="#waitlist"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold text-surface shadow-[0_24px_44px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5"
          >
            Join the waitlist
          </Link>
          <Link
            href="#modes"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Discover the modes
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {essentials.map((item) => (
          <div key={item.title} className="space-y-2 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-sm font-semibold text-white/80">{item.title}</h2>
            <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
