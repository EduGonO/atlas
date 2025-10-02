import Link from 'next/link';

const navItems = [
  { href: '#modes', label: 'Game Modes' },
  { href: '#waitlist', label: 'Waitlist' }
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6">
      <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#050b16]/80 px-5 py-3 backdrop-blur">
        <Link href="#overview" className="text-sm font-semibold tracking-tight text-white">
          Atlas
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#waitlist"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
        >
          Join the waitlist
        </Link>
      </div>
    </header>
  );
}
