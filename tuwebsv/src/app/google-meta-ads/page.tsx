import type { Metadata } from 'next';
import { buildMetadata, SITE_URL, serviceSchema, breadcrumbSchema } from '../../seo';
import JsonLd from '../../components/JsonLd';
import GoogleMetaAds from '../../views/GoogleMetaAds';

export const metadata: Metadata = buildMetadata({
  title: 'Mejor Agencia de Google Ads y Meta Ads en San Salvador | Publicidad Digital cerca de mí - TuWebSV',
  description:
    'Gestión de campañas publicitarias en Google Ads, Facebook e Instagram para negocios locales en San Salvador y El Salvador. Cada dólar invertido trabaja al máximo.',
  path: '/google-meta-ads',
  ogTitle: 'Google Ads y Meta Ads San Salvador | TuWebSV',
  ogDescription:
    'Campañas de publicidad en Google, Facebook e Instagram gestionadas para negocios locales en El Salvador.',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Google Ads y Meta Ads San Salvador',
            description: 'Gestión de campañas publicitarias en Google, Facebook e Instagram para negocios locales en El Salvador.',
            url: `${SITE_URL}/google-meta-ads`,
          }),
          breadcrumbSchema([
            { name: 'Inicio', url: `${SITE_URL}/` },
            { name: 'Google & Meta Ads San Salvador', url: `${SITE_URL}/google-meta-ads` },
          ]),
        ]}
      />
      <GoogleMetaAds />
    </>
  );
}
