'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Compass, Heart, Sparkles, Video } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-earth-dark text-earth-sand selection:bg-earth-accent selection:text-earth-dark overflow-x-hidden">
      
      {/* Cinematic Fullscreen Background Photo */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Image 
          src="/jeep.jpg" // Replace with your wide cinematic background photo if desired
          alt="Cinematic background" 
          fill
          priority
          className="object-cover object-center" 
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-earth-dark/85 backdrop-blur-[2px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Back Link */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-earth-accent hover:underline">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
          </div>

          {/* Hero / Intro Split Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Photo Side */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-earth-card/50">
                <Image 
                  src="/chloe3.jpeg" // Your portrait or favorite expedition photo path
                  alt="Chloe Christina" 
                  fill 
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <span className="text-xs font-semibold tracking-widest uppercase text-earth-accent">Documentary Filmmaker</span>
                  <h3 className="text-2xl font-bold text-earth-sand">Chloe Christina</h3>
                </div>
              </div>
            </div>

            {/* Narrative Side */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-earth-accent">Who Am I?</span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Casting strangers, capturing raw horizons.</h1>
              </div>

              <div className="space-y-4 text-earth-sand/80 text-base leading-relaxed">
                <p>
                  Hi, I am Chloe. At my core, I am a filmmaker, traveler, and dedicated visual storyteller driven by an insatiable curiosity about the world and the people who inhabit it. My work moves past traditional travel vlogging—instead focusing on intimate, unscripted human connections, breathtaking remote landscapes, and profound cultural immersion.
                </p>
                <p>
                  Whether I am riding motorbikes through rugged terrain, navigating ancient streets in Egypt, or dropping anchor on hidden island expeditions across the Philippines, my mission is to translate visceral real-world experiences into cinematic narratives that resonate deeply with audiences around the globe.
                </p>
                <p>
                  From collaborating with global brands like GetYourGuide, Worldpackers, and W Hotels to hosting intimate group trips and community cleanups, every project is built on a foundation of authenticity, respect for local environments, and genuine storytelling.
                </p>
              </div>
            </div>

          </div>

          {/* Core Pillars / Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-earth-card/30">
            
            <div className="p-8 rounded-2xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-earth-accent/10 flex items-center justify-center text-earth-accent">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-earth-sand">Immersive Exploration</h3>
              <p className="text-sm text-earth-sand/80 leading-relaxed">
                Stepping away from tourist tracks to uncover the genuine heartbeat of every destination, documenting raw environments and true grit.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-earth-accent/10 flex items-center justify-center text-earth-accent">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-earth-sand">Cinematic Integrity</h3>
              <p className="text-sm text-earth-sand/80 leading-relaxed">
                Merging high-end visual aesthetics with unscripted reality, creating serialized video content that builds immediate trust and emotional impact.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-earth-accent/10 flex items-center justify-center text-earth-accent">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-earth-sand">Community Connection</h3>
              <p className="text-sm text-earth-sand/80 leading-relaxed">
                Fostering a global community of travelers, creators, and advocates through shared adventures, group expeditions, and meaningful brand partnerships.
              </p>
            </div>

          </div>

          {/* Call to Action Footer */}
          <div className="p-12 rounded-3xl bg-earth-card/40 border border-earth-card/50 text-center space-y-6 max-w-3xl mx-auto backdrop-blur-md shadow-xl">
            <Sparkles className="w-8 h-8 text-earth-accent mx-auto" />
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-sand">Let's create something extraordinary together.</h2>
              <p className="text-sm text-earth-sand/80 max-w-lg mx-auto">
                Whether you want to sponsor an upcoming campaign, join an expedition, or collaborate on a creative venture, I'd love to hear from you.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link 
                href="/#contact" 
                className="px-8 py-3 rounded-xl bg-earth-accent text-earth-dark font-medium hover:bg-earth-sand transition-colors text-sm shadow-lg"
              >
                Get in Touch
              </Link>
              <Link 
                href="/collabs" 
                className="px-8 py-3 rounded-xl border border-earth-sand/40 bg-earth-dark/60 backdrop-blur-md text-earth-sand font-medium hover:border-earth-accent transition-colors text-sm shadow-lg"
              >
                View Collabs & Events
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}