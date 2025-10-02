import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { href: '#overview', label: 'Overview' },
  { href: '#modes', label: 'Game Modes' },
  { href: '#waitlist', label: 'Updates' }
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6">
      <div className="glass flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-glow transition-shadow duration-400 ease-out hover:shadow-[0_0_140px_rgba(124,134,255,0.22)]">
        <Link href="#overview" className="flex items-center gap-3 text-sm font-semibold tracking-tight text-white">
          <span className="relative flex h-9 w-9 overflow-hidden rounded-full">
            <Image src="/logo.jpeg" alt="Atlas" width={48} height={48} priority className="h-full w-full object-cover" />
          </span>
          <span className="text-base font-semibold text-white/90">Atlas</span>
        </Link>
        <nav className="hidden items-center gap-10 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#waitlist"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 transition-colors hover:border-white/35 hover:text-white md:inline-flex"
          >
            Join the waitlist
          </Link>
          <Link
            href="https://apps.apple.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-surface shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(15,23,42,0.2)]"
          >
            <span className="text-lg"></span>
            App Store
          </Link>
        </div>
      </div>
    </header>
  );
}
