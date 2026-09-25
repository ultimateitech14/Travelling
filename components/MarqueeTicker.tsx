export default function MarqueeTicker() {
  const items = Array(14).fill('BEING TRAVELLER');

  return (
    <div className="w-full overflow-hidden border-y border-brandBorder-light bg-surface-1/40 py-3 relative z-10 backdrop-blur-sm select-none">
      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span
              className={`font-mono text-[11px] tracking-[0.28em] uppercase whitespace-nowrap ${
                idx % 2 === 0 ? 'text-gold' : 'text-brandMuted'
              }`}
            >
              {text}
            </span>
            <span className="font-mono text-gold-dim text-xs">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
