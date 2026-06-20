import type { Metadata } from 'next';
import { buildMetadata, SITE_URL, breadcrumbSchema } from '../../seo';
import JsonLd from '../../components/JsonLd';
import Contacto from '../../views/Contacto';

export const metadata: Metadata = buildMetadata({
  title: 'Contacto | TuWebSV Agencia de Marketing Digital en San Salvador',
  description:
    'Agenda una consulta gratis con TuWebSV. Agencia de marketing digital en San Salvador, El Salvador. WhatsApp: +503 7201 8215 · Email: hola@tuwebsv.com',
  path: '/contacto',
  ogTitle: 'Contacto | TuWebSV Agencia de Marketing San Salvador',
  ogDescription:
    'Agenda una consulta gratis. WhatsApp: +503 7201 8215 · Email: hola@tuwebsv.com · Lunes a Sábado 8:00 a 18:00',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Inicio', url: `${SITE_URL}/` },
            { name: 'Contacto', url: `${SITE_URL}/contacto` },
          ]),
        ]}
      />
      <Contacto />
    </>
  );
}
