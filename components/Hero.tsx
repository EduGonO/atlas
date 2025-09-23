import Link from 'next/link';

const highlights = [
  {
    title: 'Type',
    description: 'Lightning-fast prompts challenge you to recall every country on Earth.',
    accent: 'from-accent/80 via-accent to-white/80'
  },
  {
    title: 'Find',
    description: 'Tap precise borders on a handcrafted globe rendered for Multi-Touch.',
    accent: 'from-aurora/70 via-aurora to-white/80'
  },
  {
    title: 'Flags',
    description: 'Memorize intricate patterns with immersive colors tuned for OLED.',
    accent: 'from-amber/70 via-amber to-white/80'
  }
];

export default function Hero() {
  return (
    <section id="overview" className="relative pt-36">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-aurora" />
            Now accepting early access sign-ups
          </div>
          <div className="space-y-6">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Watch the trailer
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M5.5 4l6 4-6 4V4z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-1 justify-end">
          <div className="relative w-full max-w-md">
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-6 shadow-card">
              <div className="relative rounded-[28px] border border-white/10 bg-surface/90 p-6 shadow-inner">
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-white/15"
                    >
                      <div className={`absolute inset-0 opacity-60 blur-2xl transition duration-500 group-hover:opacity-90 bg-gradient-to-br ${highlight.accent}`} />
                      <div className="relative space-y-2">
                        <div className="text-sm font-semibold text-white/90">{highlight.title}</div>
                        <p className="text-xs leading-relaxed text-white/60">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/50">
                    <span>Daily streak</span>
                    <span>143 days</span>
                  </div>
                  <div className="relative h-2 rounded-full bg-white/10">
                    <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-gradient-to-r from-accent to-aurora" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span>World mastery</span>
                    <span>87%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-20 bottom-10 hidden max-w-[220px] -rotate-6 rounded-3xl border border-white/10 bg-white/[0.08] p-5 shadow-card backdrop-blur lg:block">
              <p className="text-sm font-semibold text-white">Atlas Pro Tips</p>
              <p className="mt-2 text-xs text-white/60">Discover hidden territories, compare stats with friends, and unlock beautiful wallpapers.</p>
            </div>
            <div className="absolute -right-12 -top-12 hidden w-32 rounded-full border border-white/20 bg-white/10 p-4 text-center text-[10px] uppercase tracking-[0.3em] text-white/60 backdrop-blur lg:block">
              <div className="text-2xl font-semibold text-white">360°</div>
              world view
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
