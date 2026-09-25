'use client';

import { useState } from 'react';
import Link from 'next/link';
import StarfieldCanvas from '@/components/StarfieldCanvas';
import ApplicationForm from '@/components/ApplicationForm';
import { ArrowLeft, Compass, Check, X, Shield, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';

interface SeatItem {
  id: string;
  type: 'male' | 'female' | 'special' | 'driver';
  label: string;
  name?: string;
}

export default function BirItineraryPage() {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const itineraryDays = [
    {
      dayLabel: 'Day 0 · Night Departure',
      title: 'Delhi to',
      titleHighlight: 'Bir',
      location: '📍 Departure · Delhi',
      activities: [
        {
          time: '10:00 PM',
          icon: '🚌',
          title: 'Depart from Delhi',
          desc: '— board the Force Urbania, meet your tribe for the first time. Night drive through the mountains begins. Chai stops, music, and the Himalayas getting closer.',
        },
      ],
      mealTag: null,
    },
    {
      dayLabel: 'Day 1 · The Arrival',
      title: 'Bir ·',
      titleHighlight: 'The Arrival',
      location: '📍 Bir, Himachal Pradesh · 1,525m',
      activities: [
        {
          time: '11:00 AM',
          icon: '🏔️',
          title: 'Arrive in Bir',
          desc: '— check in to the property, freshen up, rest. First views of the Dhauladhar range right outside your window.',
        },
        {
          time: '2:00 PM',
          icon: '🪂',
          title: 'Bir local exploration',
          desc: '— the Tibetan colony, the monasteries, the cafes that shouldn’t exist in a Himachal village but do.',
        },
        {
          time: '6:00 PM',
          icon: '🌅',
          title: 'Landing site sunset',
          desc: '— Bir Billing is one of the world’s top paragliding spots. The landing site at golden hour is something else entirely.',
        },
        {
          time: '9:00 PM',
          icon: '🍽️',
          title: 'Dinner together',
          desc: '— the first real meal as a group. Mountain food, good conversation, the kind of night that sets the tone.',
        },
        {
          time: '10:00 PM+',
          icon: '🔥',
          title: 'Vibe at the property',
          desc: '— the conversations that happen after midnight in the mountains are the ones that matter.',
        },
      ],
      mealTag: '🍽 dinner included',
    },
    {
      dayLabel: 'Day 2 · The Secret',
      title: 'Rajgundha ·',
      titleHighlight: 'The Secret',
      location: '📍 Rajgundha Valley, Himachal Pradesh · 2,400m',
      activities: [
        {
          time: '07:00 AM',
          icon: '🪂',
          title: 'Paragliding',
          desc: '— prices not included, but we have managed to get a vendor at discounted price.',
        },
        {
          time: '10:00 AM',
          icon: '🌄',
          title: 'Checkout from Bir',
          desc: '— pack up, one last look at the valley.',
        },
        {
          time: '11:00 AM',
          icon: '💧',
          title: 'Hidden waterfall trek',
          desc: '— guided trek to a waterfall most visitors to Bir never find. Subject to weather and government approvals. Moderate effort, spectacular reward.',
        },
        {
          time: '2:00 PM',
          icon: '🛣️',
          title: 'Depart to Rajgundha via Billing',
          desc: '— the drive through Billing is one of Himachal’s great road trips.',
        },
        {
          time: '4:00 PM',
          icon: '🏞️',
          title: 'Rajgundha riverside chill',
          desc: '— arrive at one of Himachal’s most beautiful hidden valleys. The river, the meadows, complete silence.',
        },
        {
          time: '7:00 PM',
          icon: '🏕️',
          title: 'Camping at Rajgundha',
          desc: '— elevation 2,400m. Population: almost nobody. Set up under open sky.',
        },
        {
          time: '9:00 PM',
          icon: '🍽️',
          title: 'Dinner at camp',
          desc: '— hot food under the stars.',
        },
        {
          time: '10:00 PM',
          icon: '🔥',
          title: 'Bonfire',
          desc: '— stories, silences, the sound of the river. No screens, no signal, no rush.',
        },
        {
          time: '11:00 PM',
          icon: '⭐',
          title: 'Stargazing',
          desc: '— at 2,400m with zero light pollution, the Milky Way is not a concept. It is directly above you.',
        },
      ],
      mealTag: '🍽 breakfast & dinner included',
    },
    {
      dayLabel: 'Day 3 · The Farewell',
      title: 'Barot ·',
      titleHighlight: 'The Farewell',
      location: '📍 Barot, Uhl River Valley · 1,650m',
      activities: [
        {
          time: '10:00 AM',
          icon: '🌿',
          title: 'Checkout from camps',
          desc: '— one last morning at altitude.',
        },
        {
          time: '11:30 AM',
          icon: '💧',
          title: 'Koti Kohar Waterfall',
          desc: '— one of Himachal’s most underrated natural spots. Subject to weather and government approvals.',
        },
        {
          time: '2:30 PM',
          icon: '🏞️',
          title: 'Reach Barot',
          desc: '— the Uhl river valley, the meadows, the local market.',
        },
        {
          time: '6:00 PM',
          icon: '🚌',
          title: 'Departure from Barot',
          desc: '— the drive back. The kind of silence that happens when a group of people who met three days ago doesn’t want to say goodbye.',
        },
      ],
      mealTag: '🍽 breakfast included',
    },
    {
      dayLabel: 'Day 4 · Back to Delhi',
      title: 'Back to',
      titleHighlight: 'Delhi',
      location: '📍 Delhi · Home',
      activities: [
        {
          time: '6:00 AM',
          icon: '🌆',
          title: 'Arrive Delhi',
          desc: '— same city. Different people.',
        },
      ],
      mealTag: null,
    },
  ];

  const videos: Array<{ title: string; sub: string; id?: string; src?: string }> = [
    { title: 'Hidden Waterfall', sub: 'roaring alpine cascade', src: '/videos/vd4.mp4' },
    { title: 'Rajgundha Valley', sub: 'mist over high meadows', src: '/videos/vd3.mp4' },
    { title: 'Barot valley', sub: 'where the river runs quiet', id: 'qoZ1IgbGPjc' },
    { title: 'Pine Forest Trail', sub: 'offroad through deodars', src: '/videos/vd6.mp4' },
    { title: 'Koti Kohar waterfall', sub: 'the trail less taken', id: '8wt52tAADt8' },
    { title: 'Barot Riverside', sub: 'fresh glacial river streams', src: '/videos/vd5.mp4' },
    { title: 'Rajgundha · night sky', sub: 'milky way at 2400m', id: 'UvVR5J0XEE8' },
    { title: 'Dhauladhar Peaks', sub: 'snow-capped mountain range', src: '/videos/vd8.mp4' },
    { title: 'Rajgundha riverside', sub: 'the meadows, the mountains', id: '30qB1UQ-Hd0' },
    { title: 'Billing Sunset', sub: 'golden hour over Dhauladhar', src: '/videos/vd10.mp4' },
    { title: 'Hidden waterfall trek', sub: 'most visitors never find this', id: '-tfns7NJs-U' },
    { title: 'Alpine Valleys', sub: 'the road less travelled', src: '/videos/vd2.mp4' },
  ];

  return (
    <div className="flex flex-col w-full bg-obsidian text-ivory selection:bg-olive selection:text-obsidian">
      {/* ════════════════════════════════════════════
          1. HERO SECTION (#hero)
      ════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-32 overflow-hidden bg-gradient-to-b from-[#020b12] via-[#05111b] to-obsidian"
      >
        <StarfieldCanvas starCount={220} />

        {/* Ambient Milky Way glow */}
        <div className="absolute top-[8%] -left-[10%] w-[120%] h-[45%] bg-radial from-olive/10 via-olive/5 to-transparent -rotate-12 pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-6xl w-full mx-auto">
          {/* Back link */}
          <Link
            href="/#trips"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brandMuted hover:text-olive transition-colors mb-6"
          >
            <ArrowLeft size={13} />
            <span>Back to all expeditions</span>
          </Link>

          {/* Eyebrow badge */}
          <div className="flex items-center gap-2.5 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-olive-light mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
            <span>Being Traveller presents</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-ivory tracking-tight leading-[0.92] mb-4">
            Bir · Rajgundha <br />
            <span className="italic text-olive-light">· Barot</span>
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-xl md:text-3xl text-ivory-dark font-light mb-8 max-w-2xl">
            three valleys. two nights. one tribe.
          </p>

          {/* Meta specs */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 pb-8 border-b border-brandBorder-light font-mono text-xs text-brandMuted">
            <div>
              <span className="block text-[9px] uppercase tracking-[0.16em] text-brandMuted-dark mb-1">dates</span>
              <span className="font-serif text-xl text-ivory">17 Oct - 19 Oct, 2026</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-[0.16em] text-brandMuted-dark mb-1">duration</span>
              <span className="font-serif text-xl text-ivory">2N · 3D</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-[0.16em] text-brandMuted-dark mb-1">cohort</span>
              <span className="font-serif text-xl text-ivory">16 Seats</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-[0.16em] text-brandMuted-dark mb-1">starting from</span>
              <span className="font-serif text-2xl text-olive-light font-normal">₹9,999</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-6">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#apply"
                className="px-8 py-3.5 bg-olive text-obsidian font-mono text-xs font-medium tracking-[0.2em] uppercase rounded-sm hover:bg-[#3d6953] transition-all duration-300 shadow-xl shadow-olive/20"
              >
                Request an Invite
              </a>
              <a
                href="#itinerary"
                className="px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-ivory-muted hover:text-olive border-b border-brandMuted hover:border-olive transition-colors"
              >
                View Itinerary ↓
              </a>
            </div>

            <div className="text-right">
              <span className="font-serif italic text-4xl text-olive-light block leading-none">16</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brandMuted block mt-1">
                seats total · filling fast
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. ITINERARY SECTION (#itinerary)
      ════════════════════════════════════════════ */}
      <section id="itinerary" className="py-24 px-6 md:px-12 border-t border-brandBorder-light bg-obsidian">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow & Title */}
          <div className="mb-16">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-olive mb-3">
              <span className="w-5 h-[0.5px] bg-olive" />
              <span>the journey</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-ivory leading-tight">
              day by day, <br />
              <span className="italic text-olive-light">the being traveller way.</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-olive/30 ml-4 md:ml-6 pl-8 md:pl-12 space-y-16">
            {itineraryDays.map((d, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[39px] md:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-obsidian border-[1.5px] border-olive flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-olive" />
                </div>

                {/* Day Header */}
                <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-olive-light mb-1">
                  {d.dayLabel}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory mb-1">
                  {d.title} <span className="italic text-olive-light">{d.titleHighlight}</span>
                </h3>
                <div className="font-mono text-xs text-brandMuted mb-6 flex items-center gap-1.5">
                  <span>{d.location}</span>
                </div>

                {/* Activities */}
                <div className="space-y-4 border-t border-brandBorder-light pt-4">
                  {d.activities.map((act, actIdx) => (
                    <div
                      key={actIdx}
                      className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 pb-3 border-b border-brandBorder-light/50 last:border-b-0"
                    >
                      <div className="font-mono text-xs text-olive/80 min-w-[75px] pt-0.5 flex-shrink-0">
                        {act.time}
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-base flex-shrink-0">{act.icon}</span>
                        <div className="font-sans text-sm text-ivory-dark leading-relaxed">
                          <strong className="text-ivory font-normal">{act.title}</strong> {act.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Meal Tag */}
                {d.mealTag && (
                  <div className="mt-4 inline-block font-mono text-[9px] uppercase tracking-[0.14em] bg-olive-pale border border-olive/30 text-olive px-3 py-1 rounded">
                    {d.mealTag}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. TRANSPORT SECTION (#transport)
      ════════════════════════════════════════════ */}
      <section id="transport" className="py-24 px-6 md:px-12 border-t border-brandBorder-light bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-olive mb-3">
              <span className="w-5 h-[0.5px] bg-olive" />
              <span>how you'll travel</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory leading-tight">
              the vehicle is part <br />
              <span className="italic text-olive-light">of the experience.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Force Urbania SVG Showcase */}
            <div className="bg-obsidian border border-brandBorder-medium rounded-lg p-8 text-center relative overflow-hidden">
              <div className="relative w-full max-w-lg mx-auto">
                <svg
                  viewBox="0 0 810 295"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto animate-urb-float"
                >
                  <rect x="72" y="42" width="666" height="180" rx="6" fill="#1b1b18" stroke="#4e7f68" strokeWidth="0.5" />
                  <rect x="72" y="42" width="44" height="180" rx="6 0 0 6" fill="#0f0f0d" />
                  <rect x="96" y="42" width="20" height="180" fill="#0f0f0d" />
                  <rect x="694" y="42" width="44" height="180" rx="0 6 6 0" fill="#131312" />
                  <rect x="694" y="42" width="22" height="180" fill="#131312" />
                  <rect x="72" y="42" width="666" height="3" rx="1.5" fill="#4e7f68" opacity="0.55" />
                  <rect className="animate-shine-sweep" x="0" y="42" width="60" height="180" rx="3" fill="white" opacity="0.06" />

                  {/* Windows */}
                  <rect x="79" y="52" width="90" height="88" rx="2" fill="#0c1e2e" stroke="#4e7f68" strokeWidth="0.3" />
                  <rect x="178" y="52" width="110" height="88" rx="2" fill="#0c1e2e" stroke="#4e7f68" strokeWidth="0.3" />
                  <rect x="296" y="52" width="110" height="88" rx="2" fill="#0c1e2e" stroke="#4e7f68" strokeWidth="0.3" />
                  <rect x="414" y="52" width="110" height="88" rx="2" fill="#0c1e2e" stroke="#4e7f68" strokeWidth="0.3" />
                  <rect x="532" y="52" width="100" height="88" rx="2" fill="#0c1e2e" stroke="#4e7f68" strokeWidth="0.3" />
                  <rect x="644" y="57" width="44" height="76" rx="2" fill="#0c1e2e" stroke="#4e7f68" strokeWidth="0.3" opacity="0.7" />

                  {/* Exterior lines */}
                  <line x1="116" y1="150" x2="692" y2="150" stroke="#4e7f68" strokeWidth="0.4" opacity="0.38" />
                  <rect x="194" y="170" width="30" height="5" rx="2" fill="#4e7f68" opacity="0.38" />
                  <rect x="360" y="170" width="30" height="5" rx="2" fill="#4e7f68" opacity="0.38" />
                  <rect x="118" y="217" width="490" height="5" rx="2" fill="#4e7f68" opacity="0.1" stroke="#4e7f68" strokeWidth="0.25" />

                  {/* Headlights & Taillights */}
                  <rect x="75" y="90" width="10" height="26" rx="1" fill="#72a98b" className="animate-urb-glow" />
                  <line x1="75" y1="84" x2="116" y2="84" stroke="#4e7f68" strokeWidth="2" className="animate-urb-glow" opacity="0.75" />
                  <rect x="717" y="90" width="11" height="34" rx="1" fill="#c06060" opacity="0.8" />
                  <rect x="717" y="126" width="11" height="13" rx="1" fill="#4e7f68" opacity="0.5" />

                  {/* Wheel Arches */}
                  <circle cx="190" cy="222" r="47" fill="#0d0d0b" />
                  <circle cx="625" cy="222" r="47" fill="#0d0d0b" />
                  <line x1="72" y1="222" x2="143" y2="222" stroke="#4e7f68" strokeWidth="0.5" />
                  <path d="M 143 222 A 47 47 0 0 0 237 222" stroke="#4e7f68" strokeWidth="0.5" fill="none" />
                  <line x1="237" y1="222" x2="578" y2="222" stroke="#4e7f68" strokeWidth="0.5" />
                  <path d="M 578 222 A 47 47 0 0 0 672 222" stroke="#4e7f68" strokeWidth="0.5" fill="none" />
                  <line x1="672" y1="222" x2="738" y2="222" stroke="#4e7f68" strokeWidth="0.5" />

                  {/* Front Wheel */}
                  <g className="animate-wheel-spin">
                    <circle cx="190" cy="246" r="43" fill="#111110" />
                    <circle cx="190" cy="246" r="34" fill="#1c1c1a" stroke="#4e7f68" strokeWidth="0.5" />
                    <g stroke="#4e7f68" strokeWidth="1.5" opacity="0.5">
                      <line x1="190" y1="246" x2="190" y2="213" />
                      <line x1="190" y1="246" x2="221" y2="259" />
                      <line x1="190" y1="246" x2="209" y2="281" />
                      <line x1="190" y1="246" x2="171" y2="281" />
                      <line x1="190" y1="246" x2="159" y2="259" />
                    </g>
                    <circle cx="190" cy="246" r="10" fill="#1a1a18" stroke="#4e7f68" strokeWidth="0.8" />
                    <circle cx="190" cy="246" r="5" fill="#4e7f68" opacity="0.6" />
                  </g>

                  {/* Rear Wheel */}
                  <g className="animate-wheel-spin">
                    <circle cx="625" cy="246" r="43" fill="#111110" />
                    <circle cx="625" cy="246" r="34" fill="#1c1c1a" stroke="#4e7f68" strokeWidth="0.5" />
                    <g stroke="#4e7f68" strokeWidth="1.5" opacity="0.5">
                      <line x1="625" y1="246" x2="625" y2="213" />
                      <line x1="625" y1="246" x2="656" y2="259" />
                      <line x1="625" y1="246" x2="644" y2="281" />
                      <line x1="625" y1="246" x2="606" y2="281" />
                      <line x1="625" y1="246" x2="594" y2="259" />
                    </g>
                    <circle cx="625" cy="246" r="10" fill="#1a1a18" stroke="#4e7f68" strokeWidth="0.8" />
                    <circle cx="625" cy="246" r="5" fill="#4e7f68" opacity="0.6" />
                  </g>

                  {/* Ground Shadow */}
                  <ellipse cx="405" cy="291" rx="310" ry="3.5" fill="#4e7f68" opacity="0.08" />
                </svg>
              </div>

              <h4 className="font-serif italic text-2xl text-ivory mt-6 mb-1">Force Urbania</h4>
              <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-olive">
                exclusive hire · 16 seats · your home on the road
              </p>
            </div>

            {/* Right: Feature Cards */}
            <div className="space-y-3.5">
              {[
                {
                  icon: '🪑',
                  title: '16 Captain Seats',
                  desc: 'Individually reclining, more legroom than most domestic flights.',
                },
                {
                  icon: '❄️',
                  title: 'Full Air Conditioning',
                  desc: 'The mountain drive is scenic. The van is comfortable. Both can be true.',
                },
                {
                  icon: '🔒',
                  title: 'Exclusive Hire',
                  desc: "No sharing with strangers outside your batch. This vehicle is Being Traveller's, for the full duration.",
                },
                {
                  icon: '🎵',
                  title: 'Collaborative Sound System',
                  desc: 'The playlist is collaborative. The drive is part of the experience.',
                },
                {
                  icon: '🗺️',
                  title: 'Experienced Mountain Driver',
                  desc: "Knows the roads. Knows the stops. Knows when to pull over for a view you didn't expect.",
                },
              ].map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded bg-surface-2 border border-brandBorder-light hover:border-olive/40 transition-colors"
                >
                  <span className="text-xl flex-shrink-0">{feat.icon}</span>
                  <div>
                    <strong className="block text-sm font-medium text-ivory mb-0.5">{feat.title}</strong>
                    <span className="text-xs text-brandMuted leading-relaxed">{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. SEATS MAP SECTION (#seats)
      ════════════════════════════════════════════ */}
      <section id="seats" className="py-24 px-6 md:px-12 border-t border-brandBorder-light bg-obsidian">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-olive mb-3">
            <span className="w-5 h-[0.5px] bg-olive" />
            <span>the tribe</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory mb-3">
            16 seats. <br />
            <span className="italic text-olive-light">zero strangers</span> by the end.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brandMuted max-w-lg mx-auto mb-10 leading-relaxed">
            we don't fill seats — we build a group. every person in this vehicle was selected. here's how the Urbania looks.
          </p>

          {/* Van Outline Map */}
          <div className="max-w-md mx-auto bg-surface-1 border border-brandBorder-medium rounded-xl p-6 relative">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-olive mb-6">
              Force Urbania · Batch 01 · 16 Captain Seats
            </div>

            <div className="border border-brandBorder-light rounded-lg p-5 bg-surface-2/60">
              {/* Windshield */}
              <div className="w-full py-2 bg-gradient-to-b from-sky-500/10 to-transparent border-b border-brandBorder-light rounded-t text-center mb-6">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brandMuted">— front · driver's cabin —</span>
              </div>

              {/* Cabin Rows */}
              <div className="space-y-3">
                {/* Front row: leader + driver */}
                <div className="flex justify-between items-center px-4 mb-4">
                  <div className="w-12 h-12 rounded border border-olive/50 bg-olive-pale flex flex-col items-center justify-center animate-seat-pulse">
                    <span className="text-sm">⭐</span>
                    <span className="font-mono text-[7px] uppercase tracking-wider text-olive-light">leader</span>
                  </div>
                  <div className="w-12 h-12 rounded border border-olive/30 bg-surface-3 flex flex-col items-center justify-center opacity-70">
                    <span className="text-sm">🚗</span>
                    <span className="font-mono text-[7px] uppercase tracking-wider text-brandMuted">driver</span>
                  </div>
                </div>

                <div className="h-[0.5px] bg-brandBorder-light my-2" />

                {/* Passenger Row 1 */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-11 h-11 rounded border border-sky-500/30 bg-sky-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-sky-300">m</span>
                    </div>
                    <div className="w-11 h-11 rounded border border-sky-500/30 bg-sky-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-sky-300">m</span>
                    </div>
                  </div>
                  <div className="w-6" />
                  <div className="flex gap-2">
                    <div className="w-11 h-11 rounded border border-pink-500/30 bg-pink-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-pink-300">f</span>
                    </div>
                    <div className="w-11 h-11 rounded border border-pink-500/30 bg-pink-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-pink-300">f</span>
                    </div>
                  </div>
                </div>

                {/* Passenger Row 2 */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-11 h-11 rounded border border-sky-500/30 bg-sky-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-sky-300">m</span>
                    </div>
                    <div className="w-11 h-11 rounded border border-sky-500/30 bg-sky-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-sky-300">m</span>
                    </div>
                  </div>
                  <div className="w-6" />
                  <div className="flex gap-2">
                    <div className="w-11 h-11 rounded border border-pink-500/30 bg-pink-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-pink-300">f</span>
                    </div>
                    <div className="w-11 h-11 rounded border border-pink-500/30 bg-pink-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-pink-300">f</span>
                    </div>
                  </div>
                </div>

                {/* Passenger Row 3 */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-11 h-11 rounded border border-sky-500/30 bg-sky-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-sky-300">m</span>
                    </div>
                    <div className="w-11 h-11 rounded border border-sky-500/30 bg-sky-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-sky-300">m</span>
                    </div>
                  </div>
                  <div className="w-6" />
                  <div className="flex gap-2">
                    <div className="w-11 h-11 rounded border border-pink-500/30 bg-pink-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-pink-300">f</span>
                    </div>
                    <div className="w-11 h-11 rounded border border-pink-500/30 bg-pink-500/10 flex flex-col items-center justify-center">
                      <span className="text-xs">👤</span>
                      <span className="font-mono text-[7px] text-pink-300">f</span>
                    </div>
                  </div>
                </div>

                {/* Rear Row */}
                <div className="flex justify-center gap-3 pt-2">
                  <div className="w-11 h-11 rounded border border-sky-500/30 bg-sky-500/10 flex flex-col items-center justify-center">
                    <span className="text-xs">👤</span>
                    <span className="font-mono text-[7px] text-sky-300">m</span>
                  </div>
                  <div className="w-11 h-11 rounded border border-olive/45 bg-olive-pale flex flex-col items-center justify-center">
                    <span className="text-xs">🎥</span>
                    <span className="font-mono text-[7px] text-olive-light">creator</span>
                  </div>
                  <div className="w-11 h-11 rounded border border-pink-500/30 bg-pink-500/10 flex flex-col items-center justify-center">
                    <span className="text-xs">👤</span>
                    <span className="font-mono text-[7px] text-pink-300">f</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 font-mono text-[10px] text-brandMuted">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-sky-500/30 border border-sky-500/50" /> 7 male travelers</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-pink-500/30 border border-pink-500/50" /> 7 female travelers</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-olive/30 border border-olive/50" /> creator · leader</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-surface-3 border border-brandBorder-medium" /> driver</span>
            </div>

            {/* Counter */}
            <div className="mt-8 pt-6 border-t border-brandBorder-light">
              <span className="font-serif italic text-5xl text-olive-light block leading-none">16</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brandMuted block mt-1">total seats · filling now</span>
              <div className="w-48 h-1 bg-surface-3 rounded-full mx-auto mt-3 overflow-hidden">
                <div className="h-full bg-olive rounded-full" style={{ width: '56%' }} />
              </div>
              <span className="font-mono text-[10px] tracking-wider text-olive block mt-2">9 of 16 seats spoken for</span>
            </div>
          </div>
          <p className="font-mono text-[10px] text-brandMuted-dark mt-4 tracking-wider">
            intentionally balanced group · not just whoever paid first
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. INCLUSIONS SECTION (#inclusions)
      ════════════════════════════════════════════ */}
      <section id="inclusions" className="py-24 px-6 md:px-12 border-t border-brandBorder-light bg-surface-1">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-olive mb-3">
              <span className="w-5 h-[0.5px] bg-olive" />
              <span>what's covered</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory leading-tight">
              no hidden costs. <br />
              <span className="italic text-olive-light">no surprises.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Inclusions */}
            <div className="bg-obsidian border border-brandBorder-medium rounded-lg p-6 sm:p-8">
              <h3 className="font-serif text-2xl text-ivory mb-6 flex items-center justify-between">
                <span>inclusions</span>
                <span className="italic text-olive font-mono text-lg">✓</span>
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: '2 nights accommodation',
                    desc: '— Bir (night 1) + Rajgundha camping (night 2). Both hand-picked by Being Traveller.',
                  },
                  {
                    title: '4 included meals',
                    desc: '— dinner night 1 (Bir), breakfast + dinner day 2, breakfast day 3 (Barot).',
                  },
                  {
                    title: 'Delhi ↔ Bir ↔ Rajgundha ↔ Barot ↔ Delhi',
                    desc: '— full trip travel in Force Urbania, exclusively ours.',
                  },
                  {
                    title: 'Trek guide fee',
                    desc: '— professional guide for the hidden waterfall trek and Koti Kohar.',
                  },
                  {
                    title: 'Trip leader',
                    desc: "— Being Traveller's own person on the ground. Not a tour manager. Someone who travels like you do.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brandMuted leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-olive-pale border border-olive/30 text-olive flex items-center justify-center flex-shrink-0 text-[10px]">
                      ✓
                    </span>
                    <div>
                      <strong className="text-ivory font-medium">{item.title}</strong> {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions */}
            <div className="bg-obsidian border border-brandBorder-medium rounded-lg p-6 sm:p-8">
              <h3 className="font-serif text-2xl text-ivory mb-6 flex items-center justify-between">
                <span>exclusions</span>
                <span className="italic text-[#c06a6a] font-mono text-lg">—</span>
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Trek permit fees',
                    desc: '— if required. Typically ₹50–200, paid on site.',
                  },
                  {
                    title: 'Personal meals outside itinerary',
                    desc: '— that momos stall in Bir, the local chai, lunch on the road.',
                  },
                  {
                    title: 'Optional activities',
                    desc: '— paragliding in Bir, river activities in Barot. Available at personal cost.',
                  },
                  {
                    title: 'Personal expenses',
                    desc: '— shopping, souvenirs, phone data.',
                  },
                  {
                    title: 'Any rental vehicle',
                    desc: '— scooty, bike, or car.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brandMuted leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-red-950/30 border border-red-500/30 text-red-400 flex items-center justify-center flex-shrink-0 text-[10px]">
                      ✕
                    </span>
                    <div>
                      <strong className="text-ivory font-medium">{item.title}</strong> {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. DESTINATION VIDEOS (#videos)
      ════════════════════════════════════════════ */}
      <section id="videos" className="py-24 px-6 md:px-12 border-t border-brandBorder-light bg-obsidian">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-olive mb-3">
              <span className="w-5 h-[0.5px] bg-olive" />
              <span>the destinations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory leading-tight">
              see where <br />
              <span className="italic text-olive-light">you're going.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {videos.map((vid, i) => (
              <div
                key={i}
                className="group relative aspect-[9/16] rounded-md overflow-hidden bg-surface-2 border border-brandBorder-light hover:border-olive/50 transition-all duration-300"
              >
                {vid.src ? (
                  <video
                    src={vid.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${vid.id}&playsinline=1&rel=0&modestbranding=1`}
                    title={vid.title}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] pointer-events-none border-0"
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3.5 z-10 pointer-events-none">
                  <h4 className="font-serif italic text-sm sm:text-base text-ivory group-hover:text-olive-light transition-colors">
                    {vid.title}
                  </h4>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-olive/80 block mt-0.5">
                    {vid.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          7. PRICING & BOOKING (#book)
      ════════════════════════════════════════════ */}
      <section id="book" className="py-24 px-6 md:px-12 border-t border-brandBorder-light bg-surface-1 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-olive/10 via-transparent to-transparent pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-olive mb-3">
            <span className="w-5 h-[0.5px] bg-olive" />
            <span>trip packages & pricing</span>
            <span className="w-5 h-[0.5px] bg-olive" />
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-ivory mb-4 leading-tight">
            Next Cohort. <br />
            <span className="italic text-olive-light">Bir.</span> <br />
            Are you in?
          </h2>
          <p className="font-sans text-sm text-brandMuted max-w-md mx-auto mb-12 leading-relaxed">
            Transparent, all-inclusive pricing. Force Urbania captain transit, riverside camps, guided treks, and curated meals.
          </p>

          {/* 3 Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            {/* Solo Package */}
            <div className="relative border border-brandBorder-light hover:border-olive/60 rounded-lg p-6 md:p-7 bg-surface-2 flex flex-col justify-between transition-all duration-300 group">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brandMuted">
                    Solo Adventurer
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-olive bg-olive/10 border border-olive/30 px-2 py-0.5 rounded">
                    Twin Sharing
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-ivory mb-1">Solo Package</h3>
                <div className="flex items-baseline gap-1.5 my-4">
                  <span className="font-serif italic text-4xl sm:text-5xl text-olive-light leading-none">₹9,999/-</span>
                </div>
                <p className="font-sans text-xs text-brandMuted leading-relaxed mb-6">
                  For individual travelers joining the tribe. Twin-sharing luxury camp setup with fellow verified solo traveler.
                </p>
                <ul className="space-y-2.5 font-mono text-xs text-ivory-dark border-t border-brandBorder-light/50 pt-5 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> 1 Force Urbania Captain Seat
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> 2N Riverside & Valley Camp Stay
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> 4 Curated Meals (Breakfast & Dinner)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> Koti Kohar Trek & Stargazing
                  </li>
                </ul>
              </div>
              <a
                href="#apply"
                className="w-full py-3 text-center bg-surface-3 hover:bg-olive hover:text-obsidian text-ivory font-mono text-xs font-medium tracking-[0.15em] uppercase rounded-sm border border-brandBorder-light hover:border-olive transition-all duration-200"
              >
                Claim Solo Spot →
              </a>
            </div>

            {/* Couple Package */}
            <div className="relative border-2 border-olive rounded-lg p-6 md:p-7 bg-olive-pale flex flex-col justify-between shadow-2xl shadow-olive/10 transition-all duration-300">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-olive text-obsidian font-mono text-[9px] font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded">
                Popular · Private Setup
              </span>
              <div>
                <div className="flex justify-between items-center mb-3 mt-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-olive font-semibold">
                    Curated For Two
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-olive bg-olive/20 border border-olive/40 px-2 py-0.5 rounded font-medium">
                    Private Tent
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-ivory mb-1">Couple Package</h3>
                <div className="flex items-baseline gap-1.5 my-4">
                  <span className="font-serif italic text-4xl sm:text-5xl text-olive-light leading-none">₹19,999/-</span>
                </div>
                <p className="font-sans text-xs text-brandMuted leading-relaxed mb-6">
                  Complete private accommodation for couples with side-by-side transit seats and exclusive campfire moments.
                </p>
                <ul className="space-y-2.5 font-mono text-xs text-ivory-dark border-t border-olive/20 pt-5 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> 2 Urbania Captain Seats Together
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> 2N Dedicated Private Tent / Room
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> All 4 Meals for Both Travelers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> Billing Sunset & Milky Way Night
                  </li>
                </ul>
              </div>
              <a
                href="#apply"
                className="w-full py-3 text-center bg-olive hover:bg-[#3d6953] text-obsidian font-mono text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-200 shadow-lg shadow-olive/25"
              >
                Claim Couple Spot →
              </a>
            </div>

            {/* Group Package */}
            <div className="relative border border-brandBorder-light hover:border-olive/60 rounded-lg p-6 md:p-7 bg-surface-2 flex flex-col justify-between transition-all duration-300 group">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brandMuted">
                    All-Female Tribe
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-olive bg-olive/10 border border-olive/30 px-2 py-0.5 rounded font-medium">
                    Females Only · Max 3
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-ivory mb-1">Group Package</h3>
                <div className="flex items-baseline gap-1.5 my-4">
                  <span className="font-serif italic text-4xl sm:text-5xl text-olive-light leading-none">₹9,999</span>
                  <span className="font-mono text-xs text-brandMuted">per head (upto 3)</span>
                </div>
                <p className="font-sans text-xs text-brandMuted leading-relaxed mb-6">
                  Exclusively for female travelers (up to 3 per group). Safe, verified cohort, co-located luxury tents, and contiguous captain seating.
                </p>
                <ul className="space-y-2.5 font-mono text-xs text-ivory-dark border-t border-brandBorder-light/50 pt-5 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> Exclusively for Females (Up to 3 per group)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> Contiguous Urbania Captain Seating
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> Adjacent Luxury Camps / Rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-olive">✓</span> All 4 Meals & Guided Treks Included
                  </li>
                </ul>
              </div>
              <a
                href="#apply"
                className="w-full py-3 text-center bg-surface-3 hover:bg-olive hover:text-obsidian text-ivory font-mono text-xs font-medium tracking-[0.15em] uppercase rounded-sm border border-brandBorder-light hover:border-olive transition-all duration-200"
              >
                Claim Female Group Spot →
              </a>
            </div>
          </div>

          <p className="font-mono text-[10px] tracking-wider text-brandMuted leading-relaxed">
            we review every request · 16 total seats per cohort · no hidden costs <br />
            confirmed applicants receive private payment link for the advance deposit
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          8. APPLICATION FORM (#apply)
      ════════════════════════════════════════════ */}
      <section id="apply" className="py-24 px-6 md:px-12 border-t border-brandBorder-light bg-obsidian">
        <div className="max-w-2xl mx-auto">
          <ApplicationForm tripName="Bir · Rajgundha · Barot" />
        </div>
      </section>
    </div>
  );
}
