'use client';

import dynamic from 'next/dynamic';

// This dynamically loads your NomadMap exclusively on the client side
const NomadMap = dynamic(() => import('@/components/map/NomadMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[450px] w-full rounded-2xl bg-earth-card border border-earth-muted/20 flex items-center justify-center text-earth-muted animate-pulse">
      Loading nomad footprint...
    </div>
  ),
});

export default function MapWrapper() {
  return <NomadMap />;
}