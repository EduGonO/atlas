const experiences = [
  {
    title: 'Designed like a native iOS classic',
    description:
      'Custom typography, thoughtful motion, and subtle glassmorphism make Atlas feel at home alongside the best Apple-made apps.'
  },
  {
    title: 'Progress that feels personal',
    description:
      'Earn streaks, unlock badges, and compare with friends through private leaderboards. Atlas celebrates every milestone you hit.'
  },
  {
    title: 'Audio that paints the planet',
    description:
      'Layered spatial soundscapes transport you to each region. From bustling cities to tranquil coastlines, every guess has a soundtrack.'
  }
];

const stats = [
  { label: 'Countries to master', value: '195' },
  { label: 'Immersive maps', value: '6 styles' },
  { label: 'Daily challenges', value: '3 new sets' }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-white/40">Experience</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
              Every interaction is tuned for delight, clarity, and speed.
            </h2>
          </div>
          <div className="space-y-6">
            {experiences.map((experience) => (
              <div key={experience.title} className="group rounded-[26px] border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/25">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent group-hover:from-white/30" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] p-8 shadow-card">
            <div className="absolute inset-0 bg-grid-faint opacity-40" />
            <div className="relative space-y-8">
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-[0.28em] text-white/40">Your Atlas Journey</h3>
                <p className="text-2xl font-semibold text-white">Geography fluency at a glance.</p>
              </div>
              <div className="grid gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <div className="text-3xl font-semibold text-white">{stat.value}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-accent/20 via-aurora/20 to-transparent p-5">
                <p className="text-sm text-white/70">
                  Built with respect for your time. Atlas sessions adapt to fit micro-breaks or deep learning marathons with
                  ease.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
