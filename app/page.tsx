import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ModeShowcase from '@/components/ModeShowcase';
import ExperienceSection from '@/components/ExperienceSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#050b17] text-white">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,61,142,0.65)_0%,rgba(12,21,42,0.78)_42%,rgba(4,10,23,0.92)_68%,rgba(2,6,17,1)_100%)]" />
        <div className="absolute inset-x-0 top-[-20%] h-[620px] bg-gradient-to-b from-white/8 via-transparent to-transparent blur-3xl" />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-aurora/35 blur-[120px]" />
        <div className="absolute -right-20 top-12 h-80 w-80 rounded-full bg-accent/25 blur-[140px]" />
        <div className="absolute inset-x-0 bottom-[-30%] h-[540px] bg-gradient-to-t from-[#0a1a3b]/60 via-transparent to-transparent blur-[220px]" />
      </div>
      <Header />
      <main className="relative z-10 flex-1 space-y-28 px-4 pb-24 pt-24 sm:px-8 lg:px-16 lg:pb-32">
        <Hero />
        <ModeShowcase />
        <ExperienceSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
