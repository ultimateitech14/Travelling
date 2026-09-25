'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, ArrowRight, ChevronDown } from 'lucide-react';

interface ApplicationFormProps {
  tripName?: string;
  batches?: string[];
}

export default function ApplicationForm({
  tripName = 'General Being Traveller Expeditions',
}: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    travelStyle: '',
    instagram: '',
    whatsapp: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim()) return setError('Please enter your full name.');
    if (!formData.age.trim() || isNaN(Number(formData.age))) return setError('Please enter a valid age.');
    if (!formData.gender) return setError('Please select your gender for cohort balance.');
    if (!formData.travelStyle) return setError('Please select how you are travelling (solo, couple, or group).');
    if (!formData.instagram.trim()) return setError('Instagram handle is required for social verification.');
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 10)
      return setError('Please enter a valid 10-digit WhatsApp number.');
    if (!formData.email.trim() || !formData.email.includes('@'))
      return setError('Please enter a valid email address.');

    setLoading(true);

    const payload = {
      ...formData,
      trip: tripName,
      submittedAt: new Date().toISOString(),
    };

    // Store in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('unlistd_applications') || '[]');
      existing.push(payload);
      localStorage.setItem('unlistd_applications', JSON.stringify(existing));
    } catch (err) {
      console.warn('localStorage failed', err);
    }

    // Prepare WhatsApp Message with all filled details (No Reference ID)
    const packagePricingMap: Record<string, string> = {
      solo: 'Solo (₹9,999/-)',
      couple: 'Couple (₹19,999/-)',
      group: 'Group — All-Female, Upto 3 (₹9,999 per head)',
    };
    const travelStyleLabel =
      packagePricingMap[formData.travelStyle] ||
      (formData.travelStyle.charAt(0).toUpperCase() + formData.travelStyle.slice(1));

    // Normalize Instagram handle to guaranteed clickable URL
    const cleanInsta = formData.instagram.trim().replace(/^https?:\/\/(www\.)?instagram\.com\//i, '').replace(/^@/, '');
    const directInstagramUrl = cleanInsta ? `https://www.instagram.com/${cleanInsta}` : '';

    const textLines = [
      `*New Spot Application — Being Traveller* 🏔️`,
      ``,
      `*Expedition:* ${tripName}`,
      ``,
      `*Applicant Profile:*`,
      `• *Name:* ${formData.name.trim()}`,
      `• *Age:* ${formData.age.trim()}`,
      `• *Gender:* ${formData.gender}`,
      `• *How are you travelling:* ${travelStyleLabel}`,
      ``,
      `*Contact & Social Verification:*`,
      `• *Instagram:* ${directInstagramUrl}`,
      `• *WhatsApp:* ${formData.whatsapp.trim()}`,
      `• *Email:* ${formData.email.trim()}`,
    ];

    const waLink = `https://wa.me/917536891201?text=${encodeURIComponent(textLines.join('\n'))}`;

    // Send payload to backend asynchronously
    try {
      fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch {
      // Ignore background network issues
    }

    setWhatsappUrl(waLink);
    setIsSuccess(true);
    setLoading(false);

    // Direct the user to WhatsApp with the pre-filled details
    window.location.href = waLink;
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-2xl mx-auto p-8 md:p-12 rounded-lg bg-surface-1 border border-brandBorder-gold text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/40 text-gold mx-auto flex items-center justify-center">
          <CheckCircle2 size={32} />
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Application Submitted</span>
        <h3 className="font-serif text-3xl md:text-4xl text-ivory">
          You are on the list for {tripName}.
        </h3>
        <p className="font-sans text-sm text-ivory-dark max-w-md mx-auto leading-relaxed">
          Redirecting to WhatsApp (+91 7536891201) with your application details. If WhatsApp did not open automatically, click the button below:
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl || `https://wa.me/917536891201`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <span>Open WhatsApp (+91 7536891201)</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: '',
              age: '',
              gender: '',
              travelStyle: '',
              instagram: '',
              whatsapp: '',
              email: '',
            });
          }}
          className="font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-light underline underline-offset-4 pt-2 inline-block"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      id="waitlist"
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto p-6 md:p-10 rounded-lg bg-surface-1 border border-brandBorder-medium space-y-8 shadow-2xl text-left"
    >
      <div className="border-b border-brandBorder-light pb-6">
        <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold">Cohort Vetting</div>
        <h3 className="font-serif text-3xl md:text-4xl text-ivory mt-1">Claim A Spot</h3>
        <p className="font-sans text-xs text-brandMuted mt-2">
          Expedition: <strong className="text-ivory font-medium">{tripName}</strong>
        </p>
      </div>

      {error && (
        <div className="p-4 rounded bg-rose-950/30 border border-rose-800/50 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      {/* 1. Personal Profile (Name & Age) */}
      <div className="space-y-4">
        <div className="font-mono text-[11px] uppercase tracking-wider text-brandMuted">1. Personal Profile</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-[10px] uppercase text-brandMuted mb-1">Full Name *</label>
            <input
              type="text"
              required
              placeholder="Kanishk Garg"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded bg-surface-2 border border-brandBorder-light focus:border-gold text-ivory text-sm outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block font-mono text-[10px] uppercase text-brandMuted mb-1">Age *</label>
            <input
              type="number"
              required
              min="18"
              max="75"
              placeholder="23"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full px-4 py-3 rounded bg-surface-2 border border-brandBorder-light focus:border-gold text-ivory text-sm outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* 2. Gender Selection */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="font-mono text-[11px] uppercase tracking-wider text-brandMuted">
            2. Gender (For 50:50 Cohort Balance) *
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {['Female', 'Male'].map((g) => (
            <button
              type="button"
              key={g}
              onClick={() => setFormData({ ...formData, gender: g })}
              className={`py-3 px-2 rounded font-mono text-xs border text-center transition-all ${
                formData.gender === g
                  ? 'bg-gold/15 border-gold text-gold font-medium'
                  : 'bg-surface-2 border-brandBorder-light text-brandMuted hover:border-brandBorder-medium hover:text-ivory'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* 3. How are you travelling? */}
      <div className="space-y-2">
        <label className="block font-mono text-[11px] uppercase tracking-wider text-brandMuted">
          3. How are you travelling? *
        </label>
        <div className="relative">
          <select
            required
            value={formData.travelStyle}
            onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value })}
            className="w-full px-4 py-3.5 rounded bg-surface-2 border border-brandBorder-light focus:border-gold text-ivory text-sm outline-none transition-colors appearance-none cursor-pointer pr-10"
          >
            <option value="" disabled className="bg-surface-2 text-brandMuted">
              Select your trip package / style
            </option>
            <option value="solo" className="bg-[#141410] text-ivory">
              Solo — ₹9,999/-
            </option>
            <option value="couple" className="bg-[#141410] text-ivory">
              Couple — ₹19,999/-
            </option>
            <option value="group" className="bg-[#141410] text-ivory">
              Group (All-Female · Upto 3) — ₹9,999 per head
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gold">
            <ChevronDown size={15} />
          </div>
        </div>
      </div>

      {/* 4. Contact & Social Verification */}
      <div className="space-y-4">
        <div className="font-mono text-[11px] uppercase tracking-wider text-brandMuted">
          4. Contact & Social Verification
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-[10px] uppercase text-brandMuted mb-1">
              Instagram Profile / Handle *
            </label>
            <div className="flex items-center rounded bg-surface-2 border border-brandBorder-light focus-within:border-gold transition-colors overflow-hidden">
              <span className="px-3 py-3 font-mono text-xs text-brandMuted bg-surface-3/60 border-r border-brandBorder-light select-none whitespace-nowrap hidden sm:inline-block">
                https://www.instagram.com/
              </span>
              <span className="px-2.5 py-3 font-mono text-xs text-brandMuted bg-surface-3/60 border-r border-brandBorder-light select-none whitespace-nowrap sm:hidden">
                instagram.com/
              </span>
              <input
                type="text"
                required
                placeholder="username"
                value={formData.instagram}
                onChange={(e) => {
                  let val = e.target.value.trim();
                  val = val.replace(/^https?:\/\/(www\.)?instagram\.com\//i, '').replace(/^@/, '');
                  setFormData({ ...formData, instagram: val });
                }}
                className="w-full px-3 py-3 bg-transparent text-ivory text-sm outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block font-mono text-[10px] uppercase text-brandMuted mb-1">
              WhatsApp Number (10 Digits) *
            </label>
            <input
              type="tel"
              required
              placeholder="987XXXXX10"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full px-4 py-3 rounded bg-surface-2 border border-brandBorder-light focus:border-gold text-ivory text-sm outline-none transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block font-mono text-[10px] uppercase text-brandMuted mb-1">Email Address *</label>
          <input
            type="email"
            required
            placeholder="kanishk@gmail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded bg-surface-2 border border-brandBorder-light focus:border-gold text-ivory text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-gold text-obsidian font-mono text-xs font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#3d6953] transition-all duration-300 shadow-xl shadow-gold/15 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
      >
        <span>{loading ? 'Submitting Application...' : 'Claim My Spot'}</span>
        {loading ? <Send size={15} className="animate-spin" /> : <ArrowRight size={15} />}
      </button>

      <div className="font-mono text-[9px] text-center text-brandMuted uppercase tracking-wider">
        No spam. We only contact approved applicants via WhatsApp concierge.
      </div>
    </form>
  );
}
