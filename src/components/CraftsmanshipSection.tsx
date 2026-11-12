import React from 'react';
import { Sparkles, Clock, Globe2, ShieldCheck, Scissors } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-20 lg:py-28 bg-[#0D0D0D] text-neutral-100 border-b border-[#222] relative overflow-hidden">
      
      {/* Subtle gold radial background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-[#D4AF37]/40 text-xs font-mono uppercase tracking-widest text-[#F3E5AB]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Slow Fashion Atelier</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Crafted Stitched by Stitch, <br />
            <span className="italic font-light gold-gradient-text">Never Mass-Produced.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            In an era of fast synthetic garments, Jammy Handmade preserves the timeless beauty of human handcraft. Every piece is an original work of wearable art originating from our atelier in Kampala, Uganda.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#2B2B2B] space-y-3 text-left hover:border-[#D4AF37]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1F1F1F] border border-[#333] flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg text-white font-medium">
              40+ Hours Per Gown
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              From continuous spiral ruffled slits to tiered flounce trains, our master artisans spend between 30 to 60 dedicated hours sculpting a single red-carpet silhouette.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-[#2B2B2B] space-y-3 text-left hover:border-[#D4AF37]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1F1F1F] border border-[#333] flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
              <Scissors className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg text-white font-medium">
              3D Sculpted Rosettes
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Each blooming flower on our couture dresses is crocheted petal by petal, steamed, and secured by hand. Never glued, printed, or prefabricated.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-[#2B2B2B] space-y-3 text-left hover:border-[#D4AF37]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1F1F1F] border border-[#333] flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg text-white font-medium">
              Zero Textile Waste
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Unlike cut-and-sew manufacturing where up to 20% of fabric is discarded on the cutting floor, crochet generates zero microplastic waste—every gram of yarn is woven into the dress.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-[#2B2B2B] space-y-3 text-left hover:border-[#D4AF37]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1F1F1F] border border-[#333] flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg text-white font-medium">
              Worldwide Delivery
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              From doorstep delivery across Kampala and Uganda, to international express delivery via DHL to the United States, United Kingdom, and diaspora worldwide.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
