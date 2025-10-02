'use client';

import dynamic from 'next/dynamic';

const InteractiveGlobe = dynamic(() => import('./InteractiveGlobe'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-white/60" />
    </div>
  )
});

export default function GlobeStage() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-40%] h-[720px] bg-gradient-to-b from-white/10 via-transparent to-transparent blur-[220px]" />
        <div className="absolute inset-x-0 bottom-[-30%] h-[560px] bg-gradient-to-t from-[#031027]/80 via-transparent to-transparent blur-[220px]" />
        <div className="absolute left-1/4 top-12 h-72 w-72 rounded-full bg-aurora/40 blur-[160px]" />
        <div className="absolute right-1/4 bottom-24 h-80 w-80 rounded-full bg-accent/35 blur-[180px]" />
      </div>
      <div className="pointer-events-auto relative aspect-square w-[min(120vmin,900px)] max-w-[92vw] min-w-[260px] sm:max-w-[80vw] lg:max-w-[720px] xl:max-w-[840px]">
        <div aria-hidden className="absolute -inset-[10%] rounded-full bg-gradient-to-br from-aurora/20 via-transparent to-accent/20 blur-[140px]" />
        <div aria-hidden className="absolute inset-0 rounded-full border border-white/5" />
        <div className="relative size-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-[#040c1d]/95 via-[#020713]/92 to-[#01040c]/95 shadow-[0_80px_220px_-60px_rgba(2,8,21,0.85)]">
          <InteractiveGlobe />
        </div>
      </div>
    </div>
  );
}
