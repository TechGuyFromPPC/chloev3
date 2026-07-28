'use client';

import { ArrowUpRight, Calendar, MapPin, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CollabsAndCommunityPage() {
  const upcomingCollabs = [
    {
      brand: "Egypath Egypt",
      category: "Group Trip • Pinned on IG",
      status: "Upcoming Expedition",
      description: "Immersive group travel storytelling through Egypt, capturing ancient landscapes, culture, and connection. Check the pinned IG post for details.",
      image: "/egypt.jpg",
      cta: "View IG Reel",
      url: "https://www.instagram.com/jarofhibiscus"
    },
    {
      brand: "Mindanao Looperz",
      category: "Motorbike Expedition",
      status: "Confirmed Collab",
      description: "Discovering the heart of Mindanao via motorbikes. Highlighting raw terrain, local communities, and two-wheeled adventure.",
      image: "/mind2.jpg",
      cta: "Explore Route",
      url: "#"
    },
    {
      brand: "W Hotels Japan",
      category: "Hospitality & Stay",
      status: "Upcoming Campaign",
      description: "A luxury lifestyle and design-focused hospitality collaboration showcasing modern aesthetic and local Japanese experiences.",
      image: "/w.jpg",
      cta: "Learn More",
      url: "#"
    },
    {
      brand: "Ninja Tab",
      category: "App Feature & Sponsorship",
      status: "Integrated Partner",
      description: "Partnering with the ultimate split and budget travel expense app to simplify group trip finances while on the road.",
      image: "/nin.png",
      cta: "Try Ninja Tab",
      url: "#"
    }
  ];

  const communityEvents = [
    {
      title: "Secret Island Expedition Cohort",
      date: "October 2026",
      location: "Coron to El Nido Route",
      type: "Exclusive Subscriber Trip",
      description: "An intimate 3-day, 2-night remote island expedition experience hosted alongside local expedition teams.",
      image: "/exp.jpg",
      spots: "Limited Slots Available",
      url: "#"
    }
  ];

  return (
    <div className="relative min-h-screen bg-earth-dark text-earth-sand selection:bg-earth-accent selection:text-earth-dark overflow-x-hidden">
      
      {/* Cinematic Fullscreen Background Photo */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Image 
          src="/people.jpg" // Uses your cinematic background image
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
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Page Header */}
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <Link href="/" className="inline-block text-xs font-semibold tracking-widest uppercase text-earth-accent hover:underline mb-2">
              ← Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Collaborations & Community</h1>
            <p className="text-earth-sand/80 text-base md:text-lg">
              Explore upcoming brand partnerships, sponsor campaigns, and real-world experiences you can join.
            </p>
          </div>

          {/* Section 1: Upcoming Partnerships & Collabs */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-earth-accent" />
              <h2 className="text-2xl font-bold">Upcoming Brand Collabs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingCollabs.map((collab, index) => (
                <div key={index} className="rounded-2xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md shadow-xl overflow-hidden flex flex-col justify-between">
                  <div className="relative h-48 w-full">
                    <Image 
                      src={collab.image} 
                      alt={collab.brand} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-earth-dark/80 backdrop-blur-md text-earth-accent border border-earth-accent/20">
                        {collab.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-earth-sand">{collab.brand}</h3>
                        <span className="text-xs text-earth-muted font-medium">{collab.status}</span>
                      </div>
                      <p className="text-earth-sand/80 text-sm leading-relaxed">{collab.description}</p>
                    </div>
                    <a
                      href={collab.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-earth-card hover:bg-earth-accent hover:text-earth-dark transition-colors text-sm font-medium border border-earth-muted/20"
                    >
                      <span>{collab.cta}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Things Followers Can Join */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-earth-accent" />
              <h2 className="text-2xl font-bold">Community & Events</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {communityEvents.map((event, index) => (
                <div key={index} className="rounded-2xl bg-earth-dark/60 border border-earth-card/50 backdrop-blur-md shadow-xl overflow-hidden flex flex-col md:flex-row">
                  <div className="relative md:w-1/3 h-56 md:h-auto">
                    <Image 
                      src={event.image} 
                      alt={event.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-earth-accent">
                          {event.type}
                        </span>
                        <span className="text-xs text-earth-muted">•</span>
                        <span className="text-xs text-earth-muted flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {event.date}
                        </span>
                        <span className="text-xs text-earth-muted">•</span>
                        <span className="text-xs text-earth-muted flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {event.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-earth-sand">{event.title}</h3>
                      <p className="text-earth-sand/80 text-sm leading-relaxed">{event.description}</p>
                      <div className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/30">
                        {event.spots}
                      </div>
                    </div>
                    <div className="pt-2">
                      <a
                        href={event.url}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-earth-accent text-earth-dark hover:bg-earth-sand transition-colors text-sm font-medium"
                      >
                        <span>Secure Spot</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}