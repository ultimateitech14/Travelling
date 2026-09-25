'use client';

import { useState } from 'react';
import { ShieldCheck, Users } from 'lucide-react';

interface Seat {
  id: string;
  row: number;
  col: 'left' | 'right-1' | 'right-2';
  status: 'available' | 'booked-male' | 'booked-female' | 'selected';
  label: string;
}

const initialSeats: Seat[] = [
  // Row 1
  { id: '1A', row: 1, col: 'left', status: 'booked-female', label: '1A' },
  { id: '1B', row: 1, col: 'right-1', status: 'booked-male', label: '1B' },
  { id: '1C', row: 1, col: 'right-2', status: 'booked-male', label: '1C' },
  // Row 2
  { id: '2A', row: 2, col: 'left', status: 'booked-female', label: '2A' },
  { id: '2B', row: 2, col: 'right-1', status: 'booked-female', label: '2B' },
  { id: '2C', row: 2, col: 'right-2', status: 'booked-male', label: '2C' },
  // Row 3
  { id: '3A', row: 3, col: 'left', status: 'available', label: '3A' },
  { id: '3B', row: 3, col: 'right-1', status: 'booked-female', label: '3B' },
  { id: '3C', row: 3, col: 'right-2', status: 'booked-female', label: '3C' },
  // Row 4
  { id: '4A', row: 4, col: 'left', status: 'booked-male', label: '4A' },
  { id: '4B', row: 4, col: 'right-1', status: 'booked-male', label: '4B' },
  { id: '4C', row: 4, col: 'right-2', status: 'available', label: '4C' },
  // Row 5 (Rear Bench)
  { id: '5A', row: 5, col: 'left', status: 'booked-female', label: '5A' },
  { id: '5B', row: 5, col: 'right-1', status: 'booked-male', label: '5B' },
  { id: '5C', row: 5, col: 'right-2', status: 'available', label: '5C' },
  { id: '5D', row: 5, col: 'right-2', status: 'available', label: '5D' },
];

