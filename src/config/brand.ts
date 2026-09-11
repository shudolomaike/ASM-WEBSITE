import { BrandFlagItem, DivisionKey } from '../types';

export interface DivisionMeta {
  key: DivisionKey;
  number: string;
  name: string;
  shortName: string;
  tagline: string;
  territory: string;
  emotionalTerritory: string;
  accentColor: string;
  themeClass: string;
  bgDark: string;
  description: string;
  leadBuyer: string;
  contactLead: string;
  heroImage: string;
}

export const PARENT_BRAND = {
  name: 'All Schools Media Group',
  shortName: 'ASMG',
  country: 'Zimbabwe',
  headquarters: 'Harare, Zimbabwe',
  masterPromise: 'Because every moment is worth capturing.',
  mission: 'To provide a unified, cinematic media ecosystem capable of capturing, broadcasting, preserving and amplifying moments of significance across education, athletics, life celebrations, personal craft and commercial growth.',
  flagshipShowreelDuration: '03:24',
  heroHeadline: 'BECAUSE EVERY MOMENT IS WORTH CAPTURING.',
  heroSubtitle: 'A five-division media ecosystem engineered in Zimbabwe. From stadium-scale live sports broadcasting and prestigious school speech days to intimate cinema-grade weddings, fine-art portraiture and digital growth engines.',
};

export const DIVISIONS: Record<DivisionKey, DivisionMeta> = {
  'all-schools-media': {
    key: 'all-schools-media',
    number: '01',
    name: 'All Schools Media',
    shortName: 'ASM',
    tagline: 'Trust → Achievement → Legacy',
    territory: 'School Media, Institutional Documentation, School Photography, School Film, Ceremonies & Institutional Livestreaming',
    emotionalTerritory: 'Trust → Achievement → Legacy',
    accentColor: '#2563eb', // Clean institutional royal blue
    themeClass: 'theme-all-schools',
    bgDark: '#080d1a',
    description: 'Comprehensive media architecture for leading educational institutions. Capturing speech days, sports festivals, student portraits, historic archives and multi-camera live broadcasts with uncompromised dignity.',
    leadBuyer: 'Headmasters, School Boards, Marketing Directors & Alumni Associations',
    contactLead: 'Mr Gid (+263 784 770 918)',
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop',
  },
  'sports-express': {
    key: 'sports-express',
    number: '02',
    name: 'Sports Express by ASMG',
    shortName: 'Sports Express',
    tagline: 'Energy → Pride → Access → Performance',
    territory: 'Sports Broadcasting, Live Multi-Cam Sports, Sports Photography, Commentary, Highlight Packages, Broadcast Graphics & Sponsor Media',
    emotionalTerritory: 'Energy → Pride → Access → Performance',
    accentColor: '#f97316', // High-energy broadcast amber/orange
    themeClass: 'theme-sports-express',
    bgDark: '#120b06',
    description: 'Broadcast-grade live sports production for Zimbabwean schools, leagues and derbies. Complete with dynamic on-screen scoreboards, live play-by-play commentary, instant replays and high-octane photography.',
    leadBuyer: 'Sports Directors, Tournament Organisers, Athletic Unions & Corporate Sponsors',
    contactLead: 'Mr Gid (+263 784 770 918)',
    heroImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop',
  },
  'wildfive-pictures': {
    key: 'wildfive-pictures',
    number: '03',
    name: 'WildFive Pictures',
    shortName: 'WildFive',
    tagline: 'Love → Dignity → Memory → Story',
    territory: 'Weddings, Roora / Lobola Ceremonies, Funerals, Memorials, Anniversaries & Life-Event Storytelling',
    emotionalTerritory: 'Love → Dignity → Memory → Story',
    accentColor: '#d97706', // Champagne gold / warm luxury copper
    themeClass: 'theme-wildfive',
    bgDark: '#0e0b07',
    description: 'Cinematic documentary filmmaking for milestone moments of the human journey. From the sacred warmth of traditional Roora and luxury weddings to the solemn grace of memorials, told with deep reverence.',
    leadBuyer: 'Brides & Grooms, Families, Diaspora Organisers & Cultural Planners',
    contactLead: 'Mr Ruze (+263 775 537 194 / wild05pictures@gmail.com)',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  },
  '5th-floor-studio': {
    key: '5th-floor-studio',
    number: '04',
    name: 'The 5th Floor Studio',
    shortName: '5th Floor',
    tagline: 'Confidence → Expression → Craft → Identity',
    territory: 'Portrait Sessions, Graduation, Corporate Headshots, Product Photography, Podcast Recording, Creator Production & Studio Rental',
    emotionalTerritory: 'Confidence → Expression → Craft → Identity',
    accentColor: '#e2e8f0', // Clean fashion/editorial monochrome silver
    themeClass: 'theme-5th-floor',
    bgDark: '#0a0a0c',
    description: 'A dedicated Harare light studio and creator lab. Controlled continuous and strobe lighting, podcast multi-microphone acoustically treated sets, graduation couture editorial shoots and corporate personal branding.',
    leadBuyer: 'Graduates, C-Suite Executives, Creators, Podcasters, Fashion Designers & Agencies',
    contactLead: 'Mr CJ (+263 712 827 038)',
    heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop',
  },
  'digital-marketing': {
    key: 'digital-marketing',
    number: '05',
    name: 'ASM Digital Marketing',
    shortName: 'ASM Digital',
    tagline: 'Visibility → Relevance → Growth → Performance',
    territory: 'Content Production, Social Media Management, High-Converting Websites, SEO, Google Business Optimization, Email & Digital Advertising',
    emotionalTerritory: 'Visibility → Relevance → Growth → Performance',
    accentColor: '#06b6d4', // Cyan/electric digital growth accent
    themeClass: 'theme-digital-marketing',
    bgDark: '#060e14',
    description: 'Turning raw media assets into commercial growth. Systematic social distribution, targeted ad campaigns, local SEO, website design and brand narrative architecture for ambitious businesses in Zimbabwe and beyond.',
    leadBuyer: 'SME Owners, School Enrolment Teams, Corporate Brands & Professional Practices',
    contactLead: 'Mr Ruze (+263 775 537 194)',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
  },
};

