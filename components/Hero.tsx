import Link from 'next/link';
import dynamic from 'next/dynamic';

const InteractiveGlobe = dynamic(() => import('./InteractiveGlobe'), { ssr: false });

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
    <section id="overview" className="relative overflow-hidden pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(17,33,71,0.9)_0%,rgba(5,11,26,0.92)_35%,rgba(2,7,17,0.95)_55%,rgba(1,4,12,0.85)_75%,rgba(0,0,0,0.8)_100%)]" />
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-aurora/25 blur-3xl" />
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-[620px] -translate-x-1/2 rounded-full bg-white/10 blur-[180px]" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-2 sm:px-6 lg:flex-row lg:items-center lg:px-0">
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
        <div className="relative flex flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-xl">
            <div className="absolute -top-20 right-6 hidden h-28 w-28 rounded-full bg-white/10 blur-2xl sm:block" />
            <div className="absolute -bottom-32 left-12 hidden h-44 w-44 rounded-full bg-aurora/30 blur-3xl sm:block" />
            <div className="relative aspect-square overflow-visible rounded-[48px] border border-white/10 bg-white/[0.08] p-6 shadow-[0_60px_160px_-40px_rgba(3,9,20,0.9)] backdrop-blur">
              <div className="pointer-events-none absolute inset-px rounded-[42px] border border-white/5" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[42px] bg-gradient-to-br from-[#031736]/90 via-[#021026]/80 to-[#01050f]/85">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,134,255,0.2),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(85,235,211,0.18),transparent_65%)]" />
                <InteractiveGlobe />
              </div>
            </div>
            <div className="absolute -bottom-12 left-8 right-8 rounded-3xl border border-white/10 bg-white/[0.08] px-6 py-6 shadow-card backdrop-blur">
              <div className="flex items-center justify-between text-sm text-white/70">
                <div>
                  <div className="font-semibold text-white">Atlas</div>
                  <div className="text-xs text-white/50">10 countries from all continents</div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/[0.12] px-3 py-1 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-aurora" />
                  Live
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/30"
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
          </div>
        </div>
      </div>
    </section>
  );
}
