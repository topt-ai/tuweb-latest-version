import type { Metadata } from 'next';
import { buildMetadata, SITE_URL, breadcrumbSchema } from '../../seo';
import JsonLd from '../../components/JsonLd';
import Nosotros from '../../views/Nosotros';

export const metadata: Metadata = buildMetadata({
  title: 'Sobre TuWebSV | Agencia de Marketing en San Salvador, El Salvador',
  description:
    'Conoce a Tommy Acevedo, fundador de TuWebSV. Agencia de marketing en San Salvador especializada en SEO Local, Google Ads y diseño web para negocios locales.',
  path: '/nosotros',
  ogTitle: 'Sobre TuWebSV | Agencia de Marketing en San Salvador',
  ogDescription: 'Conoce a Tommy Acevedo, fundador de TuWebSV. Marketing para negocios locales en El Salvador.',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Tommy Acevedo',
            jobTitle: 'Fundador',
            worksFor: { '@id': `${SITE_URL}/#organization` },
            address: { '@type': 'PostalAddress', addressLocality: 'San Salvador', addressCountry: 'SV' },
          },
          breadcrumbSchema([
            { name: 'Inicio', url: `${SITE_URL}/` },
            { name: 'Nosotros', url: `${SITE_URL}/nosotros` },
          ]),
        ]}
      />
      <Nosotros />
    </>
  );
}
