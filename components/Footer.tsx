import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent via-white/40 to-aurora text-surface">
            <span className="text-lg font-semibold">A</span>
          </span>
          <div>
            <p className="text-white/90">Atlas</p>
            <p>Crafted for curious explorers everywhere.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#modes" className="transition hover:text-white">
            Modes
          </Link>
          <Link href="#experience" className="transition hover:text-white">
            Experience
          </Link>
          <Link href="#download" className="transition hover:text-white">
            Download
          </Link>
          <Link href="mailto:hello@atlas.app" className="transition hover:text-white">
            Contact
          </Link>
        </div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Atlas Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