export const BRAND_FLAGS: BrandFlagItem[] = [
  {
    id: 'flag-a',
    code: 'FLAG-A',
    title: '5th Floor Studio Endorsement Architecture',
    description: 'Supplied physical logo artwork says "Member of Wild 5 Pictures", whereas current ASMG website architecture treats 5th Floor as a distinct Group Division 04.',
    currentStatus: 'PENDING_MANAGEMENT_CONFIRMATION',
    workingRule: 'Rendered as ASMG Division 04 with an explicit secondary badge: "Studio Space & Creative Lab — Affiliate of Wild 5 Pictures". Awaiting final sign-off from executive committee.',
    mitigation: 'Configuration value is decoupled in src/config/brand.ts so switching to direct subsidiary or full standalone division requires a single config toggle.',
  },
  {
    id: 'flag-b',
    code: 'FLAG-B',
    title: 'Digital Marketing Division Inclusion',
    description: 'Older archival print collateral only outlined four divisions. Modern commercial operating direction incorporates ASM Digital Marketing as Division 05.',
    currentStatus: 'RESOLVED_BY_SPEC',
    workingRule: 'Division 05 (ASM Digital Marketing) is fully integrated into the live navigation, quotation matrix, and portfolio showcase with designated lead Mr Ruze.',
    mitigation: 'Marked in repository synchronisation register as current active working architecture.',
  },
  {
    id: 'flag-c',
    code: 'FLAG-C',
    title: 'Group Parent vs Division Naming Disambiguation',
    description: 'Clarity rule between parent organization and school division.',
    currentStatus: 'ENFORCED_IN_CODE',
    workingRule: 'Parent entity is strictly "All Schools Media Group" (ASMG). School division is "All Schools Media" (Division 01). No ambiguous "All Schools" shorthand.',
    mitigation: 'Enforced via TypeScript constants across all UI headers, breadcrumbs, and schema meta.',
  },
  {
    id: 'flag-d',
    code: 'FLAG-D',
    title: 'Historic Phone Numbers & Routing Deprecation',
    description: 'Old physical posters and archived collateral contain obsolete or unrouted numbers.',
    currentStatus: 'ENFORCED_IN_CODE',
    workingRule: 'Strictly zero scattered phone numbers. Every call-to-action reads exclusively from the centralized approved registry (Mr Gid, Mr Ruze, Mr CJ, Mr Chinehasha).',
    mitigation: 'Automated linter and schema checker prevent hardcoded telephone strings outside src/config/contacts.ts.',
  },
  {
    id: 'flag-e',
    code: 'FLAG-E',
    title: 'Pricing Status & Rate-Card Governance',
    description: 'Old rate sheets must not be treated as current active pricing.',
    currentStatus: 'ENFORCED_IN_CODE',
    workingRule: 'Unless an item has pricingStatus: "APPROVED_CURRENT", the UI must strictly output "REQUEST_A_QUOTE" and direct the user to the custom proposal engine.',
    mitigation: 'All product cards implement the Request a Quote gate with structured scope inputs.',
  },
];