export default function SeatMap({ vehicleType = 'Force Urbania 16-Seater' }: { vehicleType?: string }) {
  const [seats, setSeats] = useState<Seat[]>(initialSeats);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const toggleSeat = (id: string) => {
    const seat = seats.find((s) => s.id === id);
    if (!seat || seat.status.startsWith('booked')) return;

    if (selectedSeat === id) {
      setSelectedSeat(null);
      setSeats(seats.map((s) => (s.id === id ? { ...s, status: 'available' } : s)));
    } else {
      setSelectedSeat(id);
      setSeats(
        seats.map((s) => {
          if (s.id === id) return { ...s, status: 'selected' };
          if (s.status === 'selected') return { ...s, status: 'available' };
          return s;
        })
      );
    }
  };

  const femaleCount = seats.filter((s) => s.status === 'booked-female').length;
  const maleCount = seats.filter((s) => s.status === 'booked-male').length;
  const availableCount = seats.filter((s) => s.status === 'available' || s.status === 'selected').length;

  return (
    <div className="w-full max-w-2xl mx-auto bg-surface-1 border border-brandBorder-medium rounded-lg p-6 md:p-8 backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-brandBorder-light">
        <div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold">Transit Spec</span>
          <h3 className="font-serif text-2xl text-ivory">{vehicleType}</h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-brandMuted bg-surface-2 px-3 py-1.5 rounded border border-brandBorder-light">
          <ShieldCheck size={14} className="text-gold" />
          <span>Captain Recliner Seats</span>
        </div>
      </div>

      {/* Gender Balance Indicator */}
      <div className="my-6 p-4 rounded bg-surface-2/60 border border-brandBorder-light space-y-2.5">
        <div className="flex justify-between font-mono text-xs text-brandMuted">
          <span className="flex items-center gap-1.5">
            <Users size={13} className="text-gold" />
            <span>Cohort Balance</span>
          </span>
          <span className="text-ivory">
            {femaleCount}F : {maleCount}M · <span className="text-gold">{availableCount} Left</span>
          </span>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-surface-3 overflow-hidden flex">
          <div style={{ width: `${(femaleCount / seats.length) * 100}%` }} className="bg-rose-400/80 h-full" />
          <div style={{ width: `${(maleCount / seats.length) * 100}%` }} className="bg-sky-400/80 h-full" />
          <div style={{ width: `${(availableCount / seats.length) * 100}%` }} className="bg-gold/30 h-full" />
        </div>
        <div className="flex justify-between font-mono text-[9.5px] text-brandMuted">
          <span>♀ Female (50%)</span>
          <span>♂ Male (37.5%)</span>
          <span className="text-gold">Available (12.5%)</span>
        </div>
      </div>

      {/* Bus Graphic Chassis */}
      <div className="relative border-2 border-brandBorder-medium rounded-3xl p-6 bg-surface-2/30 max-w-sm mx-auto shadow-inner">
        {/* Cockpit Front */}
        <div className="w-full border-b border-brandBorder-light pb-4 mb-6 flex justify-between items-center text-brandMuted font-mono text-[10px] uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-brandBorder-light flex items-center justify-center">
              <span className="text-xs">⎈</span>
            </div>
            <span>Lead Captain</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-surface-3 text-[9px] border border-brandBorder-light">Windshield</span>
        </div>

        {/* Seats Grid */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((rowNum) => {
            const leftSeat = seats.find((s) => s.row === rowNum && s.col === 'left');
            const right1 = seats.find((s) => s.row === rowNum && s.col === 'right-1');
            const right2 = seats.find((s) => s.row === rowNum && s.col === 'right-2');

            return (
              <div key={rowNum} className="flex justify-between items-center">
                {/* Left Seat */}
                {leftSeat && (
                  <button
                    onClick={() => toggleSeat(leftSeat.id)}
                    disabled={leftSeat.status.startsWith('booked')}
                    className={`w-14 h-12 rounded flex flex-col items-center justify-center font-mono text-xs border transition-all ${
                      leftSeat.status === 'selected'
                        ? 'bg-gold text-obsidian border-gold font-bold shadow-lg shadow-gold/20'
                        : leftSeat.status === 'booked-female'
                        ? 'bg-rose-950/20 text-rose-300/60 border-rose-900/30 cursor-not-allowed'
                        : leftSeat.status === 'booked-male'
                        ? 'bg-sky-950/20 text-sky-300/60 border-sky-900/30 cursor-not-allowed'
                        : 'bg-surface-1 text-ivory border-brandBorder-light hover:border-gold hover:text-gold'
                    }`}
                  >
                    <span>{leftSeat.label}</span>
                    <span className="text-[8px] opacity-70">
                      {leftSeat.status === 'selected' ? 'MINE' : leftSeat.status.startsWith('booked') ? 'TAKEN' : 'OPEN'}
                    </span>
                  </button>
                )}

                {/* Center Aisle */}
                <div className="w-10 text-center font-mono text-[9px] text-brandMuted-dark select-none">···</div>

                {/* Right Dual Seats */}
                <div className="flex gap-2">
                  {[right1, right2].map((s) =>
                    s ? (
                      <button
                        key={s.id}
                        onClick={() => toggleSeat(s.id)}
                        disabled={s.status.startsWith('booked')}
                        className={`w-14 h-12 rounded flex flex-col items-center justify-center font-mono text-xs border transition-all ${
                          s.status === 'selected'
                            ? 'bg-gold text-obsidian border-gold font-bold shadow-lg shadow-gold/20'
                            : s.status === 'booked-female'
                            ? 'bg-rose-950/20 text-rose-300/60 border-rose-900/30 cursor-not-allowed'
                            : s.status === 'booked-male'
                            ? 'bg-sky-950/20 text-sky-300/60 border-sky-900/30 cursor-not-allowed'
                            : 'bg-surface-1 text-ivory border-brandBorder-light hover:border-gold hover:text-gold'
                        }`}
                      >
                        <span>{s.label}</span>
                        <span className="text-[8px] opacity-70">
                          {s.status === 'selected' ? 'MINE' : s.status.startsWith('booked') ? 'TAKEN' : 'OPEN'}
                        </span>
                      </button>
                    ) : null
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rear Luggage Boot */}
        <div className="mt-6 pt-4 border-t border-brandBorder-light text-center font-mono text-[9.5px] uppercase tracking-wider text-brandMuted">
          Luggage Bay & Emergency Escape
        </div>
      </div>

      {/* Selected Confirmation */}
      {selectedSeat && (
        <div className="mt-6 p-4 rounded bg-gold-pale border border-brandBorder-gold text-center font-mono text-xs text-gold">
          Selected Seat: <strong className="font-bold">{selectedSeat}</strong> · This preference will be noted in your application.
        </div>
      )}
    </div>
  );
}
