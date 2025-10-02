import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white/80">Atlas</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#overview" className="transition hover:text-white">
            Overview
          </Link>
          <Link href="#modes" className="transition hover:text-white">
            Modes
          </Link>
          <Link href="#waitlist" className="transition hover:text-white">
            Updates
          </Link>
        </div>
        <p className="text-xs text-white/35">© {new Date().getFullYear()} Atlas Labs</p>
      </div>
    </footer>
  );
}
