import { useEffect, useRef, useState } from 'react';
import { Plus, MessageCircle, Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Nosotros() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const tommyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Set Title and Meta
  useEffect(() => {
    document.title = "Sobre TuWebSV | Agencia de Marketing Digital en San Salvador - Conoce quién está detrás de tu estrategia";
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero stagger
      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll('.hero-anim');
        gsap.from(elements, { 
          y: 50, 
          opacity: 0, 
          stagger: 0.12, 
          ease: 'power3.out', 
          duration: 0.8,
          delay: 0.2
        });
      }

      // General scroll reveals
      const revealElements = document.querySelectorAll('.scroll-reveal');
      revealElements.forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

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
          <a href="/nosotros" className="text-[var(--terra)] transition-colors">Nosotros</a>
          <a href="/contacto" className="hover:text-[var(--terra)] transition-colors">Contacto</a>
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
            <a href="/nosotros" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--terra)]">Nosotros</a>
            <a href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          </div>
        </div>
      )}

      {/* SECTION A: HERO */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[400px] w-full flex items-center overflow-hidden pt-20 border-b border-[rgba(26,26,24,0.08)]">
        {/* Decorative Blob */}
        <svg className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] fill-[var(--terra)] opacity-[0.04] pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18,97.7,-2.7C97.4,12.6,90.2,27.7,80.6,40.4C71,53.1,59,63.4,45.4,71.4C31.8,79.4,16.6,85.1,0.8,83.7C-15,82.3,-30,73.8,-43.3,64.7C-56.6,55.6,-68.2,45.9,-76.4,33.5C-84.6,21.1,-89.4,6,-87.6,-8.4C-85.8,-22.8,-77.4,-36.5,-66.6,-47.2C-55.8,-57.9,-42.6,-65.6,-29.4,-72.1C-16.2,-78.6,-3,-83.9,10.6,-84.9C24.2,-85.9,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>

        <div className="relative z-10 w-[84%] max-w-[1200px] mx-auto">
          <h1 className="sr-only">Agencia de Marketing Digital en San Salvador</h1>
          <div className="hero-anim font-mono text-[11px] text-[var(--muted)] mb-2">
            Inicio / Nosotros
          </div>
          <div className="hero-anim font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-4">
            // La agencia
          </div>
          <h2 className="hero-anim font-sans font-bold text-[clamp(44px,6vw,72px)] leading-[1.0] tracking-[-0.03em] text-[var(--text)]">
            Una persona.
          </h2>
          <h2 className="hero-anim font-serif italic text-[clamp(44px,6vw,72px)] leading-[1.0] tracking-[-0.03em] text-[var(--green)] mb-6">
            Toda la atención.
          </h2>
          <p className="hero-anim font-sans font-light text-[18px] text-[var(--muted)] max-w-[520px] leading-[1.65]">
            Sin cuentas que se pasan entre ejecutivos. Sin juntas que no llevan a nada. Hablas conmigo, yo hago el trabajo.
          </p>
        </div>
      </section>

      {/* B. TOMMY SECTION */}
      <section ref={tommyRef} className="py-[120px] px-[8%] max-w-[1440px] mx-auto">
        <h2 className="sr-only">Marketing digital para negocios locales en El Salvador</h2>
        <div className="flex flex-col md:flex-row gap-16 items-start max-w-[1200px] mx-auto">
          {/* Left Column - Photo */}
          <div className="w-full md:w-5/12 scroll-reveal">
            <div className="relative w-full aspect-[4/5] rounded-[12px] overflow-hidden shadow-[0_8px_40px_rgba(26,26,24,0.08)]">
              <img 
                src="/tommy2.0.webp" 
                alt="Tommy, fundador de TuWebSV" 
                className="w-full h-full object-cover object-[15%_center]"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Right Column - Copy */}
          <div className="w-full md:w-7/12 flex flex-col justify-center h-full scroll-reveal md:pt-8">
            <div className="font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6">
              // El que hace el trabajo
            </div>
            
            <h2 className="font-sans font-bold text-[clamp(32px,4vw,52px)] leading-[1.1] text-[var(--text)] mb-2">
              Soy Tommy.
            </h2>
            <div className="font-serif italic text-[clamp(32px,4vw,52px)] leading-[1.1] text-[var(--text)] mb-8">
              Tú hablas conmigo. Yo hago el trabajo.
            </div>
            
            <div className="flex flex-col gap-5 mb-10">
              <p className="font-sans font-light text-[17px] text-[var(--muted)] leading-[1.7]">
                Arranqué TuWebSV porque quería ayudar a negocios locales de forma directa, sin fantasía ni tecnicismos. La mayoría de agencias te presentan soluciones extensas que terminan agregándole más estrés al dueño del negocio. Lo he visto de primera mano.
              </p>
              <p className="font-sans font-light text-[17px] text-[var(--muted)] leading-[1.7]">
                Me gusta trabajar bien, sin complicaciones innecesarias. La mayoría de resultados se logran en la mitad del tiempo que cualquier agencia propone.
              </p>
              <p className="font-sans font-light text-[17px] text-[var(--muted)] leading-[1.7]">
                Y algo más: no voy a prometerte cosas que no puedo cumplir. Antes de arrancar, evalúo si somos buen fit. Si no lo somos, te lo digo directo y te doy mis recomendaciones sin costo. Sin presión, sin cobrar por gusto.
              </p>
            </div>
            
            <ul className="flex flex-col gap-3">
              <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[var(--green)] pt-1 leading-none">✓</span>
                <span>Sin tecnicismos ni reportes que nadie entiende</span>
              </li>
              <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[var(--green)] pt-1 leading-none">✓</span>
                <span>Sin contratos largos. Si funciona, te quedas solo</span>
              </li>
              <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[var(--green)] pt-1 leading-none">✓</span>
                <span>Te respondo yo. Siempre</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* C. VALUES / APPROACH SECTION */}
      <section ref={valuesRef} className="bg-[var(--dark)] py-[120px] px-[8%]">
        <h2 className="sr-only">SEO Local, Google Ads y Diseño Web en San Salvador</h2>
        <div className="max-w-[1440px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6">
            // Cómo trabajamos
          </div>
          <h2 className="scroll-reveal text-[clamp(36px,4vw,52px)] leading-[1.1] mb-16">
            <span className="font-sans font-bold text-[#F5F0E8]">Sin agencia grande. </span>
            <span className="font-serif italic text-white md:inline block mt-1 md:mt-0">Sin excusas grandes.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="scroll-reveal bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-8 md:p-10">
              <div className="font-mono text-[11px] text-[var(--terra)] mb-4">01</div>
              <h3 className="font-sans font-bold text-[18px] text-[#F5F0E8] mb-3">Directo</h3>
              <p className="font-sans font-light text-[15px] text-[rgba(245,240,232,0.65)] leading-[1.6]">
                Sin intermediarios. La persona que te vende el servicio es la misma que lo ejecuta. Nada se pierde en el camino.
              </p>
            </div>
            
            <div className="scroll-reveal bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-8 md:p-10">
              <div className="font-mono text-[11px] text-[var(--terra)] mb-4">02</div>
              <h3 className="font-sans font-bold text-[18px] text-[#F5F0E8] mb-3">Honesto</h3>
              <p className="font-sans font-light text-[15px] text-[rgba(245,240,232,0.65)] leading-[1.6]">
                Si no somos el fit correcto para tu negocio, te lo digo antes de cobrar. Prefiero perderte como cliente que prometerte algo que no puedo cumplir.
              </p>
            </div>
            
            <div className="scroll-reveal bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-8 md:p-10">
              <div className="font-mono text-[11px] text-[var(--terra)] mb-4">03</div>
              <h3 className="font-sans font-bold text-[18px] text-[#F5F0E8] mb-3">Enfocado en resultados</h3>
              <p className="font-sans font-light text-[15px] text-[rgba(245,240,232,0.65)] leading-[1.6]">
                No cobro por horas ni por reportes bonitos. Cobro porque los resultados justifican lo que pagas. Si no hay resultados, hay un problema que resolver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D. NUMBERS STRIP */}
      <section className="bg-[rgba(245,240,232,0.6)] py-[48px] px-[8%] border-y border-[rgba(26,26,24,0.08)]">
        <h2 className="sr-only">Por qué trabajar con TuWebSV</h2>
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
          <div className="scroll-reveal flex flex-col items-center">
            <span className="font-sans font-bold text-[40px] text-[var(--text)] tracking-[-0.03em] leading-none mb-2">90 días</span>
            <span className="font-sans font-light text-[15px] text-[var(--muted)]">/ Para ver resultados en SEO Local</span>
          </div>
          <div className="scroll-reveal flex flex-col items-center md:border-x border-[rgba(26,26,24,0.08)]">
            <span className="font-sans font-bold text-[40px] text-[var(--text)] tracking-[-0.03em] leading-none mb-2">48 hrs</span>
            <span className="font-sans font-light text-[15px] text-[var(--muted)]">/ Para tener campañas de ads corriendo</span>
          </div>
          <div className="scroll-reveal flex flex-col items-center">
            <span className="font-sans font-bold text-[40px] text-[var(--text)] tracking-[-0.03em] leading-none mb-2">1 semana</span>
            <span className="font-sans font-light text-[15px] text-[var(--muted)]">/ Para tener tu página web en vivo</span>
          </div>
        </div>
      </section>

      {/* E. CTA SECTION */}
      <section ref={ctaRef} className="bg-[#F5F0E8] py-[140px] px-[8%] text-center">
        <div className="max-w-[800px] mx-auto scroll-reveal">
          <div className="font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6">
            // ¿Trabajamos juntos?
          </div>
          <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.1] mb-6">
            <span className="font-sans font-bold text-[var(--text)]">Si crees que somos buen fit, </span>
            <span className="font-serif italic text-[var(--green)]">hablemos.</span>
          </h2>
          <p className="font-sans font-light text-[17px] text-[var(--muted)] max-w-[480px] mx-auto leading-[1.65] mb-10">
            Una consulta de 30 minutos sin costo. Te digo exactamente qué necesita tu negocio y si puedo ayudarte.
          </p>
          <a href="/contacto" className="inline-block bg-[var(--terra)] text-[#F5F0E8] rounded-[50px] px-8 py-3.5 font-sans font-bold text-[15px] hover:bg-[#a65022] transition-colors">
            Agendar consulta gratis
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--dark)] pt-[80px] pb-[40px] px-[8%]">
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
