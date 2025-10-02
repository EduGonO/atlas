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
      className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[48px] border border-white/10 bg-white/[0.04] p-10 text-white/75 shadow-[0_70px_140px_-70px_rgba(8,12,24,0.85)] backdrop-blur-2xl"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/[0.03]" />
        <div className="absolute left-1/2 top-[-10%] h-80 w-80 -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]" />
        <div className="absolute bottom-[-25%] right-[-10%] h-80 w-80 rounded-full bg-aurora/25 blur-[160px]" />
        <div className="absolute inset-0 bg-grid-faint bg-[length:140px_140px] opacity-25" />
      </div>
      <div className="space-y-7">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-white/70">
          Atlas
        </span>
        <div className="space-y-5">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Geography, reimagined with quiet precision.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/70">
            Atlas focuses on the essentials — three refined modes, fluid motion, and a globe that responds instantly. It’s a calm invitation to know the world by heart.
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
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-base text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Discover the modes
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/*
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {essentials.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-1"
          >
            <div className="absolute inset-px rounded-[26px] bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative space-y-2">
              <h2 className="text-sm font-semibold text-white">{item.title}</h2>
              <p className="text-sm leading-relaxed text-white/65">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      */}
      
    </section>
  );
}
