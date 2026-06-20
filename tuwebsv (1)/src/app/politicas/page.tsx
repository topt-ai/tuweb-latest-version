import type { Metadata } from 'next';
import { buildMetadata } from '../../seo';
import Politicas from '../../views/Politicas';

export const metadata: Metadata = buildMetadata({
  title: 'Política de Privacidad y Términos de Servicio | TuWebSV',
  description: 'Política de privacidad y términos de servicio de TuWebSV.',
  path: '/politicas',
  noindex: true,
});

export default function Page() {
  return <Politicas />;
}
