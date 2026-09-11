import { ContactRoute, DivisionKey } from '../types';

/**
 * SINGLE APPROVED CONTACT REGISTRY (Flag D Compliance)
 * Never scatter arbitrary or historical phone numbers across components.
 */
export const APPROVED_CONTACTS: Record<string, ContactRoute> = {
  'all-schools-media': {
    division: 'all-schools-media',
    contactName: 'Mr Gid',
    phoneE164: '+263784770918',
    displayPhone: '+263 784 770 918',
    whatsapp: true,
    enabled: true,
    notes: 'Primary director for institutional school media, speeches, and ceremonies.',
  },
  'sports-express': {
    division: 'sports-express',
    contactName: 'Mr Gid',
    phoneE164: '+263784770918',
    displayPhone: '+263 784 770 918',
    whatsapp: true,
    enabled: true,
    notes: 'Lead for sports broadcasting, multi-camera OB, commentary, and match coverage.',
  },
  'wildfive-pictures': {
    division: 'wildfive-pictures',
    contactName: 'Mr Ruze',
    phoneE164: '+263775537194',
    displayPhone: '+263 775 537 194',
    email: 'wild05pictures@gmail.com',
    whatsapp: true,
    enabled: true,
    notes: 'Lead filmmaker for weddings, roora, memorials, and life event storytelling.',
  },
  'digital-marketing': {
    division: 'digital-marketing',
    contactName: 'Mr Ruze',
    phoneE164: '+263775537194',
    displayPhone: '+263 775 537 194',
    whatsapp: true,
    enabled: true,
    notes: 'Lead for digital growth, content creation, social media management, and web assets.',
  },
  '5th-floor-studio': {
    division: '5th-floor-studio',
    contactName: 'Mr CJ',
    phoneE164: '+263712827038',
    displayPhone: '+263 712 827 038',
    whatsapp: true,
    enabled: true,
    notes: 'Studio manager for portraiture, graduations, headshots, podcast and studio hire.',
  },
  'equipment': {
    division: 'equipment',
    productCategory: 'Production Gear & Equipment Rental',
    contactName: 'Mr Chinehasha',
    phoneE164: '+263789485973',
    displayPhone: '+263 789 485 973',
    whatsapp: true,
    enabled: true,
    notes: 'Fleet & equipment hire manager for cameras, lenses, lighting, and wireless broadcast kits.',
  },
  'group-general': {
    division: 'group',
    contactName: 'ASMG Client Desk',
    phoneE164: '+263784770918',
    displayPhone: '+263 784 770 918',
    email: 'wild05pictures@gmail.com',
    whatsapp: true,
    enabled: true,
    notes: 'General enquiries and integrated multi-division proposals.',
  },
};

export function getContactForDivision(divisionKey?: DivisionKey | string): ContactRoute {
  if (!divisionKey) return APPROVED_CONTACTS['group-general'];
  return APPROVED_CONTACTS[divisionKey] || APPROVED_CONTACTS['group-general'];
}
