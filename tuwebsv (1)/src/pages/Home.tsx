import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Plus, MessageCircle, Menu, X, Instagram, Facebook } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const guaranteeRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

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

      // Services stagger
      if (servicesRef.current) {
        const cards = servicesRef.current.querySelectorAll('.service-card');
        gsap.fromTo(cards,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: servicesRef.current,
              start: 'top 70%',
            }
          }
        );
      }

      // Results counters
      if (resultsRef.current) {
        const counters = resultsRef.current.querySelectorAll('.stat-counter');
        counters.forEach((counter) => {
          const target = parseFloat(counter.getAttribute('data-target') || '0');
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: resultsRef.current,
              start: 'top 80%',
            },
            onUpdate: () => {
              if (counter.textContent?.includes('+')) {
                counter.textContent = '+' + Math.ceil(obj.val);
              } else {
                counter.textContent = Math.ceil(obj.val).toString();
              }
            }
          });
        });
      }

      // Guarantee background
      if (guaranteeRef.current) {
        const bg90 = guaranteeRef.current.querySelector('.bg-90');
        gsap.fromTo(bg90, 
          { scale: 0.85, opacity: 0 },
          { 
            scale: 1.0, 
            opacity: 0.05, 
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: guaranteeRef.current,
              start: 'top 70%',
            }
          }
        );
      }

      // Process stagger
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

      // Transition Section
      const transitionSection = document.getElementById('transition-section');
      if (transitionSection) {
        const words1 = transitionSection.querySelectorAll('.word-line-1');
        const words2 = transitionSection.querySelectorAll('.word-line-2');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: transitionSection,
            start: 'top 75%',
          }
        });

        if (words1.length) {
          tl.fromTo(words1, 
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power3.out' },
            0
          );
        }
        if (words2.length) {
          tl.fromTo(words2,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power3.out' },
            0.2
          );
        }
      }
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

  // Calendly Script
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
      
      {/* SECTION A: NAVBAR */}
      <nav 
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[960px] rounded-[50px] transition-all duration-400 flex items-center justify-between px-6 py-3 ${
          isScrolled 
            ? 'bg-[rgba(245,240,232,0.92)] backdrop-blur-[20px] border border-[rgba(26,26,24,0.15)] shadow-[0_4px_20px_rgba(26,26,24,0.08)]' 
            : 'bg-[rgba(245,240,232,0.15)] backdrop-blur-[8px] border border-[rgba(26,26,24,0.1)]'
        }`}
      >
        <div className="font-sans font-bold tracking-[0.08em] text-[var(--green)]">TUWEBSV</div>
        
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
            <div className="font-sans font-bold tracking-[0.08em] text-[var(--green)]">TUWEBSV</div>
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
            <a href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          </div>
        </div>
      )}

      {/* SECTION B: HERO */}
      <section id="inicio" ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden">
        {/* Decorative Blob */}
        <svg className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] fill-[var(--green)] opacity-[0.06] pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18,97.7,-2.7C97.4,12.6,90.2,27.7,80.6,40.4C71,53.1,59,63.4,45.4,71.4C31.8,79.4,16.6,85.1,0.8,83.7C-15,82.3,-30,73.8,-43.3,64.7C-56.6,55.6,-68.2,45.9,-76.4,33.5C-84.6,21.1,-89.4,6,-87.6,-8.4C-85.8,-22.8,-77.4,-36.5,-66.6,-47.2C-55.8,-57.9,-42.6,-65.6,-29.4,-72.1C-16.2,-78.6,-3,-83.9,10.6,-84.9C24.2,-85.9,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>

        <div className="absolute top-[45%] -translate-y-1/2 left-[8%] w-[84%] max-w-[1200px]">
          <h1 className="hero-anim font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-4">
            Agencia de Marketing San Salvador
          </h1>
          <h2 className="hero-anim font-sans font-bold text-[clamp(52px,7vw,84px)] leading-[1.0] tracking-[-0.03em] text-[var(--text)]">
            Tu próximo cliente
          </h2>
          <h2 className="hero-anim font-serif italic text-[clamp(52px,7vw,84px)] leading-[1.0] tracking-[-0.03em] text-[var(--green)] mb-4">
            ya te está buscando.
          </h2>
          <p className="hero-anim font-sans font-light text-[19px] text-[var(--muted)] max-w-[520px] leading-[1.65] mb-8">
            Ayudamos a negocios en El Salvador a aparecer en Google, dominar su zona, y convertir visitas en clientes reales.
          </p>
          <div className="hero-anim flex flex-wrap items-center gap-6">
            <a href="/contacto" className="bg-[var(--green)] text-[#F5F0E8] rounded-[50px] px-8 py-3.5 font-sans font-bold hover:bg-[#152e23] transition-colors">
              Consulta gratis &rarr;
            </a>
            <a href="#servicios" className="font-sans font-medium text-[var(--text)] hover:underline underline-offset-4">
              Ver cómo trabajamos &darr;
            </a>
          </div>
        </div>

        {/* Stat Strip */}
        <div className="absolute bottom-[44px] left-0 w-full border-t border-[rgba(26,26,24,0.1)] px-[8%] py-[14px] bg-[var(--bg)] z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-16 max-w-[900px] mx-auto">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[32px] text-[var(--terra)]">90 días</span>
              <span className="font-sans font-light text-[13px] text-[var(--muted)]">tiempo promedio para top 3</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-[rgba(26,26,24,0.1)]"></div>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[18px] text-[var(--green)]">El Salvador</span>
              <span className="font-sans font-light text-[13px] text-[var(--muted)]">enfoque 100% local</span>
            </div>
          </div>
        </div>
        
        {/* SECTION C: TICKER */}
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

      {/* SECTION D: SERVICES */}
      <section id="servicios" ref={servicesRef} className="py-[120px] px-[8%] max-w-[1440px] mx-auto">
        <div className="scroll-reveal font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6">
          // 001 &middot; Servicios
        </div>
        <h2 className="scroll-reveal font-sans font-bold text-[clamp(36px,4vw,52px)] leading-[1.1] text-[var(--text)]">
          Cada servicio tiene un objetivo:
        </h2>
        <h2 className="scroll-reveal font-serif italic text-[clamp(36px,4vw,52px)] leading-[1.1] text-[var(--green)] mb-16">
          más clientes para tu negocio.
        </h2>

        <div className="flex flex-col lg:flex-row gap-[80px]">
          <div className="lg:w-[38%] scroll-reveal">
            <p className="font-sans font-light text-[17px] text-[var(--muted)] max-w-[360px] leading-[1.65]">
              No hacemos todo para todos. Nos especializamos en lo que realmente mueve el negocio de una empresa local en El Salvador: aparecer, atraer, y convertir.
            </p>
          </div>
          
          <div className="lg:w-[62%] flex flex-col gap-3">
            {[
              { num: '01', title: 'Agencia de SEO Local en El Salvador', desc: 'Análisis y optimización para que aparezcas cuando alguien busca tu servicio.', link: '/seo-local' },
              { num: '02', title: 'Google Ads y Meta Ads para negocios locales', desc: 'Llega a clientes que ya están buscando tus servicios ahora mismo.', link: '/google-meta-ads' },
              { num: '03', title: 'Posicionamiento en Google Maps', desc: 'Domina los resultados locales y atrae tráfico directamente a tu negocio.', link: '/seo-local' },
              { num: '04', title: 'Diseño de Páginas Web en San Salvador', desc: 'Tu sitio más rápido, claro, y construido para generar contactos.', link: '/paginas-web' }
            ].map((service, idx) => (
              <div key={idx} className="relative service-card group bg-[var(--surface)] rounded-[16px] shadow-[0_2px_20px_rgba(26,26,24,0.06)] p-6 md:px-7 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-[3px] border-l-[3px] border-transparent hover:border-[var(--terra)]">
                {service.link && <a href={service.link} className="absolute inset-0 z-10" aria-label={`Ver servicio ${service.title}`}></a>}
                <div className="flex items-start md:items-center gap-6">
                  <span className="font-mono text-[11px] text-[var(--muted)]">{service.num}</span>
                  <div>
                    <h2 className="font-sans font-bold text-[20px] text-[var(--text)] mb-1">{service.title}</h2>
                    <p className="font-sans font-light text-[15px] text-[var(--muted)]">{service.desc}</p>
                  </div>
                </div>
                <ArrowRight className="text-[var(--muted)] group-hover:text-[var(--terra)] transition-colors shrink-0" size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: RESULTS */}
      <section ref={resultsRef} className="bg-[var(--dark)] py-[120px] px-[8%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6">
            // Resultados
          </div>
          <h2 className="scroll-reveal font-serif italic text-[clamp(36px,4vw,52px)] leading-[1.1] text-[var(--bg)] mb-20 max-w-[800px]">
            "Resultados que se miden en clientes, no en clics."
          </h2>

          <div className="flex flex-col md:flex-row md:justify-center border-t border-b border-[rgba(245,240,232,0.15)] md:border-b-0 md:border-t-0 max-w-[800px] mx-auto">
            <div className="flex-1 py-8 md:py-0 md:border-r border-[rgba(245,240,232,0.15)] md:px-8 flex flex-col items-center justify-center text-center">
              <div className="font-mono text-[72px] text-[var(--bg)] leading-none mb-4">Top 3</div>
              <div className="font-sans font-light text-[15px] text-[rgba(245,240,232,0.7)]">Posición promedio en Google Maps</div>
            </div>
            <div className="flex-1 py-8 md:py-0 border-t md:border-t-0 md:px-8 flex flex-col items-center justify-center text-center">
              <div className="font-mono text-[72px] text-[var(--terra)] leading-none mb-4 stat-counter" data-target="90">0</div>
              <div className="font-sans font-light text-[15px] text-[rgba(245,240,232,0.7)]">Tiempo promedio para ver resultados</div>
            </div>
          </div>

          <div className="mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-6">
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
              },
              {
                quote: "Automatizaron la lectura y respuesta de mis correos, así yo me puedo enfocar en otros casos.",
                name: "Ricardo P.",
                role: "Abogado · Managua"
              }
            ].map((test, idx) => (
              <div key={idx} className="scroll-reveal bg-[rgba(245,240,232,0.05)] border border-[rgba(245,240,232,0.1)] rounded-[16px] p-7 flex flex-col justify-between">
                <p className="font-serif italic text-[17px] text-[var(--bg)] leading-[1.5] mb-8">"{test.quote}"</p>
                <div>
                  <div className="font-sans font-bold text-[14px] text-[#F5F0E8] mb-1">{test.name}</div>
                  <div className="font-sans font-light text-[13px] text-[rgba(245,240,232,0.6)]">{test.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION F: THE GUARANTEE */}
      <section ref={guaranteeRef} className="relative py-[140px] px-[8%] overflow-hidden flex items-center justify-center">
        <div className="bg-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[320px] text-[var(--green)] leading-none pointer-events-none z-0">
          90
        </div>
        
        <div className="relative z-10 text-center max-w-[800px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6">
            // La Garantía
          </div>
          <h2 className="scroll-reveal font-sans font-bold text-[clamp(36px,4vw,52px)] leading-[1.1] text-[var(--text)]">
            Top 3 en Google Maps en 90 días.
          </h2>
          <h2 className="scroll-reveal font-serif italic text-[clamp(36px,4vw,52px)] leading-[1.1] text-[var(--terra)] mb-6">
            O seguimos trabajando sin costo extra.
          </h2>
          <p className="scroll-reveal font-sans font-light text-[18px] text-[var(--muted)] max-w-[560px] mx-auto leading-[1.65] mb-10">
            No es un slogan. Es un compromiso contractual. Si no llegamos al top 3 en tu categoría dentro de 90 días, continuamos el servicio gratis hasta lograrlo. Así de seguros estamos de nuestro trabajo.
          </p>
          <div className="scroll-reveal">
            <a href="/contacto" className="inline-block bg-[var(--terra)] text-[#F5F0E8] rounded-[50px] px-9 py-3.5 font-sans font-bold hover:bg-[#a65022] transition-colors">
              Empieza hoy &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* SECTION G: PROCESS */}
      <section ref={processRef} className="py-[120px] px-[8%] border-t border-[rgba(26,26,24,0.08)] max-w-[1440px] mx-auto">
        <div className="font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6 opacity-100">
          // 002 &middot; Proceso
        </div>
        <h2 className="scroll-reveal text-[clamp(36px,4vw,52px)] leading-[1.1] mb-20">
          <span className="font-sans font-bold text-[var(--text)]">Simple, directo,</span>
          <span className="font-serif italic text-[var(--green)]"> sin rodeos.</span>
        </h2>

        <div className="relative flex flex-col md:flex-row gap-12 md:gap-6">
          <div className="hidden md:block absolute top-[10px] left-0 w-full border-t border-dashed border-[var(--terra)] opacity-40 z-0"></div>
          
          {[
            { num: '01', title: 'Diagnóstico', desc: 'Analizamos tu negocio, tu competencia local, y lo que está faltando.' },
            { num: '02', title: 'Estrategia', desc: 'Te presentamos un plan claro con objetivos específicos y medibles.' },
            { num: '03', title: 'Ejecución', desc: 'Implementamos y optimizamos semana a semana. Sin fricciones.' },
            { num: '04', title: 'Resultados', desc: 'Reportes claros. Tú ves exactamente qué está pasando y qué viene.' }
          ].map((step, idx) => (
            <div key={idx} className="process-step relative z-10 md:w-1/4">
              <div className="font-mono text-[11px] text-[var(--terra)] bg-[var(--bg)] inline-block pr-4 mb-4">
                {step.num}
              </div>
              <h3 className="font-sans font-bold text-[20px] text-[var(--text)] mb-3">{step.title}</h3>
              <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.6]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION H: TOMMY */}
      <section id="nosotros" className="py-[120px] px-[8%] border-t border-[rgba(26,26,24,0.08)] max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[80px] items-center">
          <div className="lg:w-[40%] scroll-reveal">
            <img 
              src="/tommyaboutus.webp" 
              alt="Tommy - Fundador de TuWebSV" 
              className="w-full h-auto max-h-[500px] object-cover rounded-[16px] shadow-[0_4px_30px_rgba(26,26,24,0.1)]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div className="lg:w-[60%] flex flex-col justify-center">
            <div className="scroll-reveal font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6">
              // EL QUE HACE EL TRABAJO
            </div>
            <h2 className="scroll-reveal font-sans font-bold text-[44px] leading-[1.1] text-[var(--text)]">
              Soy Tommy.
            </h2>
            <h2 className="scroll-reveal font-serif italic text-[44px] leading-[1.1] text-[var(--green)] mb-8">
              Tú hablas conmigo. Yo hago el trabajo.
            </h2>
            
            <p className="scroll-reveal font-sans font-light text-[17px] text-[var(--muted)] leading-[1.65] mb-6">
              Arranqué TuWebSV porque quería ayudar a negocios locales de forma directa, sin fantasía ni tecnicismos. La mayoría de agencias te presentan soluciones extensas que terminan agregándole más estrés al dueño del negocio, lo he visto de primera mano. Me gusta trabajar bien, sin complicaciones innecesarias, y la mayoría de resultados se logran en la mitad del tiempo que cualquier agencia propone.
            </p>
            <p className="scroll-reveal font-sans font-light text-[17px] text-[var(--muted)] leading-[1.65] mb-10">
              Y algo más: no voy a prometerte cosas que no puedo cumplir. Antes de arrancar, evalúo si somos buen fit. Si no lo somos, te lo digo directo y te doy mis recomendaciones sin costo. Sin presión, sin cobrar por gusto.
            </p>

            <ul className="scroll-reveal flex flex-col gap-4 mb-10">
              <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[var(--terra)]">&ndash;</span>
                <span>Sin tecnicismos ni reportes que nadie entiende.</span>
              </li>
              <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[var(--terra)]">&ndash;</span>
                <span>Sin contratos largos. Si funciona, seguimos trabajando.</span>
              </li>
              <li className="font-sans font-medium text-[15px] text-[var(--text)] flex items-start gap-3">
                <span className="text-[var(--terra)]">&ndash;</span>
                <span>Te respondo yo. Siempre.</span>
              </li>
            </ul>

            <div className="scroll-reveal">
              <a href="/contacto" className="font-sans font-medium text-[15px] text-[var(--green)] hover:underline underline-offset-4 transition-all">
                Conoce más sobre mí &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H2: TRANSITION */}
      <section id="transition-section" className="bg-[#1A1A18] py-[140px] px-[8%] text-center overflow-hidden flex flex-col items-center justify-center">
        <h2 className="font-serif italic font-normal text-[clamp(32px,4vw,64px)] text-[rgba(245,240,232,0.4)] leading-[1.2] flex flex-wrap justify-center gap-x-[0.25em] gap-y-2">
          {"La mayoría de agencias te venden fantasía.".split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden py-1">
              <span className="inline-block word-line-1 opacity-0 translate-y-[60px]">{word}</span>
            </span>
          ))}
        </h2>
        
        <div className="w-full max-w-[200px] mx-auto my-[32px] border-t border-[rgba(245,240,232,0.1)]"></div>
        
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex flex-col items-end">
            <h2 className="font-serif italic font-bold text-[clamp(48px,7vw,96px)] text-[#F5F0E8] leading-[1.1] flex flex-wrap justify-center gap-x-[0.28em] gap-y-2">
              {"Nosotros te traemos clientes.".split(" ").map((word, i) => (
                <span key={`w2-${i}`} className="inline-block overflow-hidden py-1">
                  <span className="inline-block word-line-2 opacity-0 translate-y-[60px]">{word}</span>
                </span>
              ))}
            </h2>
            <span className="relative mt-2 md:-mt-2 mr-0 md:mr-[0.5em] font-sans font-light text-[15px] text-[rgba(245,240,232,0.4)] whitespace-nowrap">
              Para negocios que van en serio.
            </span>
          </div>
        </div>
      </section>

      {/* SECTION I: PORTFOLIO */}
      <section className="py-[120px] pl-[8%] border-t border-[rgba(26,26,24,0.08)] overflow-hidden">
        <div className="pr-[8%] max-w-[1440px] mx-auto mb-16">
          <div className="scroll-reveal font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.12em] mb-6">
            // 003 &middot; Proyectos
          </div>
          <h2 className="scroll-reveal font-sans font-bold text-[clamp(40px,5vw,56px)] leading-[1.1] text-[var(--text)]">
            El trabajo.
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pr-[8%]">
          {[
            {
              title: "The Tooth Boutique",
              desc: "Sitio web dental con sistema de selfie post-tratamiento.",
              img: "/project_tooth.png",
              hoverImg: "/project_selfietooth.png",
              link: "https://www.thetoothboutique.com/"
            },
            {
              title: "VOID",
              desc: "agencia de marketing y desempeño",
              img: "/project_void2.png"
            },
            {
              title: "Top Google Places",
              desc: "The Tooth Boutique de las primeras opciones al buscar clinicas de ortodoncia en San Salvador.",
              img: "/project_mapstooth.png"
            }
          ].map((project, idx) => (
            <div key={idx} className="group min-w-[320px] md:min-w-[380px] snap-start rounded-[16px] overflow-hidden bg-[var(--surface)] shadow-[0_2px_20px_rgba(26,26,24,0.06)] hover:shadow-[0_12px_40px_rgba(26,26,24,0.12)] transition-all duration-300 hover:-translate-y-[4px] border border-[rgba(26,26,24,0.05)]">
              {/* Browser Chrome */}
              <div className="h-8 bg-[#F5F5F5] border-b border-[rgba(26,26,24,0.05)] flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
              </div>
              {/* Image */}
              <div className="relative h-[220px] w-full overflow-hidden bg-[#F5F5F5]">
                <img src={project.img} alt={project.title} className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${project.hoverImg ? 'group-hover:opacity-0' : ''}`} referrerPolicy="no-referrer" loading="lazy" />
                {project.hoverImg && (
                  <img src={project.hoverImg} alt={`${project.title} hover`} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" />
                )}
              </div>
              {/* Info */}
              <div className="p-6">
                <h3 className="font-sans font-bold text-[18px] text-[var(--text)] mb-2">{project.title}</h3>
                <p className="font-sans font-light text-[14px] text-[var(--muted)] mb-6">{project.desc}</p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-block font-mono text-[11px] text-[var(--terra)] uppercase tracking-[0.05em] hover:underline">
                    Ver proyecto &rarr;
                  </a>
                ) : (
                  <div className="h-[16px]"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION J: BOOKING (CALENDLY) */}
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
        
        <div className="text-center mt-6">
          <p className="font-sans font-medium text-[15px] text-[var(--muted)]">Shall we begin?</p>
        </div>
      </section>

      {/* SECTION K: FAQ */}
      <section ref={faqRef} className="bg-[var(--dark)] py-[120px] px-[8%]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="scroll-reveal font-sans font-bold text-[48px] leading-[1.1] text-[var(--bg)] mb-16">
            Preguntas frecuentes.
          </h2>

          <div className="flex flex-col">
            {[
              { q: "¿Cuánto tiempo toma ver resultados en Google Maps?", a: "Entre 60 y 90 días para negocios con competencia media. Algunos clientes ven movimiento desde las primeras semanas." },
              { q: "¿Necesito tener un sitio web para hacer Local SEO?", a: "No es obligatorio, pero ayuda. Podemos trabajar solo con tu Google Business Profile si estás empezando." },
              { q: "¿Cuánto tarda en estar lista mi página web?", a: "Una demo en 24 horas. El sitio completo en menos de una semana, dependiendo del contenido que nos proporciones." },
              { q: "¿Necesito conocimientos técnicos para trabajar con ustedes?", a: "Para nada. Nosotros manejamos todo. Tú solo apruebas y recibes resultados." },
              { q: "¿Trabajan con negocios fuera de El Salvador?", a: "Sí. Aunque nuestro enfoque principal es El Salvador, trabajamos con negocios en toda Latinoamérica." },
              { q: "¿Cuánto cuesta el servicio mensual?", a: "Depende del servicio y la competencia en tu zona. Agenda una consulta gratuita y te damos un precio exacto sin compromiso." }
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

      {/* SECTION L: CTA BANNER */}
      <section className="relative bg-[var(--green)] py-[80px] px-[8%] overflow-hidden">
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="font-serif italic text-[38px] text-[var(--bg)] leading-[1.1] max-w-[500px]">
            "¿Listo para conseguir más clientes?"
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contacto" className="bg-[var(--bg)] text-[var(--text)] rounded-full px-8 py-3.5 font-sans font-bold text-[15px] hover:bg-white transition-colors text-center">
              Agendar consulta gratis
            </a>
            <a href="#servicios" className="border border-[rgba(245,240,232,0.4)] text-[var(--bg)] rounded-full px-8 py-3.5 font-sans font-medium text-[15px] hover:bg-[rgba(245,240,232,0.1)] transition-colors text-center">
              Ver servicios &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* SECTION M: FOOTER */}
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
                <li><a href="#" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Redes Sociales</a></li>
                <li><a href="/paginas-web" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Páginas Web</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-sans font-medium text-[16px] text-[var(--bg)] mb-6">Empresa</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#nosotros" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Nosotros</a></li>
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

          {/* Bottom Row */}
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
