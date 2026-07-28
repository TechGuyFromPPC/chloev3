'use client';

import Image from 'next/image';

export default function BrandPartners() {
  const partners = [
    { name: "GetYourGuide", logo: "/gyg.png" },
    { name: "Worldpackers", logo: "/wp.png" },
    { name: "Hoilcay Travel", logo: "/holi.png" },
    { name: "Egypath Egypt", logo: "/egypt.jpg" },
    { name: "Mindanao Looperz", logo: "/mind2.jpg" },
    { name: "W Hotels Japan", logo: "/w.jpg" },
    { name: "Ninja Tab", logo: "/nin.png" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-earth-card/30 bg-earth-dark/40 backdrop-blur-sm">
      <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
        <span className="text-xs font-semibold tracking-widest uppercase text-earth-accent">Trusted Collaborations</span>
        <h2 className="text-3xl font-bold">Previous & Current Partners</h2>
        <p className="text-earth-sand/80 text-sm">Proud to collaborate with leading travel, gear, and lifestyle brands.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center max-w-5xl mx-auto">
        {partners.map((partner, index) => (
          <div 
            key={index} 
            className="h-28 p-6 rounded-2xl bg-earth-card/30 border border-earth-muted/10 flex items-center justify-center hover:border-earth-accent/50 transition-all duration-300 relative group"
          >
            <Image 
              src={partner.logo} 
              alt={partner.name} 
              width={120} 
              height={50} 
              className="object-contain max-h-12 w-auto" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}