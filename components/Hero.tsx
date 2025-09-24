import Link from 'next/link';

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
    <section id="overview" className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-16 px-4 pb-32 pt-32 sm:px-6 lg:px-8">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-aurora" />
        Now accepting early access sign-ups
      </div>
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
        <div className="space-y-10">
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
        </div>
        <div className="space-y-6 rounded-[40px] border border-white/10 bg-white/[0.08] p-8 text-white/70 shadow-[0_40px_120px_-50px_rgba(5,11,24,0.9)] backdrop-blur">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Immersion</p>
            <h2 className="text-2xl font-semibold text-white">Orbit the planet without ever leaving the page.</h2>
          </div>
          <p className="text-sm leading-relaxed">
            The hero globe anchors the entire site. Scroll and the narrative glides around it, revealing modes, challenges, and
            soundscapes like constellations in motion.
          </p>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
            <span className="h-2 w-2 rounded-full bg-aurora" />
            Live globe preview
          </div>
        </div>
      </div>
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 scrollbar-hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-6 sm:overflow-visible">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="group relative min-w-[240px] snap-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-500 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_30px_80px_rgba(18,32,59,0.45)] sm:min-w-0"
          >
            <div className={`absolute inset-0 opacity-60 blur-2xl transition duration-500 group-hover:opacity-90 bg-gradient-to-br ${highlight.accent}`} />
            <div className="relative space-y-2">
              <div className="text-sm font-semibold text-white/90">{highlight.title}</div>
              <p className="text-xs leading-relaxed text-white/60">{highlight.description}</p>
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
