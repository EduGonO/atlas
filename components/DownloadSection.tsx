import Link from 'next/link';

export default function DownloadSection() {
  return (
    <section id="waitlist" className="relative">
      <div className="mx-auto max-w-4xl rounded-[36px] border border-white/10 bg-white/5 p-8 text-white/80 backdrop-blur">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Early access</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Be the first to play Atlas.</h2>
          <p className="text-base text-white/70">
            Leave your email to receive the launch invite and a minimalist wallpaper pack inspired by the three modes.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-surface shadow-[0_20px_44px_rgba(8,12,24,0.3)] transition hover:-translate-y-0.5"
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
