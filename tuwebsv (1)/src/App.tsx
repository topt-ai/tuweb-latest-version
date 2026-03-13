import React from 'react';
const Home = React.lazy(() => import('./pages/Home'));
const SeoLocal = React.lazy(() => import('./pages/SeoLocal'));
const PaginasWeb = React.lazy(() => import('./pages/PaginasWeb'));
const GoogleMetaAds = React.lazy(() => import('./pages/GoogleMetaAds'));
const Nosotros = React.lazy(() => import('./pages/Nosotros'));
const Contacto = React.lazy(() => import('./pages/Contacto'));
const Politicas = React.lazy(() => import('./pages/Politicas'));

export default function App() {
  const path = window.location.pathname;
  if (path === '/seo-local') {
    return <React.Suspense fallback={<div style={{ background: '#F5F0E8', minHeight: '100vh' }} />}>
      <SeoLocal />
    </React.Suspense>;
  }
  if (path === '/paginas-web') {
    return <React.Suspense fallback={<div style={{ background: '#F5F0E8', minHeight: '100vh' }} />}>
      <PaginasWeb />
    </React.Suspense>;
  }
  if (path === '/google-meta-ads') {
    return <React.Suspense fallback={<div style={{ background: '#F5F0E8', minHeight: '100vh' }} />}>
      <GoogleMetaAds />
    </React.Suspense>;
  }
  if (path === '/nosotros') {
    return <React.Suspense fallback={<div style={{ background: '#F5F0E8', minHeight: '100vh' }} />}>
      <Nosotros />
    </React.Suspense>;
  }
  if (path === '/contacto') {
    return <React.Suspense fallback={<div style={{ background: '#F5F0E8', minHeight: '100vh' }} />}>
      <Contacto />
    </React.Suspense>;
  }
  if (path === '/politicas') {
    return <React.Suspense fallback={<div style={{ background: '#F5F0E8', minHeight: '100vh' }} />}>
      <Politicas />
    </React.Suspense>;
  }
  return <React.Suspense fallback={<div style={{ background: '#F5F0E8', minHeight: '100vh' }} />}>
    <Home />
  </React.Suspense>;
}
