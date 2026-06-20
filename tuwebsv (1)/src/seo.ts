import { useEffect } from 'react';

export const SITE_URL = 'https://tuwebsv.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

type JsonLd = Record<string, unknown>;

export type SeoConfig = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: JsonLd[];
};

function upsertMeta(key: 'name' | 'property', value: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${key}="${value}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(key, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeo(cfg: SeoConfig) {
  useEffect(() => {
    document.title = cfg.title;
    upsertMeta('name', 'description', cfg.description);
    upsertLink('canonical', cfg.canonical);
    upsertLink('alternate', cfg.canonical, 'es-SV');
    upsertLink('alternate', `${SITE_URL}/`, 'x-default');

    upsertMeta('property', 'og:title', cfg.ogTitle ?? cfg.title);
    upsertMeta('property', 'og:description', cfg.ogDescription ?? cfg.description);
    upsertMeta('property', 'og:url', cfg.canonical);
    upsertMeta('property', 'og:image', cfg.ogImage ?? DEFAULT_OG_IMAGE);
    upsertMeta('property', 'og:type', cfg.ogType ?? 'website');

    document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((n) => n.remove());
    for (const obj of cfg.jsonLd ?? []) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.dataset.seoJsonld = 'true';
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
    }
  }, [JSON.stringify(cfg)]);
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
