export type DivisionKey =
  | 'all-schools-media'
  | 'sports-express'
  | 'wildfive-pictures'
  | '5th-floor-studio'
  | 'digital-marketing';

export type EvidenceStatus =
  | 'VERIFIED'
  | 'INFERRED'
  | 'RECOMMENDED'
  | 'NEEDS_VERIFICATION'
  | 'PROPOSED';

export type PricingStatus =
  | 'APPROVED_CURRENT'
  | 'REQUEST_A_QUOTE'
  | 'NEEDS_VERIFICATION';

export type PublicationStatus =
  | 'DRAFT'
  | 'REVIEW'
  | 'APPROVED'
  | 'PUBLISHED'
  | 'ARCHIVED';

export type LiveState =
  | 'LIVE'
  | 'UPCOMING'
  | 'REPLAY'
  | 'VIDEO'
  | 'UNAVAILABLE';

export interface SocialAccount {
  id: string;
  division?: DivisionKey | 'group';
  platform:
    | 'google-maps'
    | 'youtube'
    | 'instagram'
    | 'facebook'
    | 'tiktok'
    | 'pixieset'
    | 'notion';
  label: string;
  handle?: string;
  url: string;
  enabled: boolean;
  public: boolean;
  purpose?: string;
}

export interface ContactRoute {
  division?: DivisionKey | 'equipment' | 'group';
  productCategory?: string;
  contactName: string;
  phoneE164: string;
  displayPhone: string;
  email?: string;
  whatsapp: boolean;
  enabled: boolean;
  notes?: string;
  role?: string;
  location?: string;
}

export interface LeadInput {
  division: DivisionKey | 'integrated';
  product?: string;
  service?: string;
  name: string;
  organisation?: string;
  phone: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  venue?: string;
  city?: string;
  budgetRange?: string;
  deliverables?: string[];
  message?: string;
  marketingConsent?: boolean;
  sourcePage: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  referrer?: string;
}

export interface LeadRecord extends LeadInput {
  id: string;
  createdAt: string;
  status: 'PENDING' | 'NOTION_SYNCED' | 'DISPATCHED_WHATSAPP' | 'CONTACTED';
  notionPageId?: string;
}

export interface LiveItem {
  id: string;
  source: 'youtube' | 'facebook' | 'manual';
  state: LiveState;
  title: string;
  subtitle?: string;
  url: string;
  embedUrl?: string;
  thumbnail: string;
  scheduledStart?: string;
  startedAt?: string;
  endedAt?: string;
  division: DivisionKey;
  viewCount?: string;
  tournamentOrEvent?: string;
}

export interface Gallery {
  id: string;
  slug: string;
  division: DivisionKey;
  title: string;
  eventType?: string;
  coverImage: string;
  photosCount?: number;
  photoCount?: number;
  date?: string;
  location?: string;
  summary?: string;
  description?: string;
  client?: string;
  externalUrl: string;
  pixiesetUrl?: string;
  isPasswordProtected?: boolean;
  proofStatus: EvidenceStatus;
  publicationStatus: PublicationStatus;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  division: DivisionKey;
  divisionTitle: string;
  projectType: string;
  client: string;
  heroMedia: string;
  videoUrl?: string;
  duration?: string;
  year: string;
  location: string;
  verifiedProof: string;
  summary: string;
  deliverables: string[];
  results?: string[];
  tags: string[];
  proofStatus: EvidenceStatus;
  featured: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  division: DivisionKey;
  productFamily: string;
  oneSentenceDefinition: string;
  customerProblem: string;
  desiredOutcome: string;
  primaryBuyer: string;
  buyingSituation: string;
  coreDeliverables: string[];
  optionalDeliverables: string[];
  addOns: string[];
  pricingStatus: PricingStatus;
  priceNote: string;
  reasonsToBelieve: string[];
  faqs: { question: string; answer: string }[];
  whatsappOpener: string;
  heroImage: string;
  category?: string;
  summary?: string;
  turnAround?: string;
  deliverables?: string[];
  price?: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'Cameras' | 'Lenses' | 'Audio & Wireless' | 'Lighting' | 'Broadcast & Switching' | 'Support & Gimbals';
  model: string;
  specs: string;
  availability: 'Available for Hire' | 'Production Fleet Only';
  image: string;
}

export interface BrandFlagItem {
  id: 'flag-a' | 'flag-b' | 'flag-c' | 'flag-d' | 'flag-e';
  code: string;
  title: string;
  description: string;
  currentStatus: 'RESOLVED_BY_SPEC' | 'PENDING_MANAGEMENT_CONFIRMATION' | 'ENFORCED_IN_CODE';
  workingRule: string;
  mitigation: string;
}

export type AnalyticsEvent =
  | 'page_view'
  | 'division_view'
  | 'product_view'
  | 'case_study_view'
  | 'gallery_open'
  | 'video_play'
  | 'live_watch'
  | 'social_click'
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click'
  | 'quote_start'
  | 'quote_submit'
  | 'booking_start'
  | 'booking_submit';
