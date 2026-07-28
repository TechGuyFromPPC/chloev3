'use client';

import Navbar from "@/components/Navbar";
import SeriesGrid from "@/components/SeriesGrid";
import BrandInquiryForm from "@/components/BrandInquiryForm";
import MapWrapper from "@/components/map/MapWrapper";
import AnalyticsSection from "@/components/AnalyticsSection";
import BrandPartners from "@/components/BrandPartners";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";

// Inside your Home return statement, at the very bottom:
<Footer />

export default function Home() {
  return (
    <main className="relative min-h-screen bg-earth-dark text-earth-sand selection:bg-earth-accent selection:text-earth-dark overflow-x-hidden">
      
            {/* ─── SHARP CINEMATIC BACKGROUND ─── */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Image 
          src="/chloe4.jpeg" 
          alt="Cinematic travel background" 
          fill
          priority
          // Removed blur-sm for sharpness
          // object-cover fills screen without stretching; object-center keeps focus centered
          className="object-cover object-center opacity-40" 
        />
        {/* Increased opacity of overlay (from /75 to /85) to make crisp text readable against sharp photo */}
        <div className="absolute inset-0 bg-earth-dark/20" />
      </div>
      {/* ─── END BACKGROUND ─── */}


      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center px-6 pt-20">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-earth-dark/80 backdrop-blur-md text-earth-accent border border-earth-muted/20 shadow-lg">
              Filmmaker & Traveler • Currently in Thailand
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-earth-sand drop-shadow-2xl">
              Casting strangers, chasing horizons.
            </h1>
            <p className="text-lg text-earth-sand/90 font-medium max-w-xl mx-auto drop-shadow-md">
              Documenting authentic human connections and raw landscapes across Egypt, Japan, the Philippines, and beyond.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a 
                href="#map" 
                className="px-8 py-3.5 rounded-xl bg-earth-sand text-earth-dark font-medium hover:bg-earth-accent transition-all shadow-xl"
              >
                Explore Nomad Map
              </a>
              <Link 
                href="/collabs" 
                className="px-8 py-3.5 rounded-xl border border-earth-sand/40 bg-earth-dark/60 backdrop-blur-md text-earth-sand font-medium hover:border-earth-accent transition-all shadow-xl"
              >
                Collabs & Community
              </Link>
            </div>
          </div>
        </section>

        {/* Nomad Map Section */}
        <section id="map" className="py-24 px-6 max-w-7xl mx-auto border-t border-earth-card/30 bg-earth-dark/40 backdrop-blur-sm">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-earth-accent">Global Footprint</span>
            <h2 className="text-3xl font-bold mt-2">The Nomad Map</h2>
            <p className="text-earth-sand/80 mt-2">
              Tracking active and past expedition stops where authentic brand stories and community moments come to life.
            </p>
          </div>
          <MapWrapper />
        </section>

        {/* Analytics & Reach Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-earth-card/30 bg-earth-dark/40 backdrop-blur-sm">
          <AnalyticsSection />
        </section>

    {/* Featured Series Section */}
<section id="series" className="py-24 px-6 max-w-7xl mx-auto border-t border-earth-card/30 bg-earth-dark/40 backdrop-blur-sm">
  <div className="max-w-xl mb-12">
    <span className="text-xs font-semibold tracking-widest uppercase text-earth-accent">Portfolio Work</span>
    <h2 className="text-3xl font-bold mt-2">Featured Series</h2>
    <p className="text-earth-sand/80 mt-2">
      High-impact visual narratives and serialized storytelling built for global audiences.
    </p>
  </div>
  <SeriesGrid />
</section>

        {/* Brand Partners Section */}
        <BrandPartners />

        {/* Brand Inquiry / Contact Section */}
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-earth-card/30 bg-earth-dark/40 backdrop-blur-sm">
          <BrandInquiryForm />
        </section>
      </div>
  
<Footer />
    </main>
    
  );
}