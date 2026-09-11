import React from 'react';
import { ArrowRight, MessageSquare, Phone, Clock, ShieldCheck, Mail } from 'lucide-react';
import { openWhatsAppEnquiry } from '../../lib/whatsapp';
import { APPROVED_CONTACTS } from '../../config/contacts';

interface ConversionSectionProps {
  onOpenBooking: () => void;
}

export const ConversionSection: React.FC<ConversionSectionProps> = ({ onOpenBooking }) => {
  const handleGeneralWhatsApp = () => {
    openWhatsAppEnquiry({
      division: 'all-schools-media',
      product: 'Master Group Production',
      sourcePage: '/',
      customMessage: 'Hello ASMG team, I would like to discuss planning an upcoming media/broadcast project in Zimbabwe.',
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#090b10] via-[#0d0f17] to-[#07080b] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-3 inline-block">
          Section 10 • Immediate Commercial Dispatch
        </span>

        <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Tell Us What You're Planning.
        </h2>

        <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
          Whether you require a multi-camera stadium broadcast unit in Harare, an institutional prize day archive, couture wedding cinema, or a dedicated studio booking, our division directors respond within 4 business hours.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-950/50 flex items-center justify-center gap-2 group"
          >
            <span>Request a Commercial Proposal</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleGeneralWhatsApp}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-500/40 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat Directly on WhatsApp</span>
          </button>
        </div>

        {/* Trust & Response Matrix */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-4 rounded-xl bg-[#121520] border border-slate-800 flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white">4-Hour Response SLA</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Every quotation request is routed directly to the designated division director.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#121520] border border-slate-800 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white">Verified Pricing Integrity</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Transparent scope sheets with zero hidden equipment surcharges or fuel surprises.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#121520] border border-slate-800 flex items-start gap-3">
            <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white">Harare Operations HQ</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {APPROVED_CONTACTS['group-general'].displayPhone} (ASMG Production Operations)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
