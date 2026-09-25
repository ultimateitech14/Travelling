import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy — Being Traveller',
  description: 'How we collect, use, and protect your personal information across Being Traveller expeditions.',
};

export default function PrivacyPolicyPage() {
  const metaStats = [
    { label: 'Effective Date', val: 'May 2026' },
    { label: 'Applies To', val: 'All Being Traveller Users' },
    { label: 'Jurisdiction', val: 'New Delhi, India' },
    { label: 'Contact', val: 'Beingtraveller1922@gmail.com' },
  ];

  return (
    <div className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full text-left">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brandMuted hover:text-gold transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        <span>Back to Home</span>
      </Link>

      <div className="border-b border-brandBorder-light pb-8 mb-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Legal · Policies</span>
        <h1 className="font-serif text-4xl sm:text-6xl text-ivory mt-2">Privacy Policy</h1>
        <p className="font-sans text-sm text-brandMuted mt-3">
          How we collect, use, and safeguard your personal information when you apply for or participate in Being Traveller
          cohorts.
        </p>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-lg bg-surface-1 border border-brandBorder-light mb-12">
        {metaStats.map((s) => (
          <div key={s.label}>
            <div className="font-mono text-[10px] uppercase text-brandMuted tracking-wider">{s.label}</div>
            <div className="font-mono text-xs text-ivory mt-1 font-medium">{s.val}</div>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-12 text-ivory-dark font-sans text-sm leading-relaxed">
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">1. Information We Collect</h2>
          <p>
            When you request an invite or join an expedition, we collect personal details including your name, age,
            gender, email address, WhatsApp number, Instagram handle, and profession. We collect this data specifically
            to vet cohorts, ensure balanced demographic representation, and communicate logistical updates.
          </p>
          <p>
            For high-altitude expeditions (e.g. Zanskar 5,091m), we may collect emergency contacts, blood group, and
            medical fitness disclosures to ensure trail safety.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">2. How We Use Your Data</h2>
          <p>
            Your information is used strictly for cohort curation, safety verification, trip operations, emergency
            preparedness, and transactional updates. We never sell, rent, or lease your personal information to third-party
            marketers or data brokers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">3. Data Sharing & Third Parties</h2>
          <p>
            We only share essential operational details with trusted partners directly involved in your trip:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-brandMuted">
            <li>Authorized transport drivers and fleet managers (Force Urbania manifest)</li>
            <li>Local mountain homestays and forest checkpost authorities for official permits</li>
            <li>Secure payment gateway providers (Razorpay) for processing booking deposits</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">4. Photography & Media</h2>
          <p>
            Being Traveller captures candid documentary photography and drone footage during expeditions to record cohort
            memories and archive our journeys. If you prefer not to appear in public media channels, notify our team
            in writing prior to departure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">5. Retention & Security</h2>
          <p>
            We enforce industry-standard TLS encryption, strict access control, and secure data storage practices. You
            may request the deletion of your personal records from our active waitlist database at any time by contacting{' '}
            <a href="mailto:Beingtraveller1922@gmail.com" className="text-gold hover:underline">
              Beingtraveller1922@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
