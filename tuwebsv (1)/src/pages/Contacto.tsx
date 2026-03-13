import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

export default function Contacto() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Set Title and Meta
  useEffect(() => {
    document.title = "Contacto | TuWebSV Agencia de Marketing San Salvador | hola@tuwebsv.com · +503 7201 8215";
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [calReady, setCalReady] = useState(false);
  const calRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCalReady(true); },
      { threshold: 0.1 }
    );
    if (calRef.current) observer.observe(calRef.current);
    return () => observer.disconnect();
  }, []);

  // Load Calendly script
  useEffect(() => {
    if (!calReady) return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [calReady]);

  return (
    <div className="min-h-screen text-[var(--text)] bg-[var(--bg)] font-sans selection:bg-[var(--terra)] selection:text-[var(--surface)]">
      
      {/* NAVBAR */}
      <nav 
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[960px] rounded-[50px] transition-all duration-400 flex items-center justify-between px-6 py-3 ${
          isScrolled 
            ? 'bg-[rgba(245,240,232,0.92)] backdrop-blur-[20px] border border-[rgba(26,26,24,0.15)] shadow-[0_4px_20px_rgba(26,26,24,0.08)]' 
            : 'bg-[rgba(245,240,232,0.15)] backdrop-blur-[8px] border border-[rgba(26,26,24,0.1)]'
        }`}
      >
        <a href="/" className="font-sans font-bold tracking-[0.08em] text-[var(--green)]">TUWEBSV</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-[15px]">
          <a href="/#inicio" className="hover:text-[var(--terra)] transition-colors">Inicio</a>
          <div className="relative group">
            <a href="/#servicios" className="flex items-center gap-1 hover:text-[var(--terra)] transition-colors py-2">Servicios</a>
            <div className="absolute top-[100%] left-[-20px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-3 px-2 min-w-[200px] border border-[rgba(26,26,24,0.05)] flex flex-col">
                <a href="/seo-local" className="font-sans text-[14px] text-[var(--text)] hover:bg-[#F5F5F5] hover:text-[var(--terra)] rounded-[8px] px-3 py-2 transition-colors">SEO Local (Google Maps)</a>
                <a href="/paginas-web" className="font-sans text-[14px] text-[var(--text)] hover:bg-[#F5F5F5] hover:text-[var(--terra)] rounded-[8px] px-3 py-2 transition-colors">Diseño de Páginas Web</a>
                <a href="/google-meta-ads" className="font-sans text-[14px] text-[var(--text)] hover:bg-[#F5F5F5] hover:text-[var(--terra)] rounded-[8px] px-3 py-2 transition-colors">Google & Meta Ads</a>
              </div>
            </div>
          </div>
          <a href="/nosotros" className="hover:text-[var(--terra)] transition-colors">Nosotros</a>
          <a href="/contacto" className="text-[var(--terra)] transition-colors">Contacto</a>
        </div>
        
        <div className="hidden md:block">
          <a href="/contacto" className="bg-[var(--green)] text-[#F5F0E8] rounded-full px-5 py-2.5 font-sans font-bold text-[14px] hover:bg-[#152e23] transition-colors">
            Consulta gratis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[var(--dark)]" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--bg)] flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <a href="/" className="font-sans font-bold tracking-[0.08em] text-[var(--green)]">TUWEBSV</a>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--dark)]">
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-sans font-medium">
            <a href="/#inicio" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
            <div className="flex flex-col gap-4">
              <a href="/#servicios" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a>
              <a href="/seo-local" className="text-[18px] text-[var(--muted)] pl-4 border-l-2 border-[rgba(26,26,24,0.1)]" onClick={() => setIsMobileMenuOpen(false)}>SEO Local</a>
              <a href="/paginas-web" className="text-[18px] text-[var(--muted)] pl-4 border-l-2 border-[rgba(26,26,24,0.1)]" onClick={() => setIsMobileMenuOpen(false)}>Páginas Web</a>
              <a href="/google-meta-ads" className="text-[18px] text-[var(--muted)] pl-4 border-l-2 border-[rgba(26,26,24,0.1)]" onClick={() => setIsMobileMenuOpen(false)}>Google & Meta Ads</a>
            </div>
            <a href="/nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
            <a href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--terra)]">Contacto</a>
          </div>
        </div>
      )}

      {/* SECTION A: HERO */}
      <section className="relative h-[40vh] min-h-[360px] w-full flex flex-col justify-center overflow-hidden pt-20 border-b border-[rgba(26,26,24,0.08)]">
        <div className="relative z-10 w-[84%] max-w-[1200px] mx-auto text-center md:text-left">
          <h1 className="sr-only">Contacto TuWebSV San Salvador</h1>
          <h2 className="sr-only">Agenda una consulta gratis con nuestra agencia de marketing</h2>
          <h2 className="sr-only">Agencia de marketing digital en San Salvador, El Salvador</h2>
          
          <div className="font-mono text-[11px] text-[var(--muted)] mb-2">
            Inicio / Contacto
          </div>
          <div className="font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-4">
            // Hablemos
          </div>
          <h2 className="font-sans font-bold text-[clamp(40px,5vw,64px)] leading-[1.0] tracking-[-0.03em] text-[var(--text)]">
            ¿Listo para empezar?
          </h2>
          <h2 className="font-serif italic text-[clamp(40px,5vw,64px)] leading-[1.0] tracking-[-0.03em] text-[var(--green)] mb-6">
            Agenda una consulta gratis.
          </h2>
          <p className="font-sans font-light text-[18px] text-[var(--muted)] max-w-[480px] mx-auto md:mx-0 leading-[1.65]">
            30 minutos. Sin costo. Te decimos exactamente qué necesita tu negocio y si podemos ayudarte.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-[100px] px-[8%] max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 max-w-[1200px] mx-auto items-start">
          
          {/* Left Column - Calendly */}
          <div className="w-full lg:w-[60%] bg-white rounded-[16px] shadow-[0_8px_40px_rgba(26,26,24,0.06)] overflow-hidden border border-[rgba(26,26,24,0.08)]" ref={calRef}>
            {calReady && (
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/tommy-tuwebsv/30min?hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '700px' }} 
              ></div>
            )}
          </div>

          {/* Right Column - Contact Card */}
          <div className="w-full lg:w-[40%] bg-white rounded-[16px] shadow-[0_8px_40px_rgba(26,26,24,0.06)] p-10 lg:sticky top-[120px] border border-[rgba(26,26,24,0.08)]">
            <div className="font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-8">
              // Información de contacto
            </div>

            <div className="flex flex-col gap-6">
              {/* Item 1 */}
              <div>
                <div className="font-mono text-[10px] text-[var(--muted)] mb-1 uppercase tracking-wider">WHATSAPP</div>
                <a href="https://wa.me/50372018215" target="_blank" rel="noreferrer" className="block font-sans font-medium text-[16px] text-[var(--dark)] hover:text-[var(--terra)] transition-colors">
                  +503 7201 8215
                </a>
              </div>
              <div className="w-full h-[1px] bg-[rgba(0,0,0,0.08)]"></div>

              {/* Item 2 */}
              <div>
                <div className="font-mono text-[10px] text-[var(--muted)] mb-1 uppercase tracking-wider">EMAIL</div>
                <a href="mailto:hola@tuwebsv.com" className="block font-sans font-medium text-[16px] text-[var(--dark)] hover:text-[var(--terra)] transition-colors">
                  hola@tuwebsv.com
                </a>
              </div>
              <div className="w-full h-[1px] bg-[rgba(0,0,0,0.08)]"></div>

              {/* Item 3 */}
              <div>
                <div className="font-mono text-[10px] text-[var(--muted)] mb-1 uppercase tracking-wider">HORARIO</div>
                <div className="font-sans font-medium text-[16px] text-[var(--dark)]">
                  Lun a Sáb, 8:00 a 18:00
                </div>
              </div>
              <div className="w-full h-[1px] bg-[rgba(0,0,0,0.08)]"></div>

              {/* Item 4 */}
              <div>
                <div className="font-mono text-[10px] text-[var(--muted)] mb-1 uppercase tracking-wider">UBICACIÓN</div>
                <div className="font-sans font-medium text-[16px] text-[var(--dark)]">
                  San Salvador, El Salvador
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8">
              <p className="font-sans font-light text-[14px] text-[var(--muted)] mb-4">
                ¿Prefieres escribir antes de agendar? Escríbenos por WhatsApp y respondemos el mismo día.
              </p>
              <a 
                href="https://wa.me/50372018215" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center bg-[var(--terra)] text-[#F5F0E8] rounded-full px-6 py-3 font-sans font-bold text-[15px] hover:bg-[#a65022] transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--dark)] pt-[80px] pb-[40px] px-[8%] mt-auto">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-[48px]">
            {/* Col 1 */}
            <div>
              <div className="font-sans font-bold tracking-[0.08em] text-[var(--green)] mb-4">TUWEBSV</div>
              <p className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] mb-4">
                Marketing local que funciona.
              </p>
              <address className="not-italic font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]">
                TuWebSV<br />
                San Salvador, El Salvador<br />
                +503 7201 8215<br />
                <a href="mailto:hola@tuwebsv.com" className="hover:text-[#F5F0E8] transition-colors">hola@tuwebsv.com</a>
              </address>
            </div>
            
            {/* Col 2 */}
            <div>
              <h4 className="font-sans font-medium text-[16px] text-[var(--bg)] mb-6">Servicios</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="/seo-local" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">SEO Local</a></li>
                <li><a href="/google-meta-ads" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Google & Meta Ads</a></li>
                <li><a href="/paginas-web" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Páginas Web</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-sans font-medium text-[16px] text-[var(--bg)] mb-6">Empresa</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="/nosotros" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Nosotros</a></li>
                <li><a href="/contacto" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Contacto</a></li>
                <li><a href="/politicas" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Políticas</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-sans font-medium text-[16px] text-[var(--bg)] mb-6">Contacto</h4>
              <ul className="flex flex-col gap-3">
                <li className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]"><a href="mailto:hola@tuwebsv.com" className="hover:text-[#F5F0E8] transition-colors">hola@tuwebsv.com</a></li>
                <li className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]"><a href="https://wa.me/50372018215" target="_blank" rel="noreferrer" className="hover:text-[#F5F0E8] transition-colors">+503 7201 8215</a></li>
                <li className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]">Lun–Sáb 8:00–18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[rgba(245,240,232,0.08)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]">
              © 2026 TuWebSV. Todos los derechos reservados.
            </div>
            <div className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]">
              Creada con orgullo en El Salvador 🇸🇻
            </div>
          </div>
        </div>
      </footer>

      

    </div>
  );
}
