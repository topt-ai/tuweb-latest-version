import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_URL, ORG_SCHEMA } from '../seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Agencia de Marketing Digital en San Salvador | SEO Local, Páginas Web y Google & Meta Ads - TuWebSV',
    template: '%s',
  },
  description:
    '¿Buscas una agencia de marketing digital en San Salvador? En TuWebSV combinamos diseño de páginas web, SEO Local y publicidad en Google & Meta Ads para hacer crecer tu negocio.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href={FONTS_HREF} as="style" />
        <link rel="stylesheet" href={FONTS_HREF} />
        {/* Global Organization schema — present on every route. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <meta name="geo.region" content="SV-SS" />
        <meta name="geo.placename" content="San Salvador" />
        <meta name="geo.position" content="13.6929;-89.2182" />
        <meta name="ICBM" content="13.6929, -89.2182" />
      </head>
      <body>
        {children}
        <Script src="/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
