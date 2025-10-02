import Link from 'next/link';

export default function DownloadSection() {
  return (
    <section id="waitlist" className="relative">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[44px] border border-white/10 bg-white/[0.04] p-10 text-white/75 shadow-[0_70px_140px_-70px_rgba(8,12,24,0.85)] backdrop-blur-2xl">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.02]" />
          <div className="absolute left-[-15%] top-[-20%] h-64 w-64 rounded-full bg-accent/25 blur-[140px]" />
          <div className="absolute right-[-10%] bottom-[-30%] h-72 w-72 rounded-full bg-aurora/25 blur-[160px]" />
          <div className="absolute inset-0 bg-grid-faint bg-[length:150px_150px] opacity-20" />
        </div>
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.26em] text-white/45">Early access</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Be first in line for Atlas.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/70">
            Join the waitlist for a calm cadence of updates and a launch invite the moment Atlas is ready.
          </p>
          <form className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Email address"
              className="w-full flex-1 rounded-full border border-white/12 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/35 focus:outline-none sm:h-12 sm:py-0"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-surface shadow-[0_24px_44px_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 sm:h-12 sm:w-auto sm:py-0"
            >
              Join the waitlist
            </button>
          </form>
          <Link href="https://apps.apple.com" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
            Preview on the App Store
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M4 12l6-6M10 12V6H4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
