import React, { useState } from 'react';
import { X, Ruler, Sparkles, CheckCircle2 } from 'lucide-react';

interface SizingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBespoke: () => void;
}

export const SizingGuideModal: React.FC<SizingGuideModalProps> = ({
  isOpen,
  onClose,
  onOpenBespoke
}) => {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');

  if (!isOpen) return null;

  const sizeChart = [
    {
      sizeUK: 'UK 6',
      sizeUS: 'US 2',
      bustIn: '31 - 33"',
      waistIn: '24 - 25"',
      hipsIn: '34 - 35"',
      bustCm: '78 - 84 cm',
      waistCm: '60 - 64 cm',
      hipsCm: '86 - 90 cm'
    },
    {
      sizeUK: 'UK 8',
      sizeUS: 'US 4',
      bustIn: '33 - 35"',
      waistIn: '26 - 27"',
      hipsIn: '36 - 37"',
      bustCm: '84 - 88 cm',
      waistCm: '65 - 69 cm',
      hipsCm: '91 - 95 cm'
    },
    {
      sizeUK: 'UK 10',
      sizeUS: 'US 6',
      bustIn: '35 - 37"',
      waistIn: '28 - 29"',
      hipsIn: '38 - 39"',
      bustCm: '89 - 93 cm',
      waistCm: '70 - 74 cm',
      hipsCm: '96 - 100 cm'
    },
    {
      sizeUK: 'UK 12',
      sizeUS: 'US 8',
      bustIn: '37 - 39"',
      waistIn: '30 - 31"',
      hipsIn: '40 - 42"',
      bustCm: '94 - 98 cm',
      waistCm: '75 - 80 cm',
      hipsCm: '101 - 106 cm'
    },
    {
      sizeUK: 'UK 14',
      sizeUS: 'US 10',
      bustIn: '40 - 42"',
      waistIn: '32 - 34"',
      hipsIn: '43 - 45"',
      bustCm: '100 - 106 cm',
      waistCm: '82 - 87 cm',
      hipsCm: '108 - 114 cm'
    },
    {
      sizeUK: 'UK 16',
      sizeUS: 'US 12',
      bustIn: '43 - 45"',
      waistIn: '35 - 37"',
      hipsIn: '46 - 48"',
      bustCm: '108 - 114 cm',
      waistCm: '89 - 95 cm',
      hipsCm: '116 - 122 cm'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#121212] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl text-neutral-100 my-auto text-left">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#181818] via-[#1E1E1E] to-[#181818] border-b border-[#2B2B2B] flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              <Ruler className="w-3.5 h-3.5" />
              <span>Tailoring Guide</span>
            </div>
            <h2 className="font-serif text-2xl font-medium text-white mt-1">
              Atelier Sizing & Measurements
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Sizing Guide"
            className="p-2.5 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-black text-neutral-300 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans">
          
          {/* Unit Toggle */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-400">
              Crochet fabric has natural micro-stretch that adapts comfortably to your curves.
            </span>
            <div className="inline-flex rounded-lg bg-[#1C1C1C] p-0.5 border border-[#333]">
              <button
                onClick={() => setUnit('inches')}
                className={`px-3 py-1 rounded-md font-mono text-[11px] font-bold transition-all cursor-pointer ${
                  unit === 'inches'
                    ? 'bg-[#D4AF37] text-black shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Inches (")
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 rounded-md font-mono text-[11px] font-bold transition-all cursor-pointer ${
                  unit === 'cm'
                    ? 'bg-[#D4AF37] text-black shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>

          {/* Size Table */}
          <div className="overflow-x-auto rounded-2xl border border-neutral-800">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#1A1A1A] text-neutral-300 font-mono uppercase text-[10px] tracking-wider border-b border-neutral-800">
                <tr>
                  <th className="py-3 px-4">Size UK</th>
                  <th className="py-3 px-4">Size US</th>
                  <th className="py-3 px-4">Bust</th>
                  <th className="py-3 px-4">Waist</th>
                  <th className="py-3 px-4">Hips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 font-mono tabular-nums text-neutral-200">
                {sizeChart.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#181818] transition-colors">
                    <td className="py-3 px-4 font-bold text-[#F3E5AB]">{row.sizeUK}</td>
                    <td className="py-3 px-4 text-neutral-400">{row.sizeUS}</td>
                    <td className="py-3 px-4">
                      {unit === 'inches' ? row.bustIn : row.bustCm}
                    </td>
                    <td className="py-3 px-4">
                      {unit === 'inches' ? row.waistIn : row.waistCm}
                    </td>
                    <td className="py-3 px-4">
                      {unit === 'inches' ? row.hipsIn : row.hipsCm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to measure tips */}
          <div className="p-4 rounded-2xl bg-[#161616] border border-neutral-800 space-y-2 text-xs text-neutral-300">
            <h4 className="font-serif text-sm text-white font-medium flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>How to Measure with a Tape Measure</span>
            </h4>
            <ul className="space-y-1.5 text-neutral-400 pl-5 list-disc">
              <li><strong>Bust:</strong> Measure around the fullest part of your bust wearing your desired undergarments.</li>
              <li><strong>Waist:</strong> Measure around your natural waistline, usually 1 to 2 inches above your navel.</li>
              <li><strong>Hips:</strong> Measure around the fullest part of your hips/buttocks with feet together.</li>
              <li><strong>Length:</strong> Measure from the hollow of your neck down to where you want the dress hem to fall.</li>
            </ul>
          </div>

          {/* Bespoke Custom Fit Option */}
          <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                Between sizes or want a tailored bespoke cut?
              </span>
              <p className="text-xs text-white">
                We craft bespoke crochet couture made specifically to your exact numbers at no extra charge.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenBespoke();
              }}
              className="px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-semibold text-xs tracking-wider uppercase transition-all shrink-0 cursor-pointer"
            >
              Order Bespoke Fit
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
