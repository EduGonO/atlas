import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ModeShowcase from '@/components/ModeShowcase';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import GlobeStage from '@/components/GlobeStage';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#040915] text-white">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(22,53,138,0.7)_0%,rgba(9,18,42,0.82)_40%,rgba(2,7,20,0.95)_75%,rgba(1,4,14,1)_100%)]" />
      </div>
      <GlobeStage />
      <Header />
      <main className="relative z-10 flex-1 space-y-24 px-4 pb-24 pt-32 sm:px-8 lg:px-16 lg:pb-32">
        <Hero />
        <ModeShowcase />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
