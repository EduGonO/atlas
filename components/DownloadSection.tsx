import Link from 'next/link';

export default function DownloadSection() {
  return (
    <section id="download" className="relative">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-accent/20 via-white/10 to-transparent p-[1px]">
        <div className="grid gap-8 rounded-[40px] bg-surface/70 px-8 py-10 backdrop-blur xl:grid-cols-[2fr_1fr] xl:items-center xl:px-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Available soon</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Reserve your seat on the Atlas waitlist.</h2>
            <p className="text-base text-white/70">
              Get early access, exclusive icon packs, and behind-the-scenes updates on how we crafted the most beautiful world map quiz for iPhone.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="h-12 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-surface shadow-[0_20px_44px_rgba(8,12,24,0.35)] transition hover:-translate-y-0.5"
              >
                Join waitlist
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-4 rounded-[28px] border border-white/15 bg-white/[0.08] p-6 text-sm text-white/70">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">What you get</div>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>• Day-one notification when Atlas launches</li>
                <li>• Access to the Atlas Founders community</li>
                <li>• Exclusive wallpapers from every continent</li>
              </ul>
            </div>
            <Link href="https://apps.apple.com" className="inline-flex items-center gap-2 text-white/70 transition hover:text-white">
              Preview on the App Store
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M4 12l6-6M10 12V6H4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
