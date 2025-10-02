import { ReactNode } from 'react';

type ModeKey = 'type' | 'find' | 'flags';

const stroke = { stroke: 'currentColor', strokeWidth: 1.6 } as const;

const TypeIcon = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10" aria-hidden>
    <rect x="3" y="8" width="26" height="16" rx="1.6" ry="1.6" fill="none" {...stroke} />
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" {...stroke}>
      <line x1="11" y1="20" x2="21" y2="20" />
      <line x1="23" y1="20" x2="27" y2="20" />
      <line x1="5" y1="20" x2="9" y2="20" />
      <line x1="5" y1="12" x2="7" y2="12" />
      <line x1="9" y1="12" x2="11" y2="12" />
      <line x1="13" y1="12" x2="15" y2="12" />
      <line x1="15" y1="16" x2="17" y2="16" />
      <line x1="19" y1="16" x2="21" y2="16" />
      <line x1="23" y1="16" x2="27" y2="16" />
      <line x1="5" y1="16" x2="9" y2="16" />
      <line x1="11" y1="16" x2="13" y2="16" />
      <line x1="17" y1="12" x2="19" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="25" y1="12" x2="27" y2="12" />
    </g>
  </svg>
);

const FindIcon = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden>
    <circle cx="12" cy="10" r="3" fill="none" strokeLinecap="round" strokeLinejoin="round" {...stroke} />
    <path
      d="M12 2C7.58 2 4 5.58 4 10c0 1.89.4 3.13 1.5 4.5L12 22l6.5-7.5c1.1-1.37 1.5-2.61 1.5-4.5 0-4.42-3.58-8-8-8Z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...stroke}
    />
  </svg>
);

const FlagIcon = () => (
  <svg viewBox="0 0 16 16" className="h-10 w-10" aria-hidden>
    <path
      d="M1 2.4c1.6-.9 3-.8 4.3-.7 1 .1 2 .5 3 .9.8.3 1.5.7 2.3.8.8.1 1.8 0 3.4-.9V10c-1.6.9-3 .9-4.3.8-1-.1-2-.5-3-.9-.8-.3-1.5-.7-2.3-.8-.8-.1-1.8 0-3.4.9V2.4ZM3 14V3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...stroke}
    />
    <path
      d="M13 4.5c-1.6.9-3 .9-4.3.8-1-.1-2-.5-3-.9-.8-.3-1.5-.7-2.3-.8-.8-.1-1.8 0-3.4.9"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...stroke}
    />
  </svg>
);

const icons: Record<ModeKey, ReactNode> = {
  type: <TypeIcon />,
  find: <FindIcon />,
  flags: <FlagIcon />
};

const modes: Array<{
  key: ModeKey;
  name: string;
  tagline: string;
  description: string;
  gradient: string;
  beam: string;
  accent: string;
}> = [
  {
    key: 'type',
    name: 'Name the Nation',
    tagline: 'Rapid recall',
    description:
      'Cinematic audio prompts and immediate feedback keep you on tempo while you type every country.',
    gradient: 'linear-gradient(135deg, rgba(152,185,255,0.45) 0%, rgba(42,65,168,0.35) 45%, rgba(8,13,31,0) 90%)',
    beam: 'linear-gradient(140deg, rgba(124,134,255,0.4) 0%, rgba(8,13,31,0) 70%)',
    accent: '#cedcff'
  },
  {
    key: 'find',
    name: 'Find it on the Map',
    tagline: 'Spatial mastery',
    description:
      'A touch-first globe glides beneath your fingertips so you can pinpoint nations with effortless precision.',
    gradient: 'linear-gradient(135deg, rgba(123,241,214,0.42) 0%, rgba(18,107,92,0.32) 45%, rgba(6,14,26,0) 90%)',
    beam: 'linear-gradient(140deg, rgba(85,235,211,0.38) 0%, rgba(6,14,26,0) 70%)',
    accent: '#bffaea'
  },
  {
    key: 'flags',
    name: 'Match the Flag',
    tagline: 'Visual memory',
    description:
      'Curated palettes and tactile animations help you lock in every emblem and the story each design carries.',
    gradient: 'linear-gradient(135deg, rgba(255,201,138,0.42) 0%, rgba(196,106,27,0.32) 45%, rgba(12,8,0,0) 90%)',
    beam: 'linear-gradient(140deg, rgba(249,168,77,0.36) 0%, rgba(12,8,0,0) 70%)',
    accent: '#ffe0c0'
  }
];

export default function ModeShowcase() {
  return (
    <section id="modes" className="relative">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 overflow-hidden rounded-[40px] border border-white/8 bg-white/[0.025] p-10 shadow-[0_32px_96px_-60px_rgba(8,12,24,0.6)] backdrop-blur-lg">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02]" />
          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-accent/12 blur-[80px]" />
          <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-aurora/12 blur-[80px]" />
          <div className="absolute inset-0 bg-grid-faint bg-[length:160px_160px] opacity-10" />
        </div>
        <div className="space-y-4 text-white/70">
          <p className="text-xs uppercase tracking-[0.45em] text-white/45">Game Modes</p>
          <h2 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">Three elegant challenges, tuned for flow.</h2>
          <p className="max-w-2xl text-base leading-relaxed">
            Each mode isolates a different sense of geography — names, locations, and icons — so you can move effortlessly between them and master the planet with intention.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {modes.map((mode) => (
            <article
              key={mode.name}
              className="group relative isolate flex h-full flex-col overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.035] p-7 transition-transform duration-200 ease-out will-change-transform hover:-translate-y-1.5 hover:border-white/20"
            >
              <div aria-hidden className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ background: mode.gradient }} />
              <div
                aria-hidden
                className="absolute inset-0 -z-20 bg-gradient-to-br from-white/10 via-transparent to-white/0"
              />
              <div
                aria-hidden
                className="absolute right-[-15%] top-[10%] -z-10 h-40 w-40 scale-95 opacity-0 blur-xl transition-transform duration-300 ease-out group-hover:scale-110 group-hover:opacity-100"
                style={{ background: mode.beam }}
              />
              <div className="relative flex h-full flex-col gap-5 text-white/70">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/8 bg-white/8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-200 group-hover:border-white/20"
                  style={{ color: mode.accent }}
                >
                  {icons[mode.key]}
                </div>
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.45em] transition-colors duration-200 group-hover:border-white/20 group-hover:bg-white/[0.1]"
                  style={{ color: mode.accent, borderColor: `${mode.accent}55` }}
                >
                  {mode.tagline}
                </span>
                <h3 className="text-2xl font-semibold text-white">{mode.name}</h3>
                <p className="text-sm leading-relaxed text-white/70">{mode.description}</p>
                <div className="mt-auto pt-2 text-xs uppercase tracking-[0.35em] text-white/40">Designed for daily play</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
