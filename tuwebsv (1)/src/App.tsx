import React from 'react';
import Home from './pages/Home';
import SeoLocal from './pages/SeoLocal';
import PaginasWeb from './pages/PaginasWeb';
import GoogleMetaAds from './pages/GoogleMetaAds';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Politicas from './pages/Politicas';

export default function App() {
  const path = window.location.pathname;
  if (path === '/seo-local') {
    return <SeoLocal />;
  }
  if (path === '/paginas-web') {
    return <PaginasWeb />;
  }
  if (path === '/google-meta-ads') {
    return <GoogleMetaAds />;
  }
  if (path === '/nosotros') {
    return <Nosotros />;
  }
  if (path === '/contacto') {
    return <Contacto />;
  }
  if (path === '/politicas') {
    return <Politicas />;
  }
  return <Home />;
}
