'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collabs & Community", href: "/collabs" },
    { name: "Nomad Map", href: "/#map" },
    { name: "Featured Series", href: "/#series" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-earth-dark/70 backdrop-blur-md border-b border-earth-card/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="text-lg font-bold tracking-tight text-earth-sand hover:text-earth-accent transition-colors">
          Chloe Christina
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-earth-sand/80 hover:text-earth-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-earth-card/60 border border-earth-muted/20 text-xs font-semibold text-earth-sand hover:bg-earth-accent hover:text-earth-dark transition-all shadow-md"
          >
            <span>Partner With Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl bg-earth-card/40 border border-earth-muted/20 text-earth-sand hover:text-earth-accent transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-earth-dark/95 backdrop-blur-lg border-b border-earth-card/40 px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-earth-sand/90 hover:text-earth-accent transition-colors py-2 border-b border-earth-card/20"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link 
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-earth-accent text-earth-dark font-semibold text-sm transition-all shadow-lg"
            >
              <span>Partner With Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}