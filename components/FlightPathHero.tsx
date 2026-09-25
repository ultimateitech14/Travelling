'use client';

import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

export default function FlightPathHero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-28 pb-16 overflow-hidden">
      {/* Background Subtle Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-gold/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-radial from-cyan-950/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Rotating 90s Vintage Compass (Top Right) */}
      <div className="absolute top-28 right-8 md:right-16 opacity-30 pointer-events-none hidden sm:block">
        <svg
          viewBox="0 0 100 100"
          className="w-24 h-24 md:w-32 md:h-32 animate-spin-slow text-gold stroke-current fill-none"
        >
          <circle cx="50" cy="50" r="46" strokeWidth="0.8" strokeDasharray="2 3" />
          <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
          <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.6" strokeDasharray="1 2" />
          <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.6" strokeDasharray="1 2" />
          <polygon points="50,14 53,50 50,47 47,50" fill="#4e7f68" stroke="none" />
          <polygon points="50,86 53,50 50,53 47,50" fill="#2d493f" stroke="none" />
          <text x="50" y="24" textAnchor="middle" fontSize="6" fontFamily="var(--font-dm-mono)" fill="#72a98b">N</text>
          <text x="50" y="80" textAnchor="middle" fontSize="6" fontFamily="var(--font-dm-mono)" fill="#8a8680">S</text>
          <text x="80" y="52" textAnchor="middle" fontSize="6" fontFamily="var(--font-dm-mono)" fill="#8a8680">E</text>
          <text x="20" y="52" textAnchor="middle" fontSize="6" fontFamily="var(--font-dm-mono)" fill="#8a8680">W</text>
        </svg>
      </div>



      {/* Main Headline */}
      <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-ivory max-w-5xl leading-[1.08] mb-6">
        Travel that never makes <br className="hidden sm:inline" />
        <span className="italic font-light text-gold-light">the brochure.</span>
      </h1>

      {/* Subtitle */}
      <p className="font-sans text-base md:text-lg text-ivory-dark max-w-2xl font-light leading-relaxed mb-10">
        We curate invite-only cohorts of 12–16 curious people for unmapped trails across high-altitude Ladakh,
        Himachal, and rural Rajasthan. No tour buses. No generic checklists.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
        <Link
          href="#waitlist"
          className="w-full sm:w-auto px-8 py-4 bg-gold text-obsidian font-mono text-xs font-medium tracking-[0.2em] uppercase rounded-sm hover:bg-[#3d6953] transition-all duration-300 shadow-xl shadow-gold/20 flex items-center justify-center gap-3 group"
        >
          <span>Request an Invite</span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="#trips"
          className="w-full sm:w-auto px-8 py-4 bg-surface-1/60 hover:bg-surface-2 border border-brandBorder-light hover:border-brandBorder-gold text-ivory font-mono text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300"
        >
          View 2026 Routes
        </Link>
      </div>

      {/* Animated SVG Flight Arc / Route Map Visual */}
      <div className="w-full max-w-4xl mt-14 relative">
        <svg
          viewBox="0 0 900 240"
          className="w-full h-auto overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2d493f" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#4e7f68" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#72a98b" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Reference baseline grid lines */}
          <line x1="80" y1="200" x2="820" y2="200" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 6" />
          <line x1="80" y1="120" x2="820" y2="120" stroke="rgba(255,255,255,0.04)" strokeDasharray="2 4" />

          {/* Curving Elevation / Trajectory Line */}
          <path
            id="flightTrajectory"
            d="M 100 195 C 240 190, 310 140, 420 110 C 530 80, 620 45, 780 40"
            stroke="url(#routeGradient)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="opacity-80"
          />

          {/* Waypoint 1: Delhi */}
          <circle cx="100" cy="195" r="5" fill="#080807" stroke="#4e7f68" strokeWidth="2" />
          <circle cx="100" cy="195" r="10" stroke="#4e7f68" strokeWidth="0.6" strokeDasharray="2 2" />
          <text x="100" y="222" textAnchor="middle" fill="#8a8680" fontSize="10" fontFamily="var(--font-dm-mono)">
            DELHI (216M)
          </text>

          {/* Waypoint 2: Bir Billing */}
          <circle cx="420" cy="110" r="4.5" fill="#080807" stroke="#4e7f68" strokeWidth="2" />
          <text x="420" y="95" textAnchor="middle" fill="#72a98b" fontSize="10" fontFamily="var(--font-dm-mono)">
            BIR · BILLING (2,400M)
          </text>

          {/* Waypoint 3: Happiness */}
          <circle cx="780" cy="40" r="6" fill="#4e7f68" stroke="#f5f1e6" strokeWidth="2" filter="url(#glow)" />
          <text x="780" y="24" textAnchor="middle" fill="#f5f1e6" fontSize="11" fontFamily="var(--font-dm-mono)" fontWeight="500" letterSpacing="0.05em">
            HAPPINESS
          </text>

          {/* Animated Aircraft Marker moving along path */}
          <circle r="4" fill="#f5f1e6">
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#flightTrajectory" />
            </animateMotion>
          </circle>
          <circle r="12" stroke="#4e7f68" strokeWidth="1" opacity="0.6">
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#flightTrajectory" />
            </animateMotion>
          </circle>
        </svg>
      </div>
    </section>
  );
}
