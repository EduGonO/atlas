import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050b16]/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white/80">Atlas</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#modes" className="transition hover:text-white">
            Modes
          </Link>
          <Link href="#waitlist" className="transition hover:text-white">
            Waitlist
          </Link>
          <Link href="mailto:hello@atlas.app" className="transition hover:text-white">
            Contact
          </Link>
        </div>
        <p className="text-xs text-white/35">© {new Date().getFullYear()} Atlas Labs</p>
      </div>
    </footer>
  );
}
