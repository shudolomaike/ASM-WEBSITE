import React from 'react';
import { APPROVED_CONTACTS } from '../config/contacts';
import { openWhatsAppEnquiry } from '../lib/whatsapp';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { DivisionKey } from '../types';

interface ContactViewProps {
  onOpenBooking: (division?: DivisionKey) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenBooking }) => {
  const contactsList = Object.entries(APPROVED_CONTACTS);

  const handleWhatsAppChat = (key: string, contact: any) => {
    let divKey: DivisionKey = 'all-schools-media';
    if (key.includes('sports')) divKey = 'sports-express';
    if (key.includes('wildfive')) divKey = 'wildfive-pictures';
    if (key.includes('5th')) divKey = '5th-floor-studio';
    if (key.includes('digital')) divKey = 'digital-marketing';

    openWhatsAppEnquiry({
      division: divKey,
      product: 'General Production Enquiry',
      sourcePage: '/contact',
      customMessage: `Hello ${contact.contactName}, I would like to enquire with the ${contact.role} desk at ASMG.`,
    });
  };

  return (
    <div className="bg-[#07080b] min-h-screen text-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2 block">
            Centralized Commercial Directory
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Contact Directorate
          </h1>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Direct routing to designated division heads and fleet managers in Harare, Zimbabwe. Strict single-approved registry enforced.
          </p>
        </div>

        {/* Directorate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactsList.map(([key, contact]) => (
            <div
              key={key}
              className="p-6 rounded-2xl bg-[#0e1118] border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all shadow-xl"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold block mb-1">
                  {key.toUpperCase().replace('-', ' ')}
                </span>
                <h3 className="font-cinzel text-lg font-bold text-white mb-1">
                  {contact.contactName}
                </h3>
                <p className="text-xs text-slate-400 mb-4">{contact.notes || 'Designated Division Director'}</p>

                <div className="space-y-2 border-t border-slate-800/80 pt-4 text-xs font-mono">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>{contact.displayPhone}</span>
                  </div>
                  {contact.email && (
                    <div className="flex items-center gap-2.5 text-slate-400">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <span className="truncate">{contact.email}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Harare, Zimbabwe</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleWhatsAppChat(key, contact)}
                  className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => onOpenBooking()}
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                >
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Operational HQ & Response Guarantee */}
        <div className="p-8 rounded-2xl bg-[#0e1118] border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-500 font-semibold mb-2 block">
              Physical Location & Operations
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
              Harare Operations & Studio Facility
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              All Schools Media Group maintains full studio production, outside broadcast van facilities, and editing suites in Harare, Zimbabwe.
            </p>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div>• City: Harare, Zimbabwe</div>
              <div>• Operational Hours: Mon – Sat, 08:00 – 18:00 CAT</div>
              <div>• Outside Broadcast Dispatches: 24/7 Event Call-Out</div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#131722] border border-slate-800 text-center">
            <h4 className="font-bold text-white text-base mb-2">Need a Comprehensive Scope?</h4>
            <p className="text-xs text-slate-400 mb-6 max-w-sm mx-auto">
              Our digital booking desk records institutional requirements and delivers structured commercial proposals within 4 business hours.
            </p>
            <button
              onClick={() => onOpenBooking()}
              className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest transition-colors shadow-lg shadow-amber-950/40"
            >
              Open Booking Proposal Desk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
