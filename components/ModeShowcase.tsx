import { CSSProperties, ReactNode } from 'react';

type ModeKey = 'type' | 'find' | 'flags';

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.15,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeOpacity: 0.75,
  fill: 'none'
} as const;

const TypeIcon = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
    <rect x="4.5" y="9.5" width="23" height="13" rx="2" {...stroke} />
    <path d="M8 13.5h3.6M13.2 13.5h3.6M18.4 13.5h3.6" {...stroke} />
    <path d="M9.2 17h6.2M17.2 17h6" {...stroke} />
    <path d="M12.8 20.5h6.4" {...stroke} />
  </svg>
);

const FindIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
    <circle cx="12" cy="10" r="3.1" {...stroke} />
    <path d="M12 3c-3.8 0-6.8 2.9-6.8 6.7 0 1.6.4 2.9 1.3 4.1L12 21l5.5-7.2c.9-1.2 1.3-2.5 1.3-4.1C18.8 5.9 15.8 3 12 3Z" {...stroke} />
  </svg>
);

const FlagIcon = () => (
  <svg viewBox="0 0 20 20" className="h-8 w-8" aria-hidden>
    <path d="M4 4.5c2-.8 3.5-.6 4.8.1 1 .5 2 .9 3.1.9 1 0 2.1-.3 3.9-1.4v7.8c-1.8 1.1-2.9 1.4-3.9 1.4-1.2 0-2.1-.4-3.1-.9-1.3-.7-3-1-4.8-.1" {...stroke} />
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
    name: 'Type',
    tagline: 'Name the Nation',
    description:
      'Cinematic audio prompts and immediate feedback keep you on tempo while you type every country.',
    gradient: 'linear-gradient(135deg, rgba(152,185,255,0.45) 0%, rgba(42,65,168,0.35) 45%, rgba(8,13,31,0) 90%)',
    beam: 'linear-gradient(140deg, rgba(124,134,255,0.4) 0%, rgba(8,13,31,0) 70%)',
    accent: '#cedcff'
  },
  {
    key: 'find',
    name: 'Find',
    tagline: 'Locate with Intuition',
    description:
      'A touch-first globe glides beneath your fingertips so you can pinpoint nations with effortless precision.',
    gradient: 'linear-gradient(135deg, rgba(123,241,214,0.42) 0%, rgba(18,107,92,0.32) 45%, rgba(6,14,26,0) 90%)',
    beam: 'linear-gradient(140deg, rgba(85,235,211,0.38) 0%, rgba(6,14,26,0) 70%)',
    accent: '#bffaea'
  },
  {
    key: 'flags',
    name: 'Flags',
    tagline: 'Learn Every Emblem',
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
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">Game Modes</p>
          <h2 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">Three elegant challenges, tuned for flow.</h2>
          <p className="max-w-2xl text-base leading-relaxed">
            Each mode isolates a different sense of geography — names, locations, and icons — so you can move effortlessly between them and master the planet with intention.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          {modes.map((mode) => {
            const accentStyles = {
              '--accent': mode.accent,
              '--accent-soft': `${mode.accent}1f`,
              '--accent-border': `${mode.accent}2a`
            } as CSSProperties;

            return (
              <article
                key={mode.name}
                style={accentStyles}
                className="group relative isolate flex h-full flex-1 flex-col overflow-hidden rounded-[26px] border border-white/15 bg-white/[0.035] p-6 transition duration-300 ease-out hover:scale-[1.01] hover:border-white/20 md:min-w-0"
              >
                <div aria-hidden className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: mode.gradient }} />
                <div aria-hidden className="absolute inset-0 -z-20 bg-gradient-to-br from-white/12 via-transparent to-white/0" />
                <div
                  aria-hidden
                  className="absolute right-[-12%] top-[12%] -z-10 h-32 w-32 scale-95 opacity-0 blur-2xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-100"
                  style={{ background: mode.beam }}
                />
                <div className="relative flex h-full flex-col gap-4 text-white/70">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border text-[color:var(--accent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-300 group-hover:border-[color:var(--accent)]"
                    style={{ backgroundColor: 'var(--accent-soft)', borderColor: 'var(--accent-border)' }}
                  >
                    {icons[mode.key]}
                  </div>
                  <span
                    className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[color:var(--accent)] transition-colors duration-300 group-hover:border-[color:var(--accent)]"
                    style={{ backgroundColor: 'var(--accent-soft)', borderColor: 'var(--accent-border)' }}
                  >
                    {mode.tagline}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--accent)]">{mode.name}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{mode.description}</p>
                  <div className="mt-auto pt-2 text-xs uppercase tracking-[0.14em] text-white/45">Designed for daily play</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
