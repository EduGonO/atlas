const modes = [
  {
    name: 'Name the Nation',
    description: 'Hear a cue, answer fast, and sharpen recall with gentle streak tracking.'
  },
  {
    name: 'Find it on the Map',
    description: 'Pinpoint every country directly on the globe with responsive touch controls.'
  },
  {
    name: 'Match the Flag',
    description: 'Pair each emblem to its homeland and learn the stories behind the colors.'
  }
];

export default function ModeShowcase() {
  return (
    <section id="modes" className="relative">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/45">Game Modes</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Three ways to experience the world.</h2>
          <p className="max-w-2xl text-base text-white/65">
            Each mode is intentionally pared back so you can focus on what matters: exploring the planet and committing it to
            memory.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {modes.map((mode) => (
            <article
              key={mode.name}
              className="space-y-3 rounded-3xl border border-white/12 bg-white/[0.04] p-6 transition hover:border-white/30"
            >
              <h3 className="text-xl font-semibold text-white">{mode.name}</h3>
              <p className="text-sm leading-relaxed text-white/65">{mode.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
