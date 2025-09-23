import Link from 'next/link';

const navItems = [
  { href: '#modes', label: 'Game Modes' },
  { href: '#experience', label: 'Experience' },
  { href: '#download', label: 'Download' }
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6">
      <div className="glass flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-glow transition-all duration-500 ease-out hover:shadow-[0_0_160px_rgba(124,134,255,0.24)]">
        <Link href="#" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent via-white/40 to-aurora text-surface shadow-inner">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden className="h-5 w-5 text-surface">
              <defs>
                <radialGradient id="atlas-logo" cx="0" cy="0" r="1" gradientTransform="translate(8 8) scale(24)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#060713" />
                  <stop offset="1" stopColor="#101425" />
                </radialGradient>
              </defs>
              <circle cx="16" cy="16" r="15" fill="url(#atlas-logo)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.75" />
              <path
                d="M9.5 11.5c1.8-3.2 5.1-5.2 8.8-5.2 4.9 0 9 3.5 9.7 8.3-3.6 1.3-7.1 1.8-10.6 1.7-3.4-.1-6.7-.8-9.9-2.2 0-.9.7-1.9 2-2.6z"
                fill="rgba(124,134,255,0.55)"
              />
              <path d="M7.2 16.5c3.5 1.3 7.2 1.8 11.1 1.7 3.6-.1 7-.6 10.2-1.7-.2 5-4.4 9-9.6 9-4.7 0-8.7-3.4-9.5-7.8-1.2-.3-1.9-.7-2.2-1.2z" fill="rgba(85,235,211,0.55)" />
            </svg>
          </span>
          Atlas
        </Link>
        <nav className="hidden items-center gap-10 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#download"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 transition hover:border-white/40 hover:text-white md:inline-flex"
          >
            Join the waitlist
          </Link>
          <Link
            href="https://apps.apple.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-surface shadow-lg transition hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(15,23,42,0.25)]"
          >
            <span className="text-lg"></span>
            App Store
          </Link>
        </div>
      </div>
    </header>
  );
}
