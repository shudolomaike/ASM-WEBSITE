import { trackEvent } from './analytics';
import { getContactForDivision } from '../config/contacts';
import { DivisionKey } from '../types';

export interface WhatsAppEnquiryParams {
  division: DivisionKey | 'group' | 'integrated' | 'equipment';
  product?: string;
  organisationOrEvent?: string;
  date?: string;
  venue?: string;
  deliverables?: string[];
  sourcePage?: string;
  customMessage?: string;
}

/**
 * Builds the official ASMG WhatsApp message according to Section 13 specification
 */
export function generateWhatsAppMessage(params: WhatsAppEnquiryParams): string {
  const divisionLabel = params.division === 'integrated' 
    ? 'ASMG Integrated Solution (Multi-Division)' 
    : params.division.toUpperCase();

  const productLabel = params.product || 'General Production & Coverage';
  const org = params.organisationOrEvent || 'Not specified yet';
  const dateStr = params.date || 'To be confirmed';
  const venueStr = params.venue || 'Harare / Zimbabwe';
  const delivs = params.deliverables && params.deliverables.length > 0
    ? params.deliverables.join(', ')
    : 'Full package discussion';
  const src = params.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : '/');

  let text = `Hello ASMG.\n\nI am enquiring about:\n${divisionLabel} / ${productLabel}\n\nOrganisation / Event:\n${org}\n\nDate:\n${dateStr}\n\nVenue:\n${venueStr}\n\nRequired deliverables:\n${delivs}\n\nSource:\n${src}`;

  if (params.customMessage) {
    text += `\n\nNotes:\n${params.customMessage}`;
  }

  return text;
}

/**
 * Generates the wa.me click-to-chat URL with analytics tracking
 */
export function openWhatsAppEnquiry(params: WhatsAppEnquiryParams): void {
  const contact = getContactForDivision(params.division);
  const rawPhone = contact.phoneE164.replace(/\D/g, ''); // E.g., '263784770918'
  const message = generateWhatsAppMessage(params);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${rawPhone}?text=${encoded}`;

  // Fire typed analytics event
  trackEvent('whatsapp_click', {
    division: params.division,
    product: params.product,
    page: params.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : '/'),
    contactName: contact.contactName,
    phone: contact.phoneE164,
  });

  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
