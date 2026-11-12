import React from 'react';
import { X, Sparkles, Check, AlertTriangle, ShieldCheck } from 'lucide-react';

interface CareGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareGuideModal: React.FC<CareGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121212] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl text-neutral-100 my-auto text-left">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#181818] via-[#1E1E1E] to-[#181818] border-b border-[#2B2B2B] flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Atelier Preservation Guide</span>
            </div>
            <h2 className="font-serif text-2xl font-medium text-white mt-1">
              Crochet Couture Care & Longevity
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Care Guide"
            className="p-2.5 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-black text-neutral-300 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans text-xs sm:text-sm text-neutral-300">
          
          <div className="space-y-3">
            <h3 className="font-serif text-base text-[#F3E5AB] font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-[#D4AF37]" />
              <span>1. Washing: Gentle Hand Wash Only</span>
            </h3>
            <p className="leading-relaxed text-neutral-400 pl-6">
              Fill a clean basin with cold or lukewarm water (max 30°C / 85°F). Add a mild silk, wool, or gentle fabric cleanser. Submerge your garment and gently swirl for 3 to 5 minutes. Never scrub vigorously or use bleach.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#222]">
            <h3 className="font-serif text-base text-[#F3E5AB] font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>2. Drying: The "Roll & Flat Dry" Technique</span>
            </h3>
            <p className="leading-relaxed text-neutral-400 pl-6">
              <strong className="text-white">NEVER WRING OR TWIST.</strong> Instead, gently press water out with clean hands, then lay the dress onto a dry bath towel. Roll the towel up like a sushi roll and gently press to absorb excess moisture.
            </p>
            <p className="leading-relaxed text-amber-300/90 pl-6 text-xs font-mono">
              ⚠️ CRITICAL: Never hang a wet crochet dress on a hanger. The weight of the water will stretch the loops vertically and alter the silhouette. Always lay flat on a clean dry towel in the shade.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#222]">
            <h3 className="font-serif text-base text-[#F3E5AB] font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-[#D4AF37]" />
              <span>3. Steaming & Wrinkle Release</span>
            </h3>
            <p className="leading-relaxed text-neutral-400 pl-6">
              Do not press a dry electric iron directly onto crochet stitches. Use a handheld garment steamer held 2 to 3 inches away to fluff the 3D rosettes and smooth the ruffles.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#222]">
            <h3 className="font-serif text-base text-[#F3E5AB] font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-[#D4AF37]" />
              <span>4. Storage & Travel</span>
            </h3>
            <p className="leading-relaxed text-neutral-400 pl-6">
              Fold your dress loosely and store flat in a breathable cotton garment pouch or drawer with acid-free tissue paper between folds. For structured bags, store stuffed with tissue paper to keep their geometric shape.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#181818] border-t border-[#282828] text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#D4AF37] text-black text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            Understood, Close
          </button>
        </div>

      </div>
    </div>
  );
};