export const GROUP_CAPABILITIES = [
  {
    id: 'cap-photo',
    title: 'Photography',
    subtitle: 'Institutional, Sports, Fine Art & Commercial',
    description: 'From high-speed sports action and formal institutional portraits to documentary wedding memories and precision studio lighting.',
    iconName: 'Camera',
    tag: 'Stills & Archival',
  },
  {
    id: 'cap-film',
    title: 'Film & Video Production',
    subtitle: 'Cinematic Storytelling & Brand Documentaries',
    description: '4K cinema cameras, anamorphic lenses, controlled audio capture, and master color grading that turns events into enduring films.',
    iconName: 'Film',
    tag: 'Cinema 4K',
  },
  {
    id: 'cap-live',
    title: 'Livestream & Broadcast',
    subtitle: 'Multi-Camera OB & Satellite Relays',
    description: 'Live vision mixing, slow-motion replays, wireless camera links, graphics overlays, and dual-redundant stream broadcasting.',
    iconName: 'Radio',
    tag: 'Live OB Unit',
  },
  {
    id: 'cap-studio',
    title: 'Studio Production',
    subtitle: 'Controlled Soundstages & Creator Labs',
    description: 'Acoustically treated podcast sets, motorized backdrops, continuous daylight fixtures, and private dressing rooms at The 5th Floor.',
    iconName: 'Layers',
    tag: 'The 5th Floor',
  },
  {
    id: 'cap-digital',
    title: 'Digital Content & Marketing',
    subtitle: 'Growth Systems & Campaign Engines',
    description: 'Social distribution strategies, performance ad funnels, search engine optimization, and custom conversion portals for enterprise growth.',
    iconName: 'TrendingUp',
    tag: 'Performance',
  },
  {
    id: 'cap-integrated',
    title: 'Integrated Event Media',
    subtitle: 'Full-Spectrum Group Solutions',
    description: 'A unified single-proposal package unifying live streaming, photography, highlight showreels, social amplification and client galleries.',
    iconName: 'Sparkles',
    tag: 'ASMG Unified',
  },
];

export const ASMG_PROCESS = [
  {
    step: '01',
    name: 'DISCOVER',
    title: 'Brief & Scope Alignment',
    summary: 'We evaluate your venue, audience, key milestones, technical constraints and commercial or emotional objectives.',
  },
  {
    step: '02',
    name: 'PLAN',
    title: 'Run-of-Show & Technical Logistics',
    summary: 'Detailed camera plots, multi-camera signal routing, lighting design, commentary briefs and audio manifests are locked.',
  },
  {
    step: '03',
    name: 'PRODUCE',
    title: 'Precision Live Execution',
    summary: 'Our crew deploys on-site in Harare or nationwide with broadcast vans, cinema rigs, and dedicated sound engineers.',
  },
  {
    step: '04',
    name: 'DELIVER',
    title: 'Master Edits & Pixieset Delivery',
    summary: 'Same-day live stream archiving, rapid highlight reels, cinematic full cuts and password-protected client photo galleries.',
  },
  {
    step: '05',
    name: 'AMPLIFY',
    title: 'Distribution & Institutional Legacy',
    summary: 'Repurposing hero footage for school recruitment, sponsor reports, social media reels and enduring family keepsakes.',
  },
];
