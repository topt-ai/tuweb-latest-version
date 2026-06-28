import type { Metadata } from 'next';
import { buildMetadata } from '../seo';
import Home from '../views/Home';

export const metadata: Metadata = buildMetadata({
  title: 'Mejor Agencia de Marketing en San Salvador | SEO Local, Páginas Web y Google & Meta Ads - TuWebSV',
  description:
    '¿Buscas una agencia de marketing en San Salvador? En TuWebSV combinamos diseño de páginas web, SEO Local y publicidad en Google & Meta Ads para hacer crecer tu negocio.',
  path: '/',
  ogTitle: 'TuWebSV — Sitios web y SEO local en El Salvador',
  ogDescription: 'Visible o invisible. No hay intermedios.',
});

export default function Page() {
  // Organization schema is rendered globally in layout.tsx.
  return <Home />;
}
