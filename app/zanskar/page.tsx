import Link from 'next/link';
import StarfieldCanvas from '@/components/StarfieldCanvas';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Zanskar — The Road Less Taken — Coming Soon | Being Traveller',
  description: 'This expedition is coming soon. The itinerary and departure dates will be announced shortly.',
};

export default function ZanskarTripPage() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 md:px-12 py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0e14] via-[#070b0e] to-obsidian">
      <StarfieldCanvas starCount={200} />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <Link
          href="/#trips"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brandMuted hover:text-gold transition-colors mb-4"
        >
          <ArrowLeft size={14} />
          <span>Back to all expeditions</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brandBorder-gold bg-gold-pale text-gold font-mono text-[10px] tracking-[0.25em] uppercase">
          <Clock size={12} />
          <span>Itinerary Coming Soon</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-ivory tracking-tight">
          Zanskar — The Road Less Taken
        </h1>

        <p className="font-sans text-sm sm:text-base text-ivory-dark max-w-lg mx-auto font-light leading-relaxed">
          The full day-by-day route, high-altitude pass logistics, and cohort dates for this expedition are being finalized.
          Applications will open shortly.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/bir-rajgundha-barot"
            className="w-full sm:w-auto px-6 py-3.5 rounded bg-gold hover:bg-gold-light text-obsidian-dark font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
          >
            <span>Explore Bir · Rajgundha Itinerary</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/#trips"
            className="w-full sm:w-auto px-6 py-3.5 rounded bg-surface-2 hover:bg-surface-3 border border-brandBorder-light text-ivory font-mono text-xs uppercase tracking-wider transition-all"
          >
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
