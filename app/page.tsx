'use client';

import { useState } from 'react';
import Link from 'next/link';
import FlightPathHero from '@/components/FlightPathHero';
import MarqueeTicker from '@/components/MarqueeTicker';
import ApplicationForm from '@/components/ApplicationForm';
import { ArrowRight, MapPin, Calendar, Users, Sparkles, Check, Compass, Radio, Clock, X } from 'lucide-react';

export default function HomePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeComingSoonTrip, setActiveComingSoonTrip] = useState<string | null>(null);

  const handleComingSoon = (tripTitle: string) => {
    setActiveComingSoonTrip(tripTitle);
    setToastMessage(`Itinerary & departure dates for "${tripTitle}" are being finalized. Applications will open soon!`);
    setTimeout(() => {
      setToastMessage((prev) => (prev?.includes(tripTitle) ? null : prev));
    }, 4500);
  };

  const expeditions = [
    {
      slug: 'bir-rajgundha-barot',
      title: 'Bir · Rajgundha · Barot',
      region: 'Himachal Pradesh',
      duration: '3D / 2N',
      seats: '16 Seats',
      price: '₹9,999',
      dates: '17 Oct - 19 Oct, 2026',
      badge: 'Bestseller',
      isOpen: true,
      description: 'Hike through 360° oak forests, sleep under 10,000 stars in Rajgundha valley, and cross the remote Uhl river in Barot.',
      highlights: ['Rajgundha valley riverside camp', 'Force Urbania Captain transit', 'Billing sunset & stargazing', 'Local Kangri dham feast'],
    },
    {
      slug: 'udaipur-trip',
      title: 'Udaipur × Jawai Safari',
      region: 'Rajasthan',
      duration: '3D / 2N',
      seats: '14 Seats',
      price: '₹14,500',
      dates: '',
      badge: 'Heritage & Wildlife',
      isOpen: false,
      description: 'Granite leopard rocks of Jawai, private boat gliding across Lake Pichola at golden hour, and sunset over Sajjangarh Monsoon Palace.',
      highlights: ['Open 4×4 Rabari leopard tracking', 'Lake Pichola sunset boat charter', 'Heritage boutique haveli stay', 'Campfire under desert constellation'],
    },
    {
      slug: 'zanskar',
      title: 'Zanskar — The Road Less Taken',
      region: 'Ladakh High Desert',
      duration: '3D / 2N',
      seats: '20 Spots',
      price: '₹9,000',
      dates: '',
      badge: 'High Altitude',
      isOpen: false,
      description: 'Conquer the newly opened 5,091m Shinkun La pass, witness the 1,000-year-old cliffside Phuktal monastery, and camp below Gonbo Rangjon.',
      highlights: ['Shinkun La 5,091m pass crossing', 'Sacred peak of Gonbo Rangjon', 'Cliffside Phuktal monastery hike', 'Zero network, pure wilderness'],
    },
  ];

  const critiqueItems = [
    {
      num: '01',
      problem: 'The 40-Seater Volvo Nightmare',
      solution: 'Strictly 12–16 person cohorts in custom Force Urbania coaches with captain recliners and dual AC.',
    },
    {
      num: '02',
      problem: 'The Rushed Tourist Checklist',
      solution: 'We spend 6 hours sitting by a single river in Rajgundha instead of rushing through 14 viewpoints.',
    },
    {
      num: '03',
      problem: 'The Awkward Stranger Dynamic',
      solution: 'Every participant is vetted by hand. Age, interests, and mindset are balanced before issuing an invite.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <FlightPathHero />

      {/* 2. Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. The Critique & Stats */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">The Thesis</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory mt-2">
              Why group travel <br className="hidden sm:inline" />
              <span className="italic text-gold-light">needs to change.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-ivory-dark max-w-md leading-relaxed">
            Most commercial trips treat travelers like baggage in an assembly line. We engineered the antidote:
            small, intentional expeditions for high-agency people.
          </p>
        </div>

        {/* 3 Critique Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {critiqueItems.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-lg bg-surface-1 border border-brandBorder-light hover:border-brandBorder-gold transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-sm text-gold tracking-widest">{item.num}</span>
                <h3 className="font-serif text-xl text-ivory mt-3 mb-4 group-hover:text-gold transition-colors">
                  {item.problem}
                </h3>
              </div>
              <p className="font-sans text-xs text-brandMuted leading-relaxed border-t border-brandBorder-light pt-4 mt-4">
                <strong className="text-ivory font-medium">Being Traveller Way:</strong> {item.solution}
              </p>
            </div>
          ))}
        </div>

        {/* 2x2 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-brandBorder-light">
          <div className="text-center md:text-left">
            <div className="font-serif text-4xl sm:text-5xl text-gold font-light">16</div>
            <div className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-brandMuted mt-1">
              Max Cohort Size
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="font-serif text-4xl sm:text-5xl text-ivory font-light">50:50</div>
            <div className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-brandMuted mt-1">
              Gender Balanced
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="font-serif text-4xl sm:text-5xl text-gold font-light">5,091m</div>
            <div className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-brandMuted mt-1">
              Peak Pass Elevation
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="font-serif text-4xl sm:text-5xl text-ivory font-light">0</div>
            <div className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-brandMuted mt-1">
              Commercial Buses
            </div>
          </div>
        </div>
      </section>

      {/* 4. Upcoming Trips Section */}
      <section id="trips" className="py-24 px-6 md:px-12 bg-surface-1/30 border-t border-brandBorder-light">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">2026 Itineraries</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-ivory mt-2">
                Curated Expeditions. <br />
                <span className="italic text-gold-light">October Departures.</span>
              </h2>
            </div>
            <div className="font-mono text-xs text-brandMuted flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Applications Open · Vetted Cohorts Only</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expeditions.map((trip) => (
              <div
                key={trip.slug}
                onClick={() => {
                  if (!trip.isOpen) {
                    handleComingSoon(trip.title);
                  }
                }}
                className={`rounded-lg bg-surface-1 border border-brandBorder-medium hover:border-gold/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl ${
                  !trip.isOpen ? 'cursor-pointer' : ''
                }`}
              >
                {/* Header Banner */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold px-2.5 py-1 rounded bg-gold-pale border border-brandBorder-gold">
                      {trip.badge}
                    </span>
                    <span className="font-mono text-xs text-ivory font-medium">{trip.price}</span>
                  </div>

                  {trip.isOpen ? (
                    <Link href={`/${trip.slug}`}>
                      <h3 className="font-serif text-2xl md:text-3xl text-ivory group-hover:text-gold transition-colors">
                        {trip.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="font-serif text-2xl md:text-3xl text-ivory group-hover:text-gold transition-colors">
                      {trip.title}
                    </h3>
                  )}

                  <div className="flex flex-wrap gap-4 font-mono text-[11px] text-brandMuted">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-gold" />
                      <span>{trip.region}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-gold" />
                      <span>{trip.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={12} className="text-gold" />
                      <span>{trip.seats}</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-ivory-dark leading-relaxed">{trip.description}</p>

                  {/* Highlight bullets */}
                  <div className="space-y-2 pt-4 border-t border-brandBorder-light">
                    {trip.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-brandMuted">
                        <Check size={12} className="text-gold flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 bg-surface-2/60 border-t border-brandBorder-light flex items-center justify-between min-h-[72px]">
                  <span className="font-mono text-[10px] text-brandMuted uppercase tracking-wider">
                    {trip.dates || ''}
                  </span>

                  {trip.isOpen ? (
                    <Link
                      href={`/${trip.slug}`}
                      className="font-mono text-xs text-gold hover:text-gold-light flex items-center gap-1.5 uppercase tracking-wider group-hover:translate-x-1 transition-all"
                    >
                      <span>View Itinerary</span>
                      <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleComingSoon(trip.title);
                      }}
                      className="font-mono text-xs text-gold hover:text-gold-light flex items-center gap-1.5 uppercase tracking-wider transition-all cursor-pointer group/btn"
                    >
                      {activeComingSoonTrip === trip.title ? (
                        <span className="flex items-center gap-1.5 text-gold-light font-semibold animate-pulse">
                          <Clock size={13} />
                          Coming Soon
                        </span>
                      ) : (
                        <>
                          <span>View Itinerary</span>
                          <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works Progression Line */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">The Mechanism</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory mt-2">How A Being Traveller Trip Happens</h2>
          <p className="font-sans text-xs sm:text-sm text-brandMuted mt-3">
            Because cohorts are limited to 16 seats, we do not have an instant buy-now button. Here is the process:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {[
            {
              step: '01',
              title: 'Request An Invite',
              desc: 'Fill out the short profile form below with your travel background and preferred departure dates.',
            },
            {
              step: '02',
              title: 'Cohort Review',
              desc: 'Our curation team reviews applications to ensure healthy gender ratios, diverse passions, and vibe alignment.',
            },
            {
              step: '03',
              title: 'Access Granted',
              desc: 'Approved travelers receive a private WhatsApp access link to confirm their seat with the ₹2,500 advance.',
            },
            {
              step: '04',
              title: 'Roll Out',
              desc: 'Meet your 15 fellow travelers at the Delhi departure hub and board our custom Force Urbania.',
            },
          ].map((item, idx) => (
            <div
              key={item.step}
              className="p-6 rounded-lg bg-surface-1 border border-brandBorder-light relative flex flex-col justify-between"
            >
              <div className="font-mono text-2xl text-gold font-light mb-3">{item.step}</div>
              <div>
                <h4 className="font-serif text-lg text-ivory mb-2">{item.title}</h4>
                <p className="font-sans text-xs text-brandMuted leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-6 font-mono text-[9px] text-brandMuted-dark uppercase tracking-widest">
                Step {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Radar Banner (Hiring / Careers Callout) */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-surface-1 via-surface-2 to-surface-1 border-y border-brandBorder-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            {/* Animated Radar Sweep Visual */}
            <div className="relative w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-1 rounded-full border border-dashed border-gold/20" />
              <div className="absolute inset-0 rounded-full border-t border-gold animate-radar" />
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                <Radio size={12} />
                <span>Founding Team Radar</span>
              </div>
              <h3 className="font-serif text-2xl text-ivory mt-1">We are looking for Expedition Architects</h3>
              <p className="font-sans text-xs text-brandMuted max-w-lg mt-1">
                If you have hiked unmapped trails, led backcountry trips, or know how to build community, join us.
              </p>
            </div>
          </div>
          <Link
            href="/hiring"
            className="px-6 py-3.5 bg-surface-3 hover:bg-surface-2 border border-brandBorder-gold text-gold font-mono text-xs tracking-widest uppercase rounded-sm transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span>View Open Roles</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* 7. Application Waitlist Form */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">October 2026</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory mt-2">Claim A Spot</h2>
          <p className="font-sans text-xs sm:text-sm text-brandMuted mt-3">
            Tell us about yourself. If approved, we will reach out with your cohort access key.
          </p>
        </div>

        <ApplicationForm tripName="All October 2026 Expeditions" />
      </section>

      {/* Coming Soon Toast Notification */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-md bg-[#0e1611]/95 border border-brandBorder-gold shadow-2xl rounded-xl p-4 flex items-start gap-3.5 backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 transition-all"
        >
          <div className="w-9 h-9 rounded-full bg-gold-pale border border-brandBorder-gold flex items-center justify-center flex-shrink-0 text-gold mt-0.5 shadow-inner">
            <Clock size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-gold font-semibold">
                Expedition Coming Soon
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <p className="font-sans text-xs text-ivory/90 mt-1 leading-relaxed">
              {toastMessage}
            </p>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-brandMuted hover:text-ivory transition-colors p-1.5 rounded hover:bg-surface-2 -mr-1 -mt-1 text-xs"
            aria-label="Close notification"
          >
            <X size={15} />
          </button>
        </aside>
      )}
    </div>
  );
}
