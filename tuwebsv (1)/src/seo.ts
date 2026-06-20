import type { Metadata } from 'next';

export const SITE_URL = 'https://tuwebsv.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

type JsonLd = Record<string, unknown>;

export type SeoConfig = {
  title: string;
  description: string;
  /** Path portion of the canonical URL, e.g. "/seo-local" or "/". */
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
};

/**
 * Build a Next.js Metadata object from a per-route SEO config. Server-side,
 * so titles/canonical/OG are present in the initial HTML (and seen by social
 * scrapers, unlike the old client-side approach).
 */
export function buildMetadata(cfg: SeoConfig): Metadata {
  const canonical = `${SITE_URL}${cfg.path}`;
  return {
    title: cfg.title,
    description: cfg.description,
    alternates: {
      canonical,
      languages: {
        'es-SV': canonical,
        'x-default': `${SITE_URL}/`,
      },
    },
    openGraph: {
      title: cfg.ogTitle ?? cfg.title,
      description: cfg.ogDescription ?? cfg.description,
      url: canonical,
      siteName: 'TuWebSV',
      locale: 'es_SV',
      type: 'website',
      images: [{ url: cfg.ogImage ?? DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    ...(cfg.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}


const GEO = { '@type': 'GeoCoordinates', latitude: 13.6929, longitude: -89.2182 } as const;
const ADDRESS = {
  '@type': 'PostalAddress',
  addressLocality: 'San Salvador',
  addressRegion: 'SS',
  addressCountry: 'SV',
} as const;
const SAME_AS = ['https://www.google.com/maps?cid=15945637076347588966'];

export const ORG_SCHEMA: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  additionalType: 'https://schema.org/MarketingAgency',
  '@id': `${SITE_URL}/#organization`,
  name: 'TuWebSV',
  url: SITE_URL,
  telephone: '+50372018215',
  email: 'hola@tuwebsv.com',
  priceRange: '$$',
  description:
    'Agencia de marketing digital en San Salvador especializada en SEO Local, Google Ads, Meta Ads y diseño de páginas web para negocios locales en El Salvador.',
  address: ADDRESS,
  geo: GEO,
  sameAs: SAME_AS,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.png` },
  image: `${SITE_URL}/favicon.png`,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  areaServed: { '@type': 'City', name: 'San Salvador' },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+50372018215',
      email: 'hola@tuwebsv.com',
      contactType: 'customer service',
      areaServed: 'SV',
      availableLanguage: ['Spanish', 'English'],
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de TuWebSV',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Local', description: 'Posicionamiento en Google Maps para negocios locales en San Salvador' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads', description: 'Gestión de campañas publicitarias en Google para negocios en El Salvador' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads', description: 'Gestión de campañas en Facebook e Instagram para negocios locales' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño de Páginas Web', description: 'Diseño y desarrollo de sitios web para negocios en San Salvador' } },
    ],
  },
};

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'City', name: 'San Salvador' },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
