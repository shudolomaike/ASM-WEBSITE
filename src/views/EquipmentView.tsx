import React, { useState } from 'react';
import { EQUIPMENT_FLEET } from '../data/equipment';
import { APPROVED_CONTACTS } from '../config/contacts';
import { openWhatsAppEnquiry } from '../lib/whatsapp';
import { Camera, CheckCircle2, Phone, MessageSquare, ShieldCheck, Cpu } from 'lucide-react';

export const EquipmentView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const equipmentContact = APPROVED_CONTACTS['equipment'];

  const categories = ['all', 'Cameras', 'Lenses', 'Broadcast & Switching', 'Audio & Wireless', 'Lighting'];

  const filteredItems = selectedCategory === 'all'
    ? EQUIPMENT_FLEET
    : EQUIPMENT_FLEET.filter((item) => item.category === selectedCategory);

  const handleHireWhatsApp = (itemName?: string) => {
    openWhatsAppEnquiry({
      division: 'all-schools-media',
      product: `Equipment Hire: ${itemName || 'General Fleet'}`,
      sourcePage: '/equipment',
      customMessage: `Hello Mr Chinehasha, I would like to enquire about hiring production equipment (${itemName || 'camera fleet'}) from ASMG Harare.`,
    });
  };

  return (
    <div className="bg-[#07080b] min-h-screen text-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800/80 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2 block">
              Professional Hardware Fleet
            </span>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Production Equipment & Camera Hire
            </h1>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Cinema-grade Sony full-frame bodies, G-Master telephotos, wireless video transceivers, and portable ATEM broadcast switchers available for certified productions in Zimbabwe.
            </p>
          </div>

          {/* Dedicated Equipment Desk Lead Card */}
          <div className="p-4 rounded-xl bg-[#0e1118] border border-slate-800 flex items-center gap-4 shrink-0">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-500">Equipment Fleet Director</div>
              <div className="text-sm font-bold text-white">{equipmentContact.contactName}</div>
              <div className="text-xs font-mono text-amber-400">{equipmentContact.displayPhone}</div>
            </div>
            <button
              onClick={() => handleHireWhatsApp()}
              className="p-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              title="WhatsApp Equipment Desk"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0e1118] border border-slate-800 text-xs font-mono mb-8 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg transition-colors capitalize ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Hardware' : cat}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-slate-800 bg-[#0e1118] overflow-hidden flex flex-col justify-between group hover:border-slate-700 transition-all shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-400">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-[10px] font-mono">
                    {item.availability}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block mb-1">
                    Model: {item.model}
                  </span>
                  <h3 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.specs}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400">Rate on Request</span>
                  <button
                    onClick={() => handleHireWhatsApp(item.name)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Check Dates</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hire Protocols and Verification Requirements */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0e1118] border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div>
            <div className="font-bold text-white text-sm mb-1">Hire Protocols</div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Standard rentals require a verified production agreement, national ID/passport verification, and physical inspection sign-off at our Harare facility.
            </p>
          </div>
          <div>
            <div className="font-bold text-white text-sm mb-1">Dry Hire vs. Crewed Fleet</div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              ATEM switchers and multi-cam wireless arrays are preferentially deployed with certified ASMG camera operators and technicians.
            </p>
          </div>
          <div>
            <div className="font-bold text-white text-sm mb-1">Emergency Weekend Dispatches</div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Urgent replacement cameras or telephoto lenses for weekend sports or ceremonies can be dispatched on priority via Mr Chinehasha.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
