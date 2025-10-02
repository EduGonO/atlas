import { ReactNode } from 'react';

type ModeKey = 'type' | 'find' | 'flags';

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.35,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none'
} as const;

const TypeIcon = () => (
  <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden>
    <rect x="4" y="9" width="24" height="14" rx="2.2" {...stroke} />
    <path d="M7 13h4M13 13h4M19 13h4" {...stroke} />
    <path d="M9 17h6M17 17h6" {...stroke} />
    <path d="M12 21h8" {...stroke} />
  </svg>
);

const FindIcon = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden>
    <circle cx="12" cy="10" r="3.2" {...stroke} />
    <path d="M12 3c-3.9 0-7 3-7 7 0 1.7.4 3 1.4 4.3L12 21l5.6-6.7C18.6 13 19 11.7 19 10c0-4-3.1-7-7-7Z" {...stroke} />
  </svg>
);

const FlagIcon = () => (
  <svg viewBox="0 0 20 20" className="h-9 w-9" aria-hidden>
    <path d="M4 4.5c2-.9 3.6-.6 5 .1 1 .5 2 .9 3.2.9 1 0 2.1-.3 3.8-1.4v8c-1.7 1.1-2.8 1.4-3.8 1.4-1.2 0-2.2-.4-3.2-.9-1.4-.7-3-1-5-.1" {...stroke} />
    <path d="M4 16V4" {...stroke} />
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
    tagline: 'Type',
    description:
      'Cinematic audio prompts and immediate feedback keep you on tempo while you type every country.',
    gradient: 'linear-gradient(135deg, rgba(152,185,255,0.45) 0%, rgba(42,65,168,0.35) 45%, rgba(8,13,31,0) 90%)',
    beam: 'linear-gradient(140deg, rgba(124,134,255,0.4) 0%, rgba(8,13,31,0) 70%)',
    accent: '#cedcff'
  },
  {
    key: 'find',
    name: 'Find it on the Map',
    tagline: 'Find',
    description:
      'A touch-first globe glides beneath your fingertips so you can pinpoint nations with effortless precision.',
    gradient: 'linear-gradient(135deg, rgba(123,241,214,0.42) 0%, rgba(18,107,92,0.32) 45%, rgba(6,14,26,0) 90%)',
    beam: 'linear-gradient(140deg, rgba(85,235,211,0.38) 0%, rgba(6,14,26,0) 70%)',
    accent: '#bffaea'
  },
  {
    key: 'flags',
    name: 'Match the Flag',
    tagline: 'Flags',
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
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_36px_90px_-70px_rgba(8,12,24,0.7)] backdrop-blur-xl">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-white/[0.015]" />
          <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-accent/10 blur-[72px]" />
          <div className="absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-aurora/10 blur-[72px]" />
          <div className="absolute inset-0 bg-grid-faint bg-[length:150px_150px] opacity-10" />
        </div>
        <div className="space-y-4 text-white/70">
          <p className="text-xs uppercase tracking-[0.26em] text-white/45">Game Modes</p>
          <h2 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">Three elegant challenges, tuned for flow.</h2>
          <p className="max-w-2xl text-base leading-relaxed">
            Each mode isolates a different sense of geography — names, locations, and icons — so you can move effortlessly between them and master the planet with intention.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          {modes.map((mode) => (
            <article
              key={mode.name}
              className="group relative isolate flex h-full flex-1 flex-col overflow-hidden rounded-[26px] border border-white/12 bg-white/[0.035] p-6 transition-transform duration-150 ease-out hover:-translate-y-1 hover:border-white/18 md:min-w-0"
            >
              <div aria-hidden className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ background: mode.gradient }} />
              <div aria-hidden className="absolute inset-0 -z-20 bg-gradient-to-br from-white/12 via-transparent to-white/0" />
              <div
                aria-hidden
                className="absolute right-[-12%] top-[12%] -z-10 h-32 w-32 scale-95 opacity-0 blur-2xl transition-transform duration-300 ease-out group-hover:scale-110 group-hover:opacity-100"
                style={{ background: mode.beam }}
              />
              <div className="relative flex h-full flex-col gap-4 text-white/70">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-200 group-hover:border-white/18"
                  style={{ color: mode.accent }}
                >
                  {icons[mode.key]}
                </div>
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-[11px] uppercase tracking-[0.24em] transition-colors duration-200 group-hover:border-white/18 group-hover:bg-white/[0.12]"
                  style={{ color: mode.accent, borderColor: `${mode.accent}55` }}
                >
                  {mode.tagline}
                </span>
                <h3 className="text-2xl font-semibold text-white">{mode.name}</h3>
                <p className="text-sm leading-relaxed text-white/70">{mode.description}</p>
                <div className="mt-auto pt-2 text-xs uppercase tracking-[0.24em] text-white/40">Designed for daily play</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
