import { SocialAccount } from '../types';

/**
 * CONNECTED ACCOUNTS REGISTRY (Section 11)
 * Centralised source of truth for all public and internal operational links.
 * Internal Notion links have public: false as mandated.
 */
export const CONNECTED_ACCOUNTS: SocialAccount[] = [
  // Google Maps
  {
    id: 'gmaps-all-schools',
    division: 'all-schools-media',
    platform: 'google-maps',
    label: 'All Schools Media (Google Maps Location)',
    url: 'https://share.google/ltABqpUh27ZjmbYe1',
    enabled: true,
    public: true,
    purpose: 'Physical office & studio directions',
  },
  {
    id: 'gmaps-wildfive',
    division: 'wildfive-pictures',
    platform: 'google-maps',
    label: 'WildFive Pictures (Google Maps Location)',
    url: 'https://share.google/vyU8q7rsUTRy1hRlM',
    enabled: true,
    public: true,
    purpose: 'Client consultation lounge',
  },

  // YouTube
  {
    id: 'yt-sports-express',
    division: 'sports-express',
    platform: 'youtube',
    label: 'Sports Express YouTube Broadcasts',
    handle: '@allschoolsmediasolutions8981',
    url: 'https://youtube.com/@allschoolsmediasolutions8981?si=EAH0dNBsFQEIbf8p',
    enabled: true,
    public: true,
    purpose: 'Live sports match streams, replays and tournament highlights',
  },
  {
    id: 'yt-wildfive',
    division: 'wildfive-pictures',
    platform: 'youtube',
    label: 'WildFive Pictures Films',
    handle: '@wild05pictureswild05pictures',
    url: 'https://youtube.com/@wild05pictureswild05pictures?si=xE1IGFgDO8RmWZkm',
    enabled: true,
    public: true,
    purpose: 'Cinematic wedding films, documentaries and memorials',
  },

  // Instagram
  {
    id: 'ig-sports-express',
    division: 'sports-express',
    platform: 'instagram',
    label: 'Sports Express on Instagram',
    handle: '@asm_sports_express',
    url: 'https://www.instagram.com/asm_sports_express',
    enabled: true,
    public: true,
    purpose: 'Action reels, tournament photography & live scorecards',
  },
  {
    id: 'ig-wildfive',
    division: 'wildfive-pictures',
    platform: 'instagram',
    label: 'WildFive Pictures on Instagram',
    handle: '@wild5pictures.official',
    url: 'https://www.instagram.com/wild5pictures.official',
    enabled: true,
    public: true,
    purpose: 'Editorial wedding portraiture, love stories & life celebrations',
  },
  {
    id: 'ig-5th-floor',
    division: '5th-floor-studio',
    platform: 'instagram',
    label: 'The 5th Floor Studio on Instagram',
    handle: '@the.5thfloorstudio',
    url: 'https://www.instagram.com/the.5thfloorstudio',
    enabled: true,
    public: true,
    purpose: 'Studio portraits, graduation editorials and creator sets',
  },

  // Facebook
  {
    id: 'fb-sports-express',
    division: 'sports-express',
    platform: 'facebook',
    label: 'Sports Express Facebook Community',
    url: 'https://www.facebook.com/share/17h1AVFHUq/',
    enabled: true,
    public: true,
    purpose: 'Live match simulcast & school sports community',
  },
  {
    id: 'fb-wildfive',
    division: 'wildfive-pictures',
    platform: 'facebook',
    label: 'WildFive Pictures Official Facebook',
    url: 'https://www.facebook.com/Wild5pictures',
    enabled: true,
    public: true,
    purpose: 'Wedding film trailers & family testimonies',
  },
  {
    id: 'fb-wildfive-shared',
    division: 'wildfive-pictures',
    platform: 'facebook',
    label: 'WildFive Community Hub',
    url: 'https://www.facebook.com/share/1F1GHzbyGG/',
    enabled: true,
    public: true,
    purpose: 'Secondary shared life-event community',
  },
  {
    id: 'fb-livestream',
    division: 'all-schools-media',
    platform: 'facebook',
    label: 'ASMG Live Broadcast Relay',
    url: 'https://www.facebook.com/share/1DHxXCaGbt/',
    enabled: true,
    public: true,
    purpose: 'Secondary livestreaming relay for school prize days and ceremonies',
  },

  // TikTok
  {
    id: 'tt-all-schools',
    division: 'all-schools-media',
    platform: 'tiktok',
    label: 'All Schools Media on TikTok',
    handle: '@all.schools.media',
    url: 'https://www.tiktok.com/@all.schools.media',
    enabled: true,
    public: true,
    purpose: 'School culture, choir performances, student achievements',
  },
  {
    id: 'tt-wildfive',
    division: 'wildfive-pictures',
    platform: 'tiktok',
    label: 'WildFive on TikTok',
    handle: '@wild5picturesofficial',
    url: 'https://www.tiktok.com/@wild5picturesofficial',
    enabled: true,
    public: true,
    purpose: 'Wedding entrance dances, emotional vows, roora highlights',
  },
  {
    id: 'tt-5th-floor',
    division: '5th-floor-studio',
    platform: 'tiktok',
    label: 'The 5th Floor Studio on TikTok',
    handle: '@the.5thfloor.stud',
    url: 'https://www.tiktok.com/@the.5thfloor.stud',
    enabled: true,
    public: true,
    purpose: 'Behind the scenes lighting setups, posing tips & creator b-roll',
  },

  // Pixieset Client Galleries
  {
    id: 'px-wildfive-wedding',
    division: 'wildfive-pictures',
    platform: 'pixieset',
    label: 'Jackson & Jessica Wedding Gallery',
    url: 'https://wildfive.pixieset.com/jacksonandjessica/',
    enabled: true,
    public: true,
    purpose: 'Verified Pixieset high-resolution wedding collection',
  },
  {
    id: 'px-asm-prizegiving',
    division: 'all-schools-media',
    platform: 'pixieset',
    label: 'Prize Giving Day Institutional Portfolio',
    url: 'https://allschoolamedia.pixieset.com/prizegivingdayportfolio/',
    enabled: true,
    public: true,
    purpose: 'Verified Pixieset school speech & prize giving portfolio',
  },

  // Internal Notion Gateways (strictly marked public: false)
  {
    id: 'notion-operations',
    division: 'group',
    platform: 'notion',
    label: 'ASMG Operations Hub',
    url: 'https://app.notion.com/p/ASMG-Operations-Hub-397c62f3b7f4817cba60c234c9b31423?source=copy_link',
    enabled: true,
    public: false, // Internal only
    purpose: 'Internal group production logistics, gear manifests and scheduling',
  },
  {
    id: 'notion-sales',
    division: 'group',
    platform: 'notion',
    label: 'ASMG Sales Department',
    url: 'https://app.notion.com/p/Sales-Department-397c62f3b7f481598b11d275542dd9b7?source=copy_link',
    enabled: true,
    public: false, // Internal only
    purpose: 'Internal sales pipeline, proposal drafts and client booking sheets',
  },
];

export function getPublicSocialAccounts(division?: string): SocialAccount[] {
  return CONNECTED_ACCOUNTS.filter(
    (acc) => acc.public && acc.enabled && (!division || acc.division === division || acc.division === 'group')
  );
}
