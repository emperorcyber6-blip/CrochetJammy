import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, Ruler, Calendar, CheckCircle2 } from 'lucide-react';
import { Currency } from '../types';
import { createWhatsAppOrderLink } from '../utils/formatters';

interface BespokeStudioProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
}

export const BespokeStudio: React.FC<BespokeStudioProps> = ({
  isOpen,
  onClose,
  currency
}) => {
  if (!isOpen) return null;

  const [garmentType, setGarmentType] = useState('Red Carpet Maxi Gown');
  const [stitchStyle, setStitchStyle] = useState('Sculpted 3D Rosettes');
  const [primaryColor, setPrimaryColor] = useState('Sunburst Gold & Onyx');
  const [bust, setBust] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [length, setLength] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const garmentOptions = [
    'Red Carpet Maxi Gown',
    'Ruffled Cocktail Mini Dress',
    'Sculptural Rosette Dress',
    'Tailored Keyhole Dress',
    'Luxury Top-Handle Bag',
    'Granny Square Backpack',
    "Amy's Kids Brother & Sister Set",
    'Haute Couture Bridal Crochet'
  ];

  const stitchOptions = [
    'Sculpted 3D Rosettes & Petals',
    'Tiered Spiral Ruffle Cascade',
    'High-Density Bodycon Ribbed',
    'Granny Square Floral Geometric',
    'Delicate Openwork Lattice Mesh',
    'Trumpet Flounce with Pleated Cuffs'
  ];

  const colorPalettes = [
    'Sunburst Gold',
    'Royal Sapphire Blue',
    'Crimson Ruby Red',
    'Obsidian Jet Black',
    'Mocha & Cream',
    'Imperial Amethyst Purple',
    'Pearl White & Red Roses',
    'Emerald Forest',
    'Custom Mixed Palette'
  ];

  const whatsappLink = createWhatsAppOrderLink({
    isCustomBespoke: true,
    bespokeDetails: {
      garmentType,
      stitchStyle,
      primaryColor,
      bust,
      waist,
      hips,
      length,
      eventDate,
      additionalNotes
    },
    currency
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#121212] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl text-neutral-100 my-auto">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#181818] via-[#1F1F1F] to-[#181818] border-b border-[#2B2B2B] flex items-center justify-between text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Jammy Couture Atelier</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
              Bespoke Custom Order Studio
            </h2>
            <p className="text-xs text-neutral-400">
              Co-create your dream crochet silhouette tailored to your exact measurements and event date.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Bespoke Studio"
            className="p-2.5 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-black text-neutral-300 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-left font-sans">
          
          {/* Step 1: Garment Type */}
          <div className="space-y-2.5">
            <label className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
              <span>01. Select Silhouette / Piece Type</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {garmentOptions.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGarmentType(g)}
                  className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                    garmentType === g
                      ? 'border-[#D4AF37] bg-[#1E1E1E] text-[#F3E5AB] font-semibold ring-1 ring-[#D4AF37]'
                      : 'border-neutral-800 bg-[#161616] text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Stitch Style */}
          <div className="space-y-2.5 pt-4 border-t border-[#222]">
            <label className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
              <span>02. Select Artisan Stitch & Accent Technique</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {stitchOptions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStitchStyle(s)}
                  className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                    stitchStyle === s
                      ? 'border-[#D4AF37] bg-[#1E1E1E] text-[#F3E5AB] font-semibold ring-1 ring-[#D4AF37]'
                      : 'border-neutral-800 bg-[#161616] text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Yarn Palette */}
          <div className="space-y-2.5 pt-4 border-t border-[#222]">
            <label className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
              <span>03. Desired Yarn Palette</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {colorPalettes.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setPrimaryColor(c)}
                  className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                    primaryColor === c
                      ? 'border-[#D4AF37] bg-[#1E1E1E] text-[#F3E5AB] font-semibold ring-1 ring-[#D4AF37]'
                      : 'border-neutral-800 bg-[#161616] text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Body Measurements */}
          <div className="space-y-2.5 pt-4 border-t border-[#222]">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5" />
                <span>04. Custom Measurements (Inches or CM)</span>
              </label>
              <span className="text-[10px] text-neutral-400">
                Can be updated after consultation
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-[11px] text-neutral-400 block mb-1">Bust</label>
                <input
                  type="text"
                  placeholder="e.g. 36 in"
                  value={bust}
                  onChange={(e) => setBust(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-neutral-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label className="text-[11px] text-neutral-400 block mb-1">Waist</label>
                <input
                  type="text"
                  placeholder="e.g. 28 in"
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-neutral-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label className="text-[11px] text-neutral-400 block mb-1">Hips</label>
                <input
                  type="text"
                  placeholder="e.g. 40 in"
                  value={hips}
                  onChange={(e) => setHips(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-neutral-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label className="text-[11px] text-neutral-400 block mb-1">Total Height / Length</label>
                <input
                  type="text"
                  placeholder="e.g. 5'7&quot; / 58 in"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-neutral-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>
          </div>

          {/* Step 5: Event Date & Special Instructions */}
          <div className="space-y-3 pt-4 border-t border-[#222]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5 mb-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>05. Event Date / Needed By</span>
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-neutral-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block mb-1.5">
                  06. Inspiration Link or Details
                </label>
                <input
                  type="text"
                  placeholder="Pinterest / Instagram link or specific ideas"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-neutral-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>
          </div>

          {/* Submission Action */}
          <div className="pt-6 border-t border-[#222] space-y-4">
            <div className="p-4 rounded-2xl bg-[#181818] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">
                  Instant Atelier Consultation
                </span>
                <h4 className="font-serif text-base text-white font-medium">
                  Direct WhatsApp Review with Jammy (+256 763 008 787)
                </h4>
                <p className="text-xs text-neutral-400">
                  Your specifications will be pre-formatted into an artisan commission ticket.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSubmitted(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Submit to WhatsApp</span>
              </a>
            </div>

            {submitted && (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  WhatsApp opened with your custom specifications. Jammy will reply with pricing and schedule!
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
