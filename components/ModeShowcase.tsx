const modes = [
  {
    name: 'Name the Nation',
    description:
      'Listen for subtle audio cues and race the clock to type or speak each country with zero friction — even the trickiest territories.',
    detail: 'Adaptive hints keep you on pace while preserving the thrill of mastery.',
    accent: 'from-accent/70 via-accent/40 to-transparent'
  },
  {
    name: 'Find it on the Map',
    description:
      'A beautiful 3D-inspired map invites you to pinch, zoom, and tap to locate nations. Each success paints the globe in luminous gradients.',
    detail: 'Haptic feedback and spatial audio bring every coastline to life.',
    accent: 'from-aurora/70 via-aurora/40 to-transparent'
  },
  {
    name: 'Match the Flag',
    description:
      'Discover the stories behind every flag with dynamic color spaces tailored for OLED. Compare, memorize, and master the emblems of the world.',
    detail: 'Unlock collectible wallpapers as you build your streak.',
    accent: 'from-amber/80 via-amber/40 to-transparent'
  }
];

export default function ModeShowcase() {
  return (
    <section id="modes" className="relative">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Game Modes</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">
            Three distinctive challenges. One unforgettable geography experience.
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            Each mode in Atlas is tuned to sharpen a different part of your memory — from names to locations to iconography. Rotate
            between them for a complete mental map of our planet.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {modes.map((mode) => (
            <article
              key={mode.name}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-6 shadow-card transition duration-500 hover:-translate-y-2 hover:border-white/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${mode.accent} opacity-0 transition duration-500 group-hover:opacity-80`} />
              <div className="relative space-y-4">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
                  Elite mode
                </div>
                <h3 className="text-2xl font-semibold text-white">{mode.name}</h3>
                <p className="text-sm leading-relaxed text-white/70">{mode.description}</p>
                <p className="text-sm text-white/50">{mode.detail}</p>
                <div className="pt-4 text-xs uppercase tracking-[0.3em] text-white/50">Built for Daily Play</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
