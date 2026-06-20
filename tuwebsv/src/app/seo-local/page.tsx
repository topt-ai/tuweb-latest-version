import type { Metadata } from 'next';
import { buildMetadata, SITE_URL, serviceSchema, breadcrumbSchema } from '../../seo';
import JsonLd from '../../components/JsonLd';
import SeoLocal from '../../views/SeoLocal';

export const metadata: Metadata = buildMetadata({
  title: 'Mejor SEO Local en San Salvador | Aparecer en el Top 3 de Google Maps cerca de mí - TuWebSV',
  description:
    'Posicionamos tu negocio en el top 3 de Google Maps en San Salvador. SEO Local, Google Business Profile y estrategia de búsqueda local para negocios en El Salvador.',
  path: '/seo-local',
  ogTitle: 'SEO Local San Salvador | Posicionamiento en Google Maps | TuWebSV',
  ogDescription:
    'Posicionamos tu negocio en el top 3 de Google Maps en San Salvador. SEO Local para negocios en El Salvador.',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'SEO Local San Salvador',
            description: 'Posicionamiento en Google Maps para negocios locales en San Salvador y El Salvador.',
            url: `${SITE_URL}/seo-local`,
          }),
          breadcrumbSchema([
            { name: 'Inicio', url: `${SITE_URL}/` },
            { name: 'SEO Local San Salvador', url: `${SITE_URL}/seo-local` },
          ]),
        ]}
      />
      <SeoLocal />
    </>
  );
}
