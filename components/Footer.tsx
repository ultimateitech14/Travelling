'use client';

import Link from 'next/link';
import { Instagram, Youtube, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obsidian-dark border-t border-brandBorder-light pt-16 pb-12 text-left relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-brandBorder-light">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <Link
              href="/"
              className="inline-block group py-1"
            >
              <img
                src="/logo.png"
                alt="Being Traveller"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="font-serif italic text-sm text-brandMuted leading-relaxed max-w-xs">
              Curating rare cohorts for unmapped Himalayan and desert trails. Travel that never makes the brochure.
            </p>
            <div className="font-mono text-[10px] uppercase tracking-wider text-brandMuted-dark">
              New Delhi · Manali · Mumbai · Jaipur
            </div>

            {/* Social Media Icons */}
            <div className="pt-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brandMuted mb-3">
                Social Profiles
              </div>
              <div className="flex items-center gap-2.5">
                {/* Instagram (Active) */}
                <a
                  href="https://www.instagram.com/beingtraveller._?stkn=MXRyOGJuaG1veHJkbw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-surface-1 hover:bg-gold/15 border border-brandBorder-medium hover:border-gold text-gold flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  aria-label="Being Traveller Instagram"
                  title="Follow us on Instagram (@beingtraveller._)"
                >
                  <Instagram size={16} />
                </a>

                {/* YouTube (Blank / Placeholder) */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-surface-1 border border-brandBorder-light text-brandMuted/40 hover:text-brandMuted flex items-center justify-center transition-all cursor-default"
                  aria-label="YouTube (Coming Soon)"
                  title="YouTube (Coming Soon)"
                >
                  <Youtube size={16} />
                </a>

                {/* Twitter / X (Blank / Placeholder) */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-surface-1 border border-brandBorder-light text-brandMuted/40 hover:text-brandMuted flex items-center justify-center transition-all cursor-default"
                  aria-label="Twitter (Coming Soon)"
                  title="Twitter (Coming Soon)"
                >
                  <Twitter size={16} />
                </a>

                {/* Facebook (Blank / Placeholder) */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-surface-1 border border-brandBorder-light text-brandMuted/40 hover:text-brandMuted flex items-center justify-center transition-all cursor-default"
                  aria-label="Facebook (Coming Soon)"
                  title="Facebook (Coming Soon)"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Expeditions Col */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Expeditions</h4>
            <ul className="space-y-2 font-sans text-xs text-brandMuted">
              <li>
                <Link href="/bir-rajgundha-barot" className="hover:text-ivory transition-colors">
                  Bir · Rajgundha · Barot
                </Link>
              </li>
              <li>
                <Link href="/#trips" className="hover:text-ivory transition-colors flex items-center justify-between sm:justify-start gap-2">
                  <span>Udaipur × Jawai Safari</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gold/80 px-1.5 py-0.5 rounded bg-gold-pale border border-brandBorder-gold/60">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/#trips" className="hover:text-ivory transition-colors flex items-center justify-between sm:justify-start gap-2">
                  <span>Zanskar & Shinkun La</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gold/80 px-1.5 py-0.5 rounded bg-gold-pale border border-brandBorder-gold/60">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/#trips" className="hover:text-gold transition-colors text-gold/80">
                  View All Batches →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Philosophy</h4>
            <ul className="space-y-2 font-sans text-xs text-brandMuted">
              <li>
                <Link href="/#about" className="hover:text-ivory transition-colors">
                  The Being Traveller Ethos
                </Link>
              </li>
              <li>
                <Link href="/hiring" className="hover:text-ivory transition-colors flex items-center gap-1.5">
                  <span>Founding Team</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 bg-gold/10 text-gold border border-gold/20 rounded">
                    HIRING
                  </span>
                </Link>
              </li>
              <li>
                <a href="mailto:Beingtraveller1922@gmail.com" className="hover:text-ivory transition-colors flex items-center gap-1.5">
                  <Mail size={12} className="text-gold" />
                  <span>Beingtraveller1922@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Governance</h4>
            <ul className="space-y-2 font-sans text-xs text-brandMuted">
              <li>
                <Link href="/privacy-policy" className="hover:text-ivory transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-ivory transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-cancellation" className="hover:text-ivory transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-brandMuted-dark tracking-wider uppercase">
          <div>© {new Date().getFullYear()} BEING TRAVELLER. ALL RIGHTS RESERVED.</div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.instagram.com/beingtraveller._?stkn=MXRyOGJuaG1veHJkbw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <Instagram size={13} className="text-gold" />
              <span>@beingtraveller._</span>
            </a>
            <span>·</span>
            <a
              href="mailto:Beingtraveller1922@gmail.com"
              className="hover:text-gold transition-colors flex items-center gap-1.5 lowercase"
            >
              <Mail size={13} className="text-gold" />
              <span>Beingtraveller1922@gmail.com</span>
            </a>
            <span>·</span>
            <a
              href="https://wa.me/917536891201"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              WhatsApp Concierge (+91 7536891201)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
