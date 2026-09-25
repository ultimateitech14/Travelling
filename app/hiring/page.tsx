'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, Sparkles, Send, Radio, Compass, Users, MapPin } from 'lucide-react';

export default function HiringPage() {
  const [role, setRole] = useState('Lead Expedition Architect');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [pitch, setPitch] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const roles = [
    {
      title: 'Lead Expedition Architect',
      type: 'Full-time · Remote / On-Trail',
      compensation: '₹80,000 – ₹1,40,000 / mo + Equity',
      desc: 'Design unmapped itineraries across Himachal, Ladakh, and Rajasthan. Scout uncharted camp spots, build relationships with local villages, and lead trial expeditions.',
    },
    {
      title: 'Community & Cohort Lead',
      type: 'Full-time · New Delhi / Remote',
      compensation: '₹60,000 – ₹1,10,000 / mo + Equity',
      desc: 'Screen every single traveler application. Curate the vibe, background diversity, and gender balance of our 16-person cohorts. Manage all pre-trip communications and post-trip community.',
    },
    {
      title: 'High-Altitude Operations Director',
      type: 'Seasonal / Full-time · Manali',
      compensation: '₹90,000 – ₹1,50,000 / mo + Performance',
      desc: 'Direct fleet logistics (Force Urbania), mountain safety protocols, emergency satellite communications, and high-altitude medical readiness across remote passes.',
    },
  ];

  const whoThisIsFor = [
    'You have hiked remote trails on your own and know how to read topo maps',
    'You care obsessively about design, typography, and small experiential details',
    'You are allergic to corporate bureaucracy and execute with high urgency',
    'You love hosting people and naturally make strangers feel like old friends',
  ];

  const whoThisIsNotFor = [
    'You want a predictable 9-to-5 desk routine',
    'You get stressed when mountain weather shifts and plans change dynamically',
    'You rely on rigid scripts rather than intuition and empathy',
    'You view travel simply as tourism rather than cultural stewardship',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero with Animated Sunset Vector Landscape */}
      <section className="relative min-h-[75vh] flex flex-col justify-center items-center text-center px-6 md:px-12 pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#0b140d] via-[#080d09] to-obsidian">
        {/* Animated Sunset Vector Landscape */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg viewBox="0 0 1440 600" className="w-full h-full object-cover" preserveAspectRatio="none">
            {/* Glowing Sun */}
            <circle cx="720" cy="380" r="140" fill="url(#sunGlow)" />
            {/* Mountain Layers */}
            <path d="M0,450 L300,280 L600,420 L900,260 L1200,410 L1440,320 L1440,600 L0,600 Z" fill="#141f17" />
            <path d="M0,490 L240,380 L520,480 L800,360 L1100,470 L1440,410 L1440,600 L0,600 Z" fill="#0e1610" />
            <path d="M0,530 L360,460 L720,530 L1080,470 L1440,540 L1440,600 L0,600 Z" fill="#080807" />
            <defs>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#72a98b" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#4e7f68" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#080807" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brandMuted hover:text-gold transition-colors mb-4"
          >
            <ArrowLeft size={14} />
            <span>Back to home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[10px] tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Founding Team Cohort · 3 Open Roles</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-ivory tracking-tight leading-tight">
            Build the future of <br />
            <span className="italic text-gold-light">intentional travel.</span>
          </h1>

          <p className="font-sans text-base md:text-lg text-ivory-dark max-w-xl mx-auto font-light leading-relaxed">
            We are assembling a tight, high-agency crew of expedition architects and operators to reinvent group travel
            in India.
          </p>
        </div>
      </section>

      {/* 2. Culture & Filter Section */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Who This Is For */}
          <div className="p-8 rounded-lg bg-surface-1 border border-brandBorder-light space-y-6">
            <h3 className="font-serif text-2xl text-ivory flex items-center gap-2">
              <span className="text-emerald-400">✦</span>
              <span>Who Will Thrive Here</span>
            </h3>
            <ul className="space-y-4 font-sans text-xs text-ivory-dark">
              {whoThisIsFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who This Is NOT For */}
          <div className="p-8 rounded-lg bg-surface-1 border border-brandBorder-light space-y-6">
            <h3 className="font-serif text-2xl text-ivory flex items-center gap-2">
              <span className="text-rose-400">✕</span>
              <span>Who Should Not Apply</span>
            </h3>
            <ul className="space-y-4 font-sans text-xs text-brandMuted">
              {whoThisIsNotFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <X size={14} className="text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Open Roles */}
      <section className="py-24 px-6 md:px-12 bg-surface-1/30 border-y border-brandBorder-light">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Current Openings</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory mt-2">Founding Roles</h2>
          </div>

          <div className="space-y-6">
            {roles.map((r) => (
              <div
                key={r.title}
                className="p-8 rounded-lg bg-surface-1 border border-brandBorder-light hover:border-brandBorder-gold transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-serif text-2xl text-ivory">{r.title}</h3>
                  <span className="font-mono text-xs text-gold">{r.compensation}</span>
                </div>
                <div className="font-mono text-xs text-brandMuted">{r.type}</div>
                <p className="font-sans text-sm text-ivory-dark leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Hiring Application Form */}
      <section className="py-24 px-6 md:px-12 max-w-2xl mx-auto w-full text-left">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Direct Application</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory mt-2">Join The Founding Team</h2>
          <p className="font-sans text-xs text-brandMuted mt-2">
            Tell us who you are and why you want to build Being Traveller.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-lg bg-surface-1 border border-brandBorder-gold text-center space-y-4">
            <Sparkles className="w-12 h-12 text-gold mx-auto" />
            <h3 className="font-serif text-3xl text-ivory">Application Received</h3>
            <p className="font-sans text-sm text-brandMuted max-w-sm mx-auto">
              Our founders review every submission personally. If your profile stands out, we will invite you to a
              direct video conversation.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-lg bg-surface-1 border border-brandBorder-medium space-y-6"
          >
            <div>
              <label className="block font-mono text-[10px] uppercase text-brandMuted mb-1">Target Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 rounded bg-surface-2 border border-brandBorder-light focus:border-gold text-ivory text-sm outline-none"
              >
                {roles.map((r) => (
                  <option key={r.title} value={r.title}>
                    {r.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] uppercase text-brandMuted mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Shantanu Roy"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-surface-2 border border-brandBorder-light focus:border-gold text-ivory text-sm outline-none"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase text-brandMuted mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="shantanu@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-surface-2 border border-brandBorder-light focus:border-gold text-ivory text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase text-brandMuted mb-1">
                Portfolio / LinkedIn / Instagram / Substack
              </label>
              <input
                type="text"
                placeholder="https://..."
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                className="w-full px-4 py-3 rounded bg-surface-2 border border-brandBorder-light focus:border-gold text-ivory text-sm outline-none"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase text-brandMuted mb-1">
                What have you built, organized, or explored that makes you right for Being Traveller? *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Keep it authentic. Tell us about a trail you scouted, a community you gathered, or a design standard you refuse to compromise on..."
                value={pitch}
                onChange={(e) => setPitch(e.target.value)}
                className="w-full px-4 py-3 rounded bg-surface-2 border border-brandBorder-light focus:border-gold text-ivory text-sm outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gold text-obsidian font-mono text-xs font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#b8924f] transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Candidate Profile</span>
              <Send size={14} />
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
