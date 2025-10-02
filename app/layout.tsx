import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Atlas — Learn the World',
  description:
    'Atlas is the beautifully crafted world map quiz for iPhone where you name countries, pinpoint their locations, and match every flag.',
  icons: {
    icon: '/atlas-mark.svg'
  },
  openGraph: {
    title: 'Atlas -- Learn the World',
    description:
      'Type every country, tap the right borders, name every flag, with Atlas for iPhone.',
    url: 'https://atlas.app',
    siteName: 'Atlas',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas -- Learn the World',
    description:
      'Test your geography superpowers with a premium map quiz for iPhone — countries, locations, and flags in one place.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
          <div className="absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(124,134,255,0.28),_transparent_65%)] blur-3xl" />
          <div className="absolute right-[-10%] top-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(85,235,211,0.28),_transparent_65%)] blur-3xl" />
          <div className="absolute left-1/2 top-full h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(249,168,77,0.2),_transparent_65%)] blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
