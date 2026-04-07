import { useEffect, useRef, useState } from 'react';
import { Plus, MessageCircle, Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PaginasWeb() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const guaranteeRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Set Title and Meta
  useEffect(() => {
    document.title = "Diseño de Páginas Web San Salvador | Si buscas diseño web cerca de ti o páginas web para negocios cerca de mí - TuWebSV es el lugar";
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

      if (processRef.current) {
        const steps = processRef.current.querySelectorAll('.process-step');
        gsap.from(steps, {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 70%',
          }
        });
      }

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

  const [calReady, setCalReady] = useState(false);
  const calRef = useRef<HTMLDivElement>(null);

  // Calendly Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCalReady(true); },
      { threshold: 0.1 }
    );
    if (calRef.current) observer.observe(calRef.current);
    return () => observer.disconnect();
  }, []);

  // Calendly
  useEffect(() => {
    if (!calReady) return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
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
              <div className="bg-white rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-3 px-2 min-w-[180px] border border-[rgba(26,26,24,0.05)] flex flex-col">
                <a href="/seo-local" className="font-sans text-[14px] text-[var(--text)] hover:bg-[#F5F5F5] hover:text-[var(--terra)] rounded-[8px] px-3 py-2 transition-colors">SEO Local (Google Maps)</a>
                <a href="/paginas-web" className="font-sans text-[14px] text-[var(--text)] hover:bg-[#F5F5F5] hover:text-[var(--terra)] rounded-[8px] px-3 py-2 transition-colors">Diseño de Páginas Web</a>
              </div>
            </div>
          </div>
          <a href="/nosotros" className="hover:text-[var(--terra)] transition-colors">Nosotros</a>
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
            </div>
            <a href="/nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
            <a href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          </div>
        </div>
      )}

      {/* SECTION A: HERO */}
      <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden">
        {/* Decorative Blob */}
        <svg className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] fill-[var(--green)] opacity-[0.06] pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18,97.7,-2.7C97.4,12.6,90.2,27.7,80.6,40.4C71,53.1,59,63.4,45.4,71.4C31.8,79.4,16.6,85.1,0.8,83.7C-15,82.3,-30,73.8,-43.3,64.7C-56.6,55.6,-68.2,45.9,-76.4,33.5C-84.6,21.1,-89.4,6,-87.6,-8.4C-85.8,-22.8,-77.4,-36.5,-66.6,-47.2C-55.8,-57.9,-42.6,-65.6,-29.4,-72.1C-16.2,-78.6,-3,-83.9,10.6,-84.9C24.2,-85.9,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>

        <div className="absolute top-[45%] -translate-y-1/2 left-[8%] z-10 w-[84%] max-w-[1200px]">
          <div className="hero-anim font-mono text-[11px] text-[var(--muted)] mb-2">
            Inicio / Servicios / Páginas Web
          </div>
          <h1 className="hero-anim font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-4">
            Diseño de Páginas Web San Salvador
          </h1>
          <h2 className="hero-anim font-sans font-bold text-[clamp(44px,6vw,72px)] leading-[1.0] tracking-[-0.03em] text-[var(--text)]">
            Una página web que no te trae clientes
          </h2>
          <h2 className="hero-anim font-serif italic text-[clamp(44px,6vw,72px)] leading-[1.0] tracking-[-0.03em] text-[var(--green)] mb-6">
            no es un activo. Es un gasto.
          </h2>
          <p className="hero-anim font-sans font-light text-[18px] text-[var(--muted)] max-w-[540px] leading-[1.65] mb-6">
            Diseñamos sitios rápidos, claros y construidos para convertir visitas en contactos reales. Sin templates genéricos. Sin código que nadie puede tocar después.
          </p>

          <div className="hero-anim flex flex-wrap items-center gap-4 mb-8 font-mono text-[11px] text-[var(--muted)] pt-2 pb-2">
            <span>Demo en 24 horas</span>
            <span>&middot;</span>
            <span>Sitio completo en 1 semana</span>
            <span>&middot;</span>
            <span>SEO incluido</span>
          </div>

          <div className="hero-anim flex flex-wrap items-center gap-6">
            <a href="/contacto" className="bg-[var(--terra)] text-[#F5F0E8] rounded-[50px] px-8 py-3.5 font-sans font-bold hover:bg-[#a65022] transition-colors">
              Ver demo gratis
            </a>
            <a href="#proceso" className="font-sans font-medium text-[var(--text)] hover:underline underline-offset-4">
              Ver cómo funciona &darr;
            </a>
          </div>
        </div>

        {/* B. TICKER */}
        <div className="absolute bottom-0 left-0 w-full bg-[var(--dark)] text-[#F5F0E8] h-[44px] overflow-hidden flex items-center z-10">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center font-sans font-medium text-[12px] uppercase tracking-[0.1em]">
                <span className="mx-4">SEO LOCAL</span><span className="text-[var(--terra)]">&middot;</span>
                <span className="mx-4">GOOGLE ADS</span><span className="text-[var(--terra)]">&middot;</span>
                <span className="mx-4">FACEBOOK ADS</span><span className="text-[var(--terra)]">&middot;</span>
                <span className="mx-4">INSTAGRAM ADS</span><span className="text-[var(--terra)]">&middot;</span>
                <span className="mx-4">PÁGINAS WEB</span><span className="text-[var(--terra)]">&middot;</span>
                <span className="mx-4">POSICIONAMIENTO LOCAL</span><span className="text-[var(--terra)]">&middot;</span>
                <span className="mx-4">CONSULTA GRATIS</span><span className="text-[var(--terra)]">&middot;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. BEFORE / AFTER COMPARISON */}
      <section ref={comparisonRef} className="w-full">
        {/* Integrating an SEO H2 header visually hidden but present for structure, or used nicely */}
        <h2 className="sr-only">Páginas web para negocios locales en El Salvador</h2>
        <div className="flex flex-col md:flex-row min-h-[300px] border-y border-[rgba(26,26,24,0.08)]">
          {/* Left Panel */}
          <div className="flex-1 bg-[#FDF5F0] p-10 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[rgba(26,26,24,0.08)]">
            <h3 className="font-sans font-bold text-[16px] text-[#C0392B] mb-8 uppercase tracking-[0.05em]">
              Sin página web
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="font-sans font-light text-[16px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[#C0392B] font-bold mt-[-1px]">×</span>
                <span>No apareces en Google cuando te buscan por nombre</span>
              </li>
              <li className="font-sans font-light text-[16px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[#C0392B] font-bold mt-[-1px]">×</span>
                <span>Pierdes credibilidad frente a competidores que sí tienen sitio</span>
              </li>
              <li className="font-sans font-light text-[16px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[#C0392B] font-bold mt-[-1px]">×</span>
                <span>Dependes solo de redes sociales que cambian sus algoritmos</span>
              </li>
            </ul>
          </div>
          {/* Right Panel */}
          <div className="flex-1 bg-[#F0F5F2] p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-sans font-bold text-[16px] text-[var(--green)] mb-8 uppercase tracking-[0.05em]">
              Con tu página web
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="font-sans font-light text-[16px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[var(--green)] font-bold mt-[-1px]">✓</span>
                <span>Presencia profesional disponible las 24 horas</span>
              </li>
              <li className="font-sans font-light text-[16px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[var(--green)] font-bold mt-[-1px]">✓</span>
                <span>Apareces en búsquedas de Google en tu zona</span>
              </li>
              <li className="font-sans font-light text-[16px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[var(--green)] font-bold mt-[-1px]">✓</span>
                <span>Cada visita tiene una oportunidad real de convertirse en cliente</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* D. WHAT WE BUILD */}
      <section ref={whatWeDoRef} className="py-[120px] px-[8%] max-w-[1440px] mx-auto">
        <div className="scroll-reveal font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6">
          // Lo que incluye
        </div>
        <h2 className="scroll-reveal font-sans font-bold text-[clamp(36px,4vw,52px)] leading-[1.1] text-[var(--text)] mb-4">
          Sitios web que generan clientes
        </h2>
        <p className="scroll-reveal font-sans font-light text-[17px] text-[var(--muted)] max-w-[600px] leading-[1.65] mb-16">
          Cada sitio que construimos tiene un solo objetivo: que el visitante se convierta en contacto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="scroll-reveal bg-white rounded-[16px] shadow-[0_2px_20px_rgba(26,26,24,0.04)] p-8 border border-[rgba(26,26,24,0.05)]">
            <h3 className="font-sans font-bold text-[18px] text-[var(--text)] mb-3">Diseño limpio y profesional</h3>
            <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.6]">
              Sin templates que todo el mundo usa. Tu sitio se ve como tu negocio, no como una plantilla de internet.
            </p>
          </div>
          <div className="scroll-reveal bg-white rounded-[16px] shadow-[0_2px_20px_rgba(26,26,24,0.04)] p-8 border border-[rgba(26,26,24,0.05)]">
            <h3 className="font-sans font-bold text-[18px] text-[var(--text)] mb-3">Rápido en celular y computadora</h3>
            <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.6]">
              El 70% de tus visitantes llegan desde el celular. Tu sitio carga rápido y se ve bien en cualquier pantalla.
            </p>
          </div>
          <div className="scroll-reveal bg-white rounded-[16px] shadow-[0_2px_20px_rgba(26,26,24,0.04)] p-8 border border-[rgba(26,26,24,0.05)]">
            <h3 className="font-sans font-bold text-[18px] text-[var(--text)] mb-3">SEO listo desde el inicio</h3>
            <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.6]">
              El código está construido para que Google lo entienda. No es un add-on, es parte de cómo lo construimos.
            </p>
          </div>
          <div className="scroll-reveal bg-white rounded-[16px] shadow-[0_2px_20px_rgba(26,26,24,0.04)] p-8 border border-[rgba(26,26,24,0.05)]">
            <h3 className="font-sans font-bold text-[18px] text-[var(--text)] mb-3">Botón de WhatsApp integrado</h3>
            <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.6]">
              El contacto más directo para tus clientes, integrado desde el primer día. Un clic y ya están hablando contigo.
            </p>
          </div>
        </div>
      </section>

      {/* E. PROCESS */}
      <section id="proceso" ref={processRef} className="py-[120px] px-[8%] border-t border-[rgba(26,26,24,0.08)] max-w-[1440px] mx-auto bg-[var(--surface)]">
        <h2 className="sr-only">Diseño web profesional en San Salvador</h2>
        <div className="font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6 opacity-100">
          // El proceso
        </div>
        <h2 className="scroll-reveal text-[clamp(36px,4vw,52px)] leading-[1.1] mb-20">
          <span className="font-sans font-bold text-[var(--text)]">Tu sitio listo </span>
          <span className="font-serif italic text-[var(--green)]">en una semana.</span>
        </h2>

        <div className="relative flex flex-col md:flex-row gap-12 md:gap-6">
          <div className="hidden md:block absolute top-[10px] left-0 w-full border-t border-dashed border-[var(--terra)] opacity-40 z-0"></div>
          
          {[
            { num: '01', title: 'Consulta', desc: 'Entendemos tu negocio, tus clientes, y qué necesitas que haga tu sitio.' },
            { num: '02', title: 'Demo en 24h', desc: 'Te mostramos una primera versión real de tu sitio al día siguiente.' },
            { num: '03', title: 'Ajustes', desc: 'Hacemos los cambios que necesites hasta que quede exactamente como quieres.' },
            { num: '04', title: 'Publicación', desc: 'Tu sitio en vivo, con dominio, hosting y todo configurado.' }
          ].map((step, idx) => (
            <div key={idx} className="process-step relative z-10 md:w-1/4">
              <div className="font-mono text-[11px] text-[var(--terra)] bg-[var(--surface)] inline-block pr-4 mb-4">
                {step.num}
              </div>
              <h3 className="font-sans font-bold text-[20px] text-[var(--text)] mb-3">{step.title}</h3>
              <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.6]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* F. GUARANTEE STRIP */}
      <section ref={guaranteeRef} className="bg-[var(--terra)] py-[48px] px-[8%] text-center border-y border-[rgba(26,26,24,0.08)]">
        <div className="max-w-[800px] mx-auto scroll-reveal">
          <h2 className="font-sans font-bold text-[28px] text-[#F5F0E8] leading-[1.3] mb-3">
            Demo en 24 horas. Sitio completo en menos de una semana.
          </h2>
          <p className="font-sans font-light text-[16px] text-[rgba(245,240,232,0.8)] mb-8">
            Si no te convence la demo, no pagas nada.
          </p>
          <a href="/contacto" className="inline-block bg-[#F5F0E8] text-[var(--dark)] rounded-[50px] px-8 py-3 font-sans font-bold hover:bg-white transition-colors">
            Ver mi demo gratis
          </a>
        </div>
      </section>

      {/* G. TESTIMONIALS */}
      <section className="py-[120px] px-[8%] max-w-[1240px] mx-auto border-b border-[rgba(26,26,24,0.08)]">
        <h2 className="sr-only">Páginas web rápidas y optimizadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {[
            {
              quote: "Experiencia excelente. El resultado superó mis expectativas: una página moderna y funcional. Me sigue acompañando en el posicionamiento y hoy tengo mucha más visibilidad.",
              name: "Melissa R.",
              role: "Ortodoncista · San Salvador"
            },
            {
              quote: "La comunicación fue constante y clara durante todo el proceso, y cumplió con los plazos sin problema. Sin duda, recomiendo sus servicios.",
              name: "Ivania P.",
              role: "Emprendedora"
            }
          ].map((test, idx) => (
            <div key={idx} className="scroll-reveal bg-white border border-[rgba(26,26,24,0.08)] shadow-[0_4px_30px_rgba(26,26,24,0.03)] rounded-[16px] p-8 flex flex-col justify-between">
              <p className="font-serif italic text-[18px] text-[var(--text)] leading-[1.5] mb-8">"{test.quote}"</p>
              <div>
                <div className="font-sans font-bold text-[15px] text-[var(--text)] mb-1">{test.name}</div>
                <div className="font-sans font-light text-[14px] text-[var(--muted)]">{test.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* H. WHAT IS INCLUDED CARD */}
      <section className="py-[120px] px-[8%] relative">
        <div className="scroll-reveal max-w-[640px] mx-auto bg-white rounded-[24px] p-8 md:p-12 shadow-[0_8px_40px_rgba(26,26,24,0.08)] border border-[rgba(26,26,24,0.05)] text-center">
          <div className="font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-4">
            // Qué incluye tu sitio
          </div>
          <h3 className="font-sans font-bold text-[28px] text-[var(--text)] leading-[1.2] mb-4">
            Todo lo que necesitas para empezar a generar clientes
          </h3>
          <p className="font-sans font-light text-[17px] text-[var(--muted)] leading-[1.65] mb-10 text-center">
            Sin costos escondidos. Sin complicaciones técnicas. Tú solo apruebas y nosotros publicamos.
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 text-left mb-10 border-t border-b border-[rgba(26,26,24,0.05)] py-6">
            <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
              <span className="text-[var(--green)] pt-1 leading-none">✓</span>
              <span>Diseño personalizado para tu negocio</span>
            </li>
            <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
              <span className="text-[var(--green)] pt-1 leading-none">✓</span>
              <span>Optimizado para celular y computadora</span>
            </li>
            <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
              <span className="text-[var(--green)] pt-1 leading-none">✓</span>
              <span>SEO básico incluido desde el inicio</span>
            </li>
            <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
              <span className="text-[var(--green)] pt-1 leading-none">✓</span>
              <span>Botón de WhatsApp integrado</span>
            </li>
            <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
              <span className="text-[var(--green)] pt-1 leading-none">✓</span>
              <span>Dominio y hosting configurados</span>
            </li>
            <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
              <span className="text-[var(--green)] pt-1 leading-none">✓</span>
              <span>Capacitación para que puedas actualizar tu contenido</span>
            </li>
          </ul>

          <a href="/contacto" className="block w-full text-center bg-[var(--terra)] text-[#F5F0E8] rounded-[50px] px-8 py-3.5 font-sans font-bold hover:bg-[#a65022] transition-colors">
            Agendar consulta gratis
          </a>
        </div>
      </section>

      {/* CONTACT/BOOKING (CALENDLY) */}
      <section id="contacto" className="py-[100px] px-[8%] pb-[60px] border-t border-[rgba(26,26,24,0.08)] bg-[var(--bg)]">
        <div className="text-center max-w-[560px] mx-auto mb-[48px]">
          <div className="scroll-reveal font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6">
            // Sin costo &middot; 30 minutos &middot; Sin compromiso
          </div>
          <h2 className="scroll-reveal font-sans font-bold text-[48px] leading-[1.1] text-[var(--text)] mb-6">
            Hablemos de tu negocio.
          </h2>
          <p className="scroll-reveal font-sans font-light text-[18px] text-[var(--muted)] leading-[1.65]">
            Agenda una videollamada gratuita. Te mostramos exactamente qué está fallando en tu presencia digital y qué hacer para solucionarlo.
          </p>
        </div>

        <div className="scroll-reveal max-w-[900px] mx-auto rounded-[16px] overflow-hidden shadow-[0_4px_40px_rgba(26,26,24,0.08)] bg-white" ref={calRef}>
          {calReady && (
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/tommy-tuwebsv/30min?hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '700px' }}
            />
          )}
        </div>
      </section>

      {/* I. FAQ */}
      <section ref={faqRef} className="bg-[var(--dark)] py-[120px] px-[8%]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="scroll-reveal font-sans font-bold text-[48px] leading-[1.1] text-[var(--bg)] mb-16">
            Preguntas frecuentes.
          </h2>

          <div className="flex flex-col">
            {[
              { q: "¿Cuánto tarda en estar lista mi página web?", a: "Una demo en 24 horas. El sitio completo en menos de una semana, dependiendo del contenido que nos proporciones." },
              { q: "¿Necesito conocimientos técnicos para manejar mi sitio?", a: "Para nada. Te explicamos cómo actualizar lo básico y siempre puedes escribirnos si necesitas algo." },
              { q: "¿Qué pasa si no me gusta la demo?", a: "No pagas nada. La demo es gratis y sin compromiso. Si no te convence, no hay problema." },
              { q: "¿El sitio aparece en Google automáticamente?", a: "Construimos el sitio con SEO desde el inicio, lo que le da una ventaja. Posicionarlo bien en Google toma tiempo adicional, pero arrancas con la base correcta." },
              { q: "¿Puedo actualizar el contenido yo mismo después?", a: "Sí. Te entregamos el sitio y te explicamos cómo hacer cambios básicos. Para cambios mayores, estamos disponibles." }
            ].map((faq, idx) => {
              const [isOpen, setIsOpen] = useState(false);
              const contentRef = useRef<HTMLDivElement>(null);

              useEffect(() => {
                if (contentRef.current) {
                  gsap.to(contentRef.current, {
                    height: isOpen ? 'auto' : 0,
                    duration: 0.35,
                    ease: 'power2.inOut'
                  });
                }
              }, [isOpen]);

              return (
                <div key={idx} className="scroll-reveal border-b border-[rgba(245,240,232,0.1)] py-6">
                  <button 
                    className="w-full flex items-center justify-between text-left gap-4"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="font-sans font-medium text-[17px] text-[var(--bg)]">{faq.q}</span>
                    <Plus 
                      className="text-[var(--bg)] shrink-0 transition-transform duration-300" 
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      size={20} 
                    />
                  </button>
                  <div ref={contentRef} className="h-0 overflow-hidden">
                    <p className="font-sans font-light text-[16px] text-[rgba(245,240,232,0.65)] pt-4 leading-[1.6]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* J. CTA BANNER */}
      <section className="relative bg-[var(--green)] py-[80px] px-[8%] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="font-serif italic text-[38px] text-[var(--bg)] leading-[1.1] max-w-[500px]">
            "¿Listo para conseguir más clientes?"
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contacto" className="bg-[var(--bg)] text-[var(--text)] rounded-full px-8 py-3.5 font-sans font-bold text-[15px] hover:bg-white transition-colors text-center">
              Agendar consulta gratis
            </a>
            <a href="/#servicios" className="border border-[rgba(245,240,232,0.4)] text-[var(--bg)] rounded-full px-8 py-3.5 font-sans font-medium text-[15px] hover:bg-[rgba(245,240,232,0.1)] transition-colors text-center">
              Ver servicios &rarr;
            </a>
          </div>
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
