import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle2, AlertCircle, Phone, Calendar, MapPin, Building } from 'lucide-react';
import { DivisionKey, LeadInput } from '../../types';
import { DIVISIONS, PARENT_BRAND } from '../../config/brand';
import { submitLead } from '../../integrations/notion/leads';
import { openWhatsAppEnquiry } from '../../lib/whatsapp';
import { trackEvent } from '../../lib/analytics';
import { getContactForDivision } from '../../config/contacts';

interface QuoteBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDivision?: DivisionKey | 'integrated';
  defaultProduct?: string;
}

const DELIVERABLES_OPTIONS = [
  'Multi-Camera 4K Livestreaming',
  'Stage / Event Photography',
  'Cinematic Highlight Video (3-5 min)',
  'Instant Replay & Sports Graphics',
  'Private Pixieset Photo Gallery',
  'Audio Multitrack & Podium Recording',
  'Drone Aerial Cinematography',
  'Studio Portrait Sessions',
  'Social Media Vertical Reels (TikTok/IG)',
  'Full Documentary Film (60-90 min)',
];

export const QuoteBookingModal: React.FC<QuoteBookingModalProps> = ({
  isOpen,
  onClose,
  defaultDivision = 'all-schools-media',
  defaultProduct = '',
}) => {
  const [formData, setFormData] = useState<LeadInput>({
    division: defaultDivision,
    product: defaultProduct,
    name: '',
    organisation: '',
    phone: '',
    email: '',
    eventType: 'School Ceremony',
    eventDate: '',
    venue: '',
    city: 'Harare',
    budgetRange: 'Standard Package',
    deliverables: ['Multi-Camera 4K Livestreaming', 'Stage / Event Photography'],
    message: '',
    marketingConsent: true,
    sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    enquiryId: string;
    message: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDeliverableToggle = (item: string) => {
    setFormData((prev) => {
      const exists = prev.deliverables?.includes(item);
      const updated = exists
        ? prev.deliverables?.filter((d) => d !== item)
        : [...(prev.deliverables || []), item];
      return { ...prev, deliverables: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name or organisation representative.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg('Please enter a valid phone number (e.g. +263 7x xxx xxxx).');
      return;
    }

    setIsSubmitting(true);
    try {
      trackEvent('quote_start', {
        division: formData.division,
        product: formData.product,
      });

      const result = await submitLead(formData);

      trackEvent('quote_submit', {
        division: formData.division,
        product: formData.product,
        enquiryId: result.enquiryId,
      });

      setSubmissionSuccess({
        enquiryId: result.enquiryId,
        message: result.message,
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'Unable to submit enquiry. Please check your details or connect directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContinue = () => {
    openWhatsAppEnquiry({
      division: formData.division as any,
      product: formData.product || 'Custom Production Scope',
      organisationOrEvent: formData.organisation || formData.name,
      date: formData.eventDate,
      venue: `${formData.venue || ''} ${formData.city || ''}`.trim(),
      deliverables: formData.deliverables,
      sourcePage: formData.sourcePage,
      customMessage: `Ref: ${submissionSuccess?.enquiryId || 'New Enquiry'} - ${formData.message || ''}`,
    });
  };

  const currentContact = getContactForDivision(
    formData.division === 'integrated' ? 'group-general' : formData.division
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0e1118] border border-slate-800 rounded-xl overflow-hidden shadow-2xl my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#131722] border-b border-slate-800">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 font-semibold">
              Commercial Proposal & Booking Desk
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Plan Your Project with ASMG
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submissionSuccess ? (
            /* Success confirmation screen */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Enquiry Successfully Logged</h4>
              <p className="text-sm font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 py-1.5 px-4 rounded-full inline-block">
                Reference ID: {submissionSuccess.enquiryId}
              </p>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {submissionSuccess.message}
              </p>

              <div className="p-4 rounded-lg bg-[#131722] border border-slate-800 text-left max-w-md mx-auto text-xs text-slate-300 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Designated Lead:</span>
                  <span className="font-semibold text-white">{currentContact.contactName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Telephone:</span>
                  <span className="font-mono text-amber-400">{currentContact.displayPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Response SLA:</span>
                  <span>Within 4 Business Hours</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppContinue}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-emerald-950"
                >
                  <MessageSquare className="w-4 h-4" />
                  Continue on WhatsApp Directly
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Lead Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Division Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Select ASMG Division / Solution
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, division: 'all-schools-media' })}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      formData.division === 'all-schools-media'
                        ? 'border-blue-500 bg-blue-950/40 text-white font-semibold'
                        : 'border-slate-800 bg-[#131722] text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    All Schools Media
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, division: 'sports-express' })}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      formData.division === 'sports-express'
                        ? 'border-orange-500 bg-orange-950/40 text-white font-semibold'
                        : 'border-slate-800 bg-[#131722] text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    Sports Express
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, division: 'wildfive-pictures' })}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      formData.division === 'wildfive-pictures'
                        ? 'border-amber-500 bg-amber-950/40 text-white font-semibold'
                        : 'border-slate-800 bg-[#131722] text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    WildFive Pictures
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, division: '5th-floor-studio' })}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      formData.division === '5th-floor-studio'
                        ? 'border-slate-300 bg-slate-800 text-white font-semibold'
                        : 'border-slate-800 bg-[#131722] text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    The 5th Floor Studio
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, division: 'digital-marketing' })}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      formData.division === 'digital-marketing'
                        ? 'border-cyan-500 bg-cyan-950/40 text-white font-semibold'
                        : 'border-slate-800 bg-[#131722] text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    ASM Digital Marketing
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, division: 'integrated' })}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      formData.division === 'integrated'
                        ? 'border-purple-500 bg-purple-950/40 text-white font-semibold'
                        : 'border-slate-800 bg-[#131722] text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    ASMG Integrated (Multi-Div)
                  </button>
                </div>
              </div>

              {/* Name & Organisation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tendai Moyo"
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#131722] border border-slate-800 focus:border-amber-500 focus:outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">School / Organisation / Family</label>
                  <input
                    type="text"
                    value={formData.organisation || ''}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    placeholder="e.g. St. John's College / Chimedza Family"
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#131722] border border-slate-800 focus:border-amber-500 focus:outline-none text-white"
                  />
                </div>
              </div>

              {/* Contact Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">WhatsApp / Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+263 7x xxx xxxx"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-[#131722] border border-slate-800 focus:border-amber-500 focus:outline-none text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#131722] border border-slate-800 focus:border-amber-500 focus:outline-none text-white"
                  />
                </div>
              </div>

              {/* Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Anticipated Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type="date"
                      value={formData.eventDate || ''}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-[#131722] border border-slate-800 focus:border-amber-500 focus:outline-none text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Venue / City</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={formData.venue || ''}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      placeholder="e.g. Harare Sports Club / Wild Geese"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-[#131722] border border-slate-800 focus:border-amber-500 focus:outline-none text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Deliverables checklist */}
              <div>
                <label className="block text-xs text-slate-400 mb-2">Required Deliverables</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {DELIVERABLES_OPTIONS.map((item) => {
                    const isChecked = formData.deliverables?.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleDeliverableToggle(item)}
                        className={`px-3 py-2 rounded text-left text-xs flex items-center gap-2 border transition-all ${
                          isChecked
                            ? 'bg-amber-500/15 border-amber-500/60 text-amber-200'
                            : 'bg-[#131722] border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                            isChecked ? 'bg-amber-500 border-amber-500 text-black' : 'border-slate-600'
                          }`}
                        >
                          {isChecked && <span className="text-[10px] font-bold">✓</span>}
                        </span>
                        <span>{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-slate-400 mb-1">Additional Project Details</label>
                <textarea
                  rows={3}
                  value={formData.message || ''}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any special requirements, estimated guest count, or broadcast timeline..."
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#131722] border border-slate-800 focus:border-amber-500 focus:outline-none text-white resize-none"
                />
              </div>

              {/* Designated lead preview */}
              <div className="p-3 rounded-lg bg-[#131722] border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>
                  Direct Lead Contact: <strong className="text-white">{currentContact.contactName}</strong> ({currentContact.displayPhone})
                </span>
                <span className="font-mono text-amber-400">REQUEST_A_QUOTE</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors shadow-lg shadow-amber-950/50 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Registering Enquiry...'
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Submit Quotation Request
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
