import React from 'react';
import Home from './pages/Home';
import SeoLocal from './pages/SeoLocal';
import PaginasWeb from './pages/PaginasWeb';
import GoogleMetaAds from './pages/GoogleMetaAds';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Politicas from './pages/Politicas';
import ChatWidget from './components/ChatWidget';

export default function App() {
  const path = window.location.pathname;
  let Content;
  
  if (path === '/seo-local') {
    Content = <SeoLocal />;
  } else if (path === '/paginas-web') {
    Content = <PaginasWeb />;
  } else if (path === '/google-meta-ads') {
    Content = <GoogleMetaAds />;
  } else if (path === '/nosotros') {
    Content = <Nosotros />;
  } else if (path === '/contacto') {
    Content = <Contacto />;
  } else if (path === '/politicas') {
    Content = <Politicas />;
  } else {
    Content = <Home />;
  }

  return (
    <>
      <ChatWidget />
      {Content}
    </>
  );
}
