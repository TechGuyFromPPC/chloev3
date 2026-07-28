'use client';

import Link from 'next/link';
import { Camera, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-earth-card/30 bg-earth-dark/80 backdrop-blur-md text-earth-sand py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-earth-card/30">
        
        {/* Brand Info */}
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-xl font-bold tracking-tight">Chloe Christina</h3>
          <p className="text-earth-sand/70 text-sm max-w-sm leading-relaxed">
            Documenting authentic human connections, remote landscapes, and cinematic travel stories across the globe.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a 
              href="https://www.instagram.com/jarofhibiscus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-earth-card/40 hover:bg-earth-accent hover:text-earth-dark transition-colors border border-earth-muted/20 flex items-center gap-2 text-xs font-medium"
              aria-label="Instagram"
            >
              <Camera className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.instagram.com/jarofhibiscus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-earth-card/40 hover:bg-earth-accent hover:text-earth-dark transition-colors border border-earth-muted/20 flex items-center gap-2 text-xs font-medium"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
              <span>Explore Feed</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-earth-accent">Navigation</h4>
          <ul className="space-y-2.5 text-sm text-earth-sand/80">
            <li>
              <Link href="/" className="hover:text-earth-accent transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/collabs" className="hover:text-earth-accent transition-colors">Collabs & Community</Link>
            </li>
            <li>
              <Link href="/#map" className="hover:text-earth-accent transition-colors">Nomad Map</Link>
            </li>
            <li>
              <Link href="/#series" className="hover:text-earth-accent transition-colors">Featured Series</Link>
            </li>
          </ul>
        </div>

        {/* Contact / Inquiries */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-earth-accent">Collaborations</h4>
          <p className="text-sm text-earth-sand/70">
            Looking to partner on an upcoming expedition or brand campaign?
          </p>
          <div>
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-earth-accent hover:underline"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-earth-muted gap-4">
        <p>© {new Date().getFullYear()} Chloe Christina. All rights reserved.</p>
        <p>Designed for cinematic storytelling & exploration.</p>
      </div>
    </footer>
  );
}