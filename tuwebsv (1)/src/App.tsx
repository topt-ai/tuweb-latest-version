import Home from './pages/Home';
import SeoLocal from './pages/SeoLocal';
import PaginasWeb from './pages/PaginasWeb';
import GoogleMetaAds from './pages/GoogleMetaAds';
import Nosotros from './pages/Nosotros';

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
  return <Home />;
}
