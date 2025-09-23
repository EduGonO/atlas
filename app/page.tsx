import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ModeShowcase from '@/components/ModeShowcase';
import ExperienceSection from '@/components/ExperienceSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 space-y-28 px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <Hero />
        <ModeShowcase />
        <ExperienceSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
