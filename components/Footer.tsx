import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-white/80">
          <span className="relative flex h-9 w-9 overflow-hidden rounded-full">
            <Image src="/logo.jpeg" alt="Atlas logo" width={48} height={48} className="h-full w-full object-cover" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">Atlas</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/45">for curious people, everywhere</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#overview" className="transition-colors hover:text-white">
            Overview
          </Link>
          <Link href="#modes" className="transition-colors hover:text-white">
            Modes
          </Link>
          <Link href="#waitlist" className="transition-colors hover:text-white">
            Updates
          </Link>
        </div>
        <p className="text-xs text-white/35">© {new Date().getFullYear()} Atlas Labs</p>
      </div>
    </footer>
  );
}
