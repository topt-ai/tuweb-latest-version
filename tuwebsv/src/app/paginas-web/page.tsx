import type { Metadata } from 'next';
import { buildMetadata, SITE_URL, serviceSchema, breadcrumbSchema } from '../../seo';
import JsonLd from '../../components/JsonLd';
import PaginasWeb from '../../views/PaginasWeb';

export const metadata: Metadata = buildMetadata({
  title: 'Mejor Diseño de Páginas Web en San Salvador | Sitios Web Profesionales y Rápidos cerca de mí - TuWebSV',
  description:
    'Diseño y desarrollo de páginas web para negocios en San Salvador. Sitios rápidos, limpios y construidos para convertir visitas en clientes reales.',
  path: '/paginas-web',
  ogTitle: 'Diseño de Páginas Web San Salvador | TuWebSV',
  ogDescription:
    'Sitios web rápidos, limpios y construidos para convertir visitas en clientes reales. Diseño web para negocios en El Salvador.',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Diseño de Páginas Web San Salvador',
            description: 'Diseño y desarrollo de sitios web para negocios en San Salvador y El Salvador.',
            url: `${SITE_URL}/paginas-web`,
          }),
          breadcrumbSchema([
            { name: 'Inicio', url: `${SITE_URL}/` },
            { name: 'Páginas Web San Salvador', url: `${SITE_URL}/paginas-web` },
          ]),
        ]}
      />
      <PaginasWeb />
    </>
  );
}
