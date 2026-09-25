'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Compass, ArrowUpRight, ArrowRight, MapPin, Sparkles, Shield, Users } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-obsidian/90 backdrop-blur-md border-b border-brandBorder-light py-4 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center group py-0.5"
          >
            <img
              src="/logo.png"
              alt="Being Traveller"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-ivory-muted hover:text-gold transition-colors py-2"
            >
              <span>Explore</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-gold' : ''}`}
              />
            </button>

            <Link
              href="/#about"
              className="font-mono text-xs tracking-widest uppercase text-ivory-muted hover:text-gold transition-colors"
            >
              Ethos
            </Link>

            <Link
              href="/#trips"
              className="font-mono text-xs tracking-widest uppercase text-ivory-muted hover:text-gold transition-colors"
            >
              Trips
            </Link>

            <Link
              href="/hiring"
              className="font-mono text-xs tracking-widest uppercase text-ivory-muted hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <span>Careers</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#waitlist"
              className="hidden md:inline-flex px-5 py-2.5 bg-gold text-obsidian font-mono text-[11px] font-medium tracking-widest uppercase rounded-sm hover:bg-[#b8924f] transition-all duration-200 shadow-lg shadow-gold/10"
            >
              Request Invite
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-ivory-muted hover:text-gold transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-Down Mega Menu Drawer */}
      <div
        className={`fixed inset-x-0 top-0 z-40 bg-obsidian-dark/98 backdrop-blur-2xl border-b border-brandBorder-medium transition-all duration-500 ease-out overflow-y-auto ${
          isOpen ? 'max-h-[92vh] pt-24 pb-14 opacity-100' : 'max-h-0 pt-0 pb-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Mobile Quick Action (Visible only inside mobile hamburger menu) */}
        <div className="md:hidden max-w-7xl mx-auto px-6 pb-6 mb-6 border-b border-brandBorder-light space-y-4">
          <Link
            href="/#waitlist"
            onClick={() => setIsOpen(false)}
            className="w-full py-3.5 px-6 bg-gold text-obsidian font-mono text-xs font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#b8924f] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-gold/15"
          >
            <span>Request An Invite</span>
            <ArrowRight size={14} />
          </Link>
          <div className="flex justify-around items-center pt-2 font-mono text-[11px] tracking-wider uppercase text-ivory-muted">
            <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">
              Ethos
            </Link>
            <span className="text-brandMuted">·</span>
            <Link href="/#trips" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">
              Trips
            </Link>
            <span className="text-brandMuted">·</span>
            <Link href="/hiring" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">
              Careers
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left">
          {/* Column 1: Expeditions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-gold uppercase pb-2 border-b border-brandBorder-light">
              <Compass size={14} />
              <span>Current Expeditions</span>
            </div>
            <div className="space-y-3 pt-2">
              <Link
                href="/bir-rajgundha-barot"
                className="group block p-3.5 rounded bg-surface-1 hover:bg-surface-2 border border-brandBorder-light hover:border-brandBorder-gold transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">
                    Bir · Rajgundha · Barot
                  </div>
                  <ArrowUpRight size={15} className="text-brandMuted group-hover:text-gold transition-colors" />
                </div>
                <div className="font-mono text-xs text-brandMuted mt-1 flex items-center gap-2">
                  <MapPin size={11} className="text-gold" />
                  <span>Himachal Pradesh · 3D / 2N · 16 seats</span>
                </div>
              </Link>

              <Link
                href="/#trips"
                onClick={() => setIsOpen(false)}
                className="group block p-3.5 rounded bg-surface-1 hover:bg-surface-2 border border-brandBorder-light hover:border-brandBorder-gold transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">
                    Udaipur × Jawai Safari
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gold px-2 py-0.5 rounded bg-gold-pale border border-brandBorder-gold">
                    Coming Soon
                  </span>
                </div>
                <div className="font-mono text-xs text-brandMuted mt-1 flex items-center gap-2">
                  <MapPin size={11} className="text-gold" />
                  <span>Rajasthan · 3D / 2N · 14 seats</span>
                </div>
              </Link>

              <Link
                href="/#trips"
                onClick={() => setIsOpen(false)}
                className="group block p-3.5 rounded bg-surface-1 hover:bg-surface-2 border border-brandBorder-light hover:border-brandBorder-gold transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">
                    Zanskar — The Road Less Taken
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gold px-2 py-0.5 rounded bg-gold-pale border border-brandBorder-gold">
                    Coming Soon
                  </span>
                </div>
                <div className="font-mono text-xs text-brandMuted mt-1 flex items-center gap-2">
                  <MapPin size={11} className="text-gold" />
                  <span>Ladakh · Shinkun La (5,091m) · 20 spots</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2: Ethos & Standards */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-gold uppercase pb-2 border-b border-brandBorder-light">
              <Shield size={14} />
              <span>The Standard</span>
            </div>
            <ul className="space-y-3 pt-2 text-sm text-ivory-dark">
              <li className="p-3 rounded bg-surface-1/60 border border-brandBorder-light">
                <div className="font-serif text-base text-ivory">Cohorts, Not Crowds</div>
                <div className="font-sans text-xs text-brandMuted mt-1">
                  12 to 16 verified travelers per trip with balanced age and background representation.
                </div>
              </li>
              <li className="p-3 rounded bg-surface-1/60 border border-brandBorder-light">
                <div className="font-serif text-base text-ivory">Force Urbania Transit</div>
                <div className="font-sans text-xs text-brandMuted mt-1">
                  Captain-class recliner seating, dual AC, high roof, and dedicated luggage holds.
                </div>
              </li>
              <li className="p-3 rounded bg-surface-1/60 border border-brandBorder-light">
                <div className="font-serif text-base text-ivory">Zero Generic Itineraries</div>
                <div className="font-sans text-xs text-brandMuted mt-1">
                  Private campsites, local family homestays, and trails not listed on TripAdvisor.
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Team & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-gold uppercase pb-2 border-b border-brandBorder-light">
              <Users size={14} />
              <span>Connect</span>
            </div>
            <div className="space-y-3 pt-2">
              <Link
                href="/hiring"
                className="group block p-3.5 rounded bg-surface-1 hover:bg-surface-2 border border-brandBorder-light hover:border-brandBorder-gold transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">
                    Join Founding Team
                  </div>
                  <span className="font-mono text-[10px] uppercase text-emerald-400 border border-emerald-400/30 px-2 py-0.5 rounded">
                    Open
                  </span>
                </div>
                <div className="font-sans text-xs text-brandMuted mt-1">
                  We are hiring lead expedition architects, community leads, and operators.
                </div>
              </Link>

              <div className="p-4 rounded bg-surface-1/40 border border-brandBorder-light space-y-2">
                <div className="font-mono text-[11px] text-brandMuted uppercase tracking-wider">Direct Concierge</div>
                <div className="font-mono text-xs text-ivory hover:text-gold transition-colors">
                  <a href="mailto:Beingtraveller1922@gmail.com">Beingtraveller1922@gmail.com</a>
                </div>
                <div className="font-mono text-xs text-ivory hover:text-gold transition-colors">
                  <a href="https://wa.me/917536891201" target="_blank" rel="noopener noreferrer">
                    WhatsApp: +91 7536891201
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
