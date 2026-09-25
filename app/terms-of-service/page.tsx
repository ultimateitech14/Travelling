import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service — Being Traveller',
  description: 'Terms and conditions governing your participation in Being Traveller expeditions.',
};

export default function TermsOfServicePage() {
  const metaStats = [
    { label: 'Effective Date', val: 'May 2026' },
    { label: 'Applies To', val: 'All Being Traveller Trips' },
    { label: 'Jurisdiction', val: 'India' },
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
        <h1 className="font-serif text-4xl sm:text-6xl text-ivory mt-2">Terms of Service</h1>
        <p className="font-sans text-sm text-brandMuted mt-3">
          Governs your application, seat reservation, code of conduct, and participation across every Being Traveller
          journey.
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

      {/* Sections */}
      <div className="space-y-12 text-ivory-dark font-sans text-sm leading-relaxed">
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">1. Definitions & Scope</h2>
          <p>
            By submitting an application, paying a booking deposit, or participating in a Being Traveller trip, you enter into
            a binding legal agreement with Being Traveller (&quot;we&quot;, &quot;us&quot;).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">2. Booking & Payment</h2>
          <p>
            An application does not guarantee a seat. Seats are allocated only upon written invite confirmation and receipt
            of the designated advance deposit (typically ₹2,500) processed through our authorized payment partner
            Razorpay. The balance trip fee is due 7 days prior to departure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">3. Traveler Responsibilities & Code of Conduct</h2>
          <p>
            Being Traveller curates intimate, respectful travel cohorts. Harassment, discrimination, substance abuse, disruptive
            behavior, or violation of local mountain cultural norms is strictly prohibited and grounds for immediate
            expulsion without refund.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">4. Dynamic Mountain Itineraries & Weather</h2>
          <p>
            Mountain and remote expedition routes are subject to weather, landslides, border security directives, and
            pass closures. While we will execute every effort to adhere to the planned itinerary, the lead expedition
            captain holds ultimate authority to alter routes or timing in the interest of cohort safety.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">5. Liability & Risk Disclosure</h2>
          <p>
            Participants acknowledge that adventure travel in high-altitude terrain involves inherent natural risks.
            Travelers agree to assume personal responsibility for health readiness and follow all guide instructions.
          </p>
        </section>
      </div>
    </div>
  );
}
