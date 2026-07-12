'use client';

import { useLenis, useScrollReveal, useRootRef } from '../scroll-reveal';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import FaqItem from '../components/FaqItem';
import ContactForm from '../components/ContactForm';
import { WHATSAPP_URL } from '../whatsapp';
import TypingCode from '../components/TypingCode';

const FAQS = [
  { q: '¿Cuánto tarda en estar lista mi página web?', a: 'Una demo en 24 horas. El sitio completo en menos de una semana, dependiendo del contenido que nos proporciones.' },
  { q: '¿Necesito conocimientos técnicos para manejar mi sitio?', a: 'Para nada. Nosotros nos encargamos de todo.' },
  { q: '¿Qué pasa si no me gusta la demo?', a: 'Nada, el demo es gratis. Recuerda que es solo una idea; un sitio terminado con tu marca se ve muy diferente.' },
  { q: '¿El sitio aparece en Google automáticamente?', a: 'Creamos los sitios con SEO básico. Si quieres aparecer en el top de Maps, ese es otro proceso; si te interesa, lo platicamos.' },
  { q: '¿Qué es un sitio full stack?', a: 'Es un sitio más complejo: maneja bases de datos, usuarios con credenciales, paneles internos y más. También lo hacemos.' },
];

const WHAT = [
  { n: '01', title: 'Diseño claro y propio', body: 'Nada de plantillas reutilizadas. Diseñamos pensando en tu negocio, tu marca y lo que tu cliente necesita ver primero.' },
  { n: '02', title: 'Rápido por defecto', body: 'Carga en menos de 2 segundos y un puntaje de PageSpeed de 90+.' },
  { n: '03', title: 'Dominio .com incluido', body: 'Tu dominio .com va incluido por el primer año.' },
  { n: '04', title: 'Construido para convertir', body: 'Cada elemento del sitio tiene un objetivo. Más mensajes en WhatsApp, más llamadas, más ventas.' },
];

const PROCESS = [
  { n: '01', title: 'Demo gratis', body: 'En 24 horas te enseñamos una versión inicial. Sin compromiso. Si no te convence, terminamos ahí.' },
  { n: '02', title: 'Construcción', body: 'Una vez aprobada la demo, construimos el sitio completo. Te involucramos en cada decisión.' },
  { n: '03', title: 'Lanzamiento', body: 'Publicamos el sitio en tu dominio.' },
];

export default function PaginasWeb() {
  const rootRef = useRootRef();
  useLenis();
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-[88dvh] w-full overflow-hidden flex items-end pb-24 px-6 md:px-12">
        {/* Below xl: typing code as low-opacity backdrop */}
        <div className="xl:hidden absolute inset-x-0 top-[24%] bottom-[16%] pointer-events-none opacity-[0.18] flex items-center justify-center">
          <div className="w-full max-w-[420px]"><TypingCode /></div>
        </div>
        {/* xl+: typing code docked right at full strength */}
        <div className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 w-[44%] max-w-[560px] pointer-events-none">
          <TypingCode />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mb-3">
            Inicio &nbsp;/&nbsp; Servicios &nbsp;/&nbsp; Páginas Web
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-6">
            Sitios Web · Diseño y Desarrollo
          </div>
          <h1 className="font-display font-bold leading-[1.02] tracking-[-0.02em] text-[var(--text)] xl:max-w-[760px]" style={{ fontSize: 'clamp(44px, 7.5vw, 88px)' }}>
            Convierte
            <span className="block text-[var(--accent)]">o es solo decoración.</span>
          </h1>
          <p className="mt-6 font-sans font-light text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.65] max-w-[560px]">
            Diseñamos y construimos sitios pensados para tu negocio. Rápidos,
            claros, y enfocados en convertir visitas en clientes reales.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
            <span>Demo en 24 horas</span>
            <span className="text-[var(--border-strong)]">·</span>
            <span>Sitio completo en una semana</span>
            <span className="text-[var(--border-strong)]">·</span>
            <span>SEO desde el inicio</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center bg-[var(--accent)] text-white rounded-full px-7 py-3 font-sans font-medium text-[14px] transition-all duration-200 hover:bg-[var(--accent-deep)] hover:shadow-[0_0_24px_rgba(45,79,255,0.35)]">
              Contáctanos
            </a>
            <a href="#proceso" className="font-sans font-normal text-[14px] text-[var(--accent)] hover:underline underline-offset-4">
              Ver cómo trabajamos →
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[var(--bg)] py-[120px] px-6 md:px-12 border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Cómo lo hacemos</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            Cuatro cosas, hechas bien.
          </h2>
          <hr className="border-t border-[var(--border)] mt-12 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHAT.map((w) => (
              <div key={w.n} className="scroll-reveal rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-8 transition-colors hover:border-[var(--border-strong)]">
                <div className="font-mono text-[11px] text-[var(--muted)] mb-5">{w.n}</div>
                <h3 className="font-display font-medium text-[20px] text-[var(--text)] tracking-[-0.01em] mb-3">{w.title}</h3>
                <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.7]">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" className="bg-[var(--bg)] py-[120px] px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Proceso</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            De idea a sitio en línea, en una semana.
          </h2>
          <hr className="border-t border-[var(--border)] mt-12 mb-12" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="hidden md:block absolute top-[14px] left-[8%] right-[8%] h-px bg-[var(--border)]" aria-hidden="true" />
            {PROCESS.map((s) => (
              <div key={s.n} className="scroll-reveal relative">
                <div className="font-mono text-[11px] text-[var(--border-strong)] bg-[var(--bg)] inline-block pr-3 mb-5">{s.n}</div>
                <h3 className="font-display font-medium text-[20px] text-[var(--text)] tracking-[-0.01em] mb-3">{s.title}</h3>
                <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.7] max-w-[300px]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--bg)] py-[120px] px-6 md:px-12 border-t border-[var(--border)]">
        <div className="max-w-[800px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Preguntas</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)] mb-12">
            Preguntas frecuentes.
          </h2>
          <div>{FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </section>

      {/* CIERRE */}
      <section id="contacto" className="bg-[var(--surface)] py-[120px] px-6 md:px-12">
        <div className="max-w-[960px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Trabajemos juntos</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(36px,5vw,48px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            ¿Listo para tu sitio?
          </h2>
          <p className="scroll-reveal mt-6 font-sans font-light text-[16px] text-[var(--muted)] leading-[1.65] max-w-[520px]">
            Cuéntanos qué necesita tu negocio y te mostramos una demo
            gratis en 24 horas.
          </p>
          <div className="scroll-reveal mt-12"><ContactForm /></div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
