import React, { useState } from 'react';
import { Phone, MessageCircle, Copy, Check, MapPin, Mail, Clock, Heart, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_INFO } from '../data/products';

interface FooterProps {
  onOpenBespoke: () => void;
  onOpenSizing: () => void;
  onOpenCare: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBespoke,
  onOpenSizing,
  onOpenCare
}) => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(text);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  const cleanWhatsApp = CONTACT_INFO.primaryWhatsApp.replace(/[^0-9]/g, '');
  const cleanPhoneAtelier = CONTACT_INFO.phoneAtelier.replace(/[^0-9]/g, '');
  const cleanPhoneIntl = CONTACT_INFO.phoneInternational.replace(/[^0-9]/g, '');

  return (
    <footer id="contact" className="bg-[#070707] text-neutral-300 border-t border-[#222] relative overflow-hidden text-left">
      {/* Gold metallic divider bar at the top of footer */}
      <div className="gold-divider w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#1E1E1E]">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" showSubtitle={true} />
            <p className="text-xs text-neutral-400 leading-relaxed font-sans pt-2 max-w-sm">
              Jammy Handmade is an independent bespoke crochet fashion house based in Kampala, Uganda. We create slow-crafted occasion wear, red-carpet gowns, and sculptural bags designed to empower the modern woman.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37] font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Each stitch placed with intention and love</span>
            </div>
          </div>

          {/* Quick Nav & Atelier Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F3E5AB]">
              Atelier Collections
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-400">
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  Red Carpet & Mermaid Gowns
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  3D Rosette Cocktail Mini Dresses
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  Artisan Velvet Handbags & Backpacks
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  Amy's Kids Brother & Sister Sets
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBespoke}
                  className="hover:text-[#D4AF37] transition-colors text-left text-[#D4AF37] cursor-pointer"
                >
                  Custom Commission Studio →
                </button>
              </li>
            </ul>

            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F3E5AB] pt-4">
              Client Care & Sizing
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-400">
              <li>
                <button onClick={onOpenSizing} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Bespoke Body Sizing Chart
                </button>
              </li>
              <li>
                <button onClick={onOpenCare} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Crochet Garment Care Guide
                </button>
              </li>
              <li>
                <a
                  href={`https://wa.me/${cleanWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Request Consultation on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Numbers with 1-Click Copy (requested by user) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F3E5AB]">
              Contact & Direct Inquiries
            </h4>
            <p className="text-xs text-neutral-400 font-sans">
              Have a question about a piece or want to place an order? Contact our Kampala atelier lines directly:
            </p>

            <div className="space-y-2.5">
              
              {/* WhatsApp Line 1 */}
              <div className="p-3 rounded-xl bg-[#121212] border border-[#252525] flex items-center justify-between hover:border-[#25D366]/50 transition-colors">
                <a
                  href={`https://wa.me/${cleanWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-white hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase font-mono text-neutral-500">
                      Primary WhatsApp & Inquiries
                    </div>
                    <div className="font-mono font-bold text-sm text-[#F3E5AB]">
                      {CONTACT_INFO.primaryWhatsApp}
                    </div>
                  </div>
                </a>

                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.primaryWhatsApp)}
                  title="Copy Phone Number"
                  className="p-1.5 rounded-lg bg-[#1C1C1C] hover:bg-[#252525] text-neutral-400 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1 font-mono"
                >
                  {copiedNumber === CONTACT_INFO.primaryWhatsApp ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Atelier Call Line 2 */}
              <div className="p-3 rounded-xl bg-[#121212] border border-[#252525] flex items-center justify-between hover:border-[#D4AF37]/50 transition-colors">
                <a
                  href={`tel:${cleanPhoneAtelier}`}
                  className="flex items-center gap-2.5 text-xs text-white hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase font-mono text-neutral-500">
                      Atelier Phone Line
                    </div>
                    <div className="font-mono font-bold text-sm text-neutral-200">
                      {CONTACT_INFO.phoneAtelier}
                    </div>
                  </div>
                </a>

                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.phoneAtelier)}
                  title="Copy Phone Number"
                  className="p-1.5 rounded-lg bg-[#1C1C1C] hover:bg-[#252525] text-neutral-400 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1 font-mono"
                >
                  {copiedNumber === CONTACT_INFO.phoneAtelier ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* International Orders Line 3 */}
              <div className="p-3 rounded-xl bg-[#121212] border border-[#252525] flex items-center justify-between hover:border-[#D4AF37]/50 transition-colors">
                <a
                  href={`tel:${cleanPhoneIntl}`}
                  className="flex items-center gap-2.5 text-xs text-white hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase font-mono text-neutral-500">
                      International Orders & Client Care
                    </div>
                    <div className="font-mono font-bold text-sm text-neutral-200">
                      {CONTACT_INFO.phoneInternational}
                    </div>
                  </div>
                </a>

                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.phoneInternational)}
                  title="Copy Phone Number"
                  className="p-1.5 rounded-lg bg-[#1C1C1C] hover:bg-[#252525] text-neutral-400 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1 font-mono"
                >
                  {copiedNumber === CONTACT_INFO.phoneInternational ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Location & Hours */}
            <div className="pt-2 space-y-1.5 text-xs text-neutral-400 font-sans">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{CONTACT_INFO.workingHours}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-sans">
          <div>
            © {new Date().getFullYear()} Jammy Handmade. All rights reserved. Handcrafted in Kampala, Uganda.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Slow Fashion</span>
            <span>·</span>
            <span>Zero Waste</span>
            <span>·</span>
            <span>Bespoke Fit</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
