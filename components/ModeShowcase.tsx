const modes = [
  {
    name: 'Name the Nation',
    tagline: 'Rapid recall',
    description:
      'Cinematic audio prompts and immediate feedback keep you on tempo while you type every country.',
    gradient: 'linear-gradient(135deg, rgba(152,185,255,0.55) 0%, rgba(42,65,168,0.45) 45%, rgba(8,13,31,0) 90%)',
    beam: 'linear-gradient(120deg, rgba(124,134,255,0.45) 0%, rgba(8,13,31,0) 70%)',
    accent: '#dbe5ff'
  },
  {
    name: 'Find it on the Map',
    tagline: 'Spatial mastery',
    description:
      'A touch-first globe glides beneath your fingertips so you can pinpoint nations with effortless precision.',
    gradient: 'linear-gradient(135deg, rgba(123,241,214,0.55) 0%, rgba(18,107,92,0.45) 45%, rgba(6,14,26,0) 90%)',
    beam: 'linear-gradient(120deg, rgba(85,235,211,0.4) 0%, rgba(6,14,26,0) 70%)',
    accent: '#d6fff5'
  },
  {
    name: 'Match the Flag',
    tagline: 'Visual memory',
    description:
      'Curated palettes and tactile animations help you lock in every emblem and the story each design carries.',
    gradient: 'linear-gradient(135deg, rgba(255,201,138,0.55) 0%, rgba(196,106,27,0.42) 45%, rgba(12,8,0,0) 90%)',
    beam: 'linear-gradient(120deg, rgba(249,168,77,0.38) 0%, rgba(12,8,0,0) 70%)',
    accent: '#ffe9d0'
  }
];

export default function ModeShowcase() {
  return (
    <section id="modes" className="relative">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 overflow-hidden rounded-[48px] border border-white/10 bg-white/[0.03] p-10 shadow-[0_60px_140px_-80px_rgba(8,12,24,0.85)] backdrop-blur-2xl">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.02]" />
          <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-accent/20 blur-[160px]" />
          <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-aurora/20 blur-[160px]" />
          <div className="absolute inset-0 bg-grid-faint bg-[length:160px_160px] opacity-20" />
        </div>
        <div className="space-y-4 text-white/70">
          <p className="text-xs uppercase tracking-[0.45em] text-white/45">Game Modes</p>
          <h2 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">Three elegant challenges, tuned for flow.</h2>
          <p className="max-w-2xl text-base leading-relaxed">
            Each mode isolates a different sense of geography — names, locations, and icons — so you can move effortlessly between them and master the planet with intention.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {modes.map((mode) => (
            <article
              key={mode.name}
              className="group relative overflow-hidden rounded-[36px] border border-white/12 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-2 hover:border-white/30"
            >
              <div
                aria-hidden
                className="absolute inset-px rounded-[32px] opacity-0 transition duration-500 group-hover:opacity-100"
                style={{ background: mode.gradient }}
              />
              <div
                aria-hidden
                className="absolute left-[-20%] top-[10%] h-48 w-48 rounded-full opacity-0 blur-[140px] transition duration-500 group-hover:opacity-100"
                style={{ background: mode.beam }}
              />
              <div className="relative flex h-full flex-col gap-5 text-white/70">
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.5em]"
                  style={{ color: mode.accent }}
                >
                  {mode.tagline}
                </span>
                <h3 className="text-2xl font-semibold text-white">{mode.name}</h3>
                <p className="text-sm leading-relaxed">{mode.description}</p>
                <div className="mt-auto pt-2 text-xs uppercase tracking-[0.35em] text-white/45">Designed for daily play</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
