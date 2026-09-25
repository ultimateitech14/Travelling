import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Refund & Cancellation Policy — Being Traveller',
  description: 'Advance payment rules, timelines, and refund terms for Being Traveller trips.',
};

export default function RefundCancellationPage() {
  const metaStats = [
    { label: 'Advance Amount', val: '₹2,500' },
    { label: 'Payment Gateway', val: 'Razorpay' },
    { label: 'Effective Date', val: 'May 2026' },
    { label: 'Support Email', val: 'Beingtraveller1922@gmail.com' },
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
        <h1 className="font-serif text-4xl sm:text-6xl text-ivory mt-2">Refund & Cancellation</h1>
        <p className="font-sans text-sm text-brandMuted mt-3">
          How our ₹2,500 advance works, cancellation windows, and payment terms. Read before confirming your seat.
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

      {/* Content */}
      <div className="space-y-12 text-ivory-dark font-sans text-sm leading-relaxed">
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">1. The ₹2,500 Booking Advance</h2>
          <p>
            Because cohorts are capped at 14–16 travelers, holding a seat requires a non-refundable commitment fee of
            ₹2,500. This amount is directly deducted from your total expedition fee when paying the remaining balance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">2. Cancellation Policy & Timelines</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-brandBorder-light rounded text-xs font-mono">
              <thead className="bg-surface-2 text-gold">
                <tr>
                  <th className="p-3 text-left border-b border-brandBorder-light">Cancellation Notice</th>
                  <th className="p-3 text-left border-b border-brandBorder-light">Refund Eligibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brandBorder-light">
                <tr>
                  <td className="p-3 text-ivory">More than 21 days before departure</td>
                  <td className="p-3 text-emerald-400">100% refund of balance amount (or 100% trip credit)</td>
                </tr>
                <tr>
                  <td className="p-3 text-ivory">10 to 20 days before departure</td>
                  <td className="p-3 text-amber-400">50% refund of balance amount (or transfer to future cohort)</td>
                </tr>
                <tr>
                  <td className="p-3 text-ivory">Less than 10 days before departure</td>
                  <td className="p-3 text-rose-400">Non-refundable due to pre-booked vehicle and lodge commits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ivory">3. Process & Timelines</h2>
          <p>
            Approved refunds are initiated within 48 hours of cancellation request and processed through Razorpay back
            to the original payment method within 5–7 business days.
          </p>
        </section>
      </div>
    </div>
  );
}
