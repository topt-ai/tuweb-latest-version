import { useSeo, SITE_URL, ORG_SCHEMA, serviceSchema, breadcrumbSchema } from '../seo';
import { useLenis, useScrollReveal, useRootRef } from '../scroll-reveal';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import FaqItem from '../components/FaqItem';
import CalEmbed, { CAL_URL } from '../components/CalEmbed';
import ElSalvadorMap from '../components/ElSalvadorMap';

const FAQS = [
  { q: '¿Cuánto tiempo toma ver resultados?', a: 'Entre 60 y 90 días para negocios con competencia media. Algunos ven movimiento desde las primeras semanas.' },
  { q: '¿Necesito tener una página web para hacer SEO Local?', a: 'No es obligatorio, pero ayuda. Podemos trabajar solo con tu Google Business Profile si estás empezando.' },
  { q: '¿Qué es Google Business Profile?', a: 'Es el perfil de tu negocio en Google, el que aparece en Google Maps cuando alguien te busca. Es la pieza más importante del SEO local.' },
  { q: '¿Cuánto cuesta el servicio mensual?', a: 'Depende del tamaño del negocio y la competencia en tu zona. Agenda una consulta gratis y te damos un precio exacto.' },
  { q: '¿Funcionan con negocios de cualquier giro?', a: 'Sí. Restaurantes, clínicas, abogados, tiendas, gimnasios. Si tienes clientes locales, el SEO local te aplica.' },
];

const WHAT = [
  { n: '01', title: 'Optimizamos tu Google Business Profile', body: 'El perfil de tu negocio en Google es la pieza más importante. Lo configuramos completo.' },
  { n: '02', title: 'Trabajamos la autoridad local', body: 'Mejoramos las señales que Google usa para rankear negocios locales.' },
  { n: '03', title: 'Construimos o arreglamos el backend', body: 'Arreglamos el código, que es lo que lee Google.' },
];

const PROCESS = [
  { n: '01', title: 'Diagnóstico', body: 'Analizamos tu perfil, tu competencia local y dónde estás perdiendo clientes.' },
  { n: '02', title: 'Optimización', body: 'Configuramos lo que falta, corregimos lo que está mal y empezamos a trabajar señales.' },
  { n: '03', title: 'Posicionamiento', body: 'Mes a mes mejoramos posición. Te enviamos reportes con números reales.' },
  { n: '04', title: 'Resultados', body: 'Top 3 en Google Maps en 90 días o seguimos sin costo extra hasta lograrlo.' },
];

export default function SeoLocal() {
  useSeo({
    title: 'Mejor SEO Local en San Salvador | Aparecer en el Top 3 de Google Maps cerca de mí - TuWebSV',
    description: 'Posicionamos tu negocio en el top 3 de Google Maps en San Salvador. SEO Local, Google Business Profile y estrategia de búsqueda local para negocios en El Salvador.',
    canonical: `${SITE_URL}/seo-local`,
    ogTitle: 'SEO Local San Salvador | Posicionamiento en Google Maps | TuWebSV',
    ogDescription: 'Posicionamos tu negocio en el top 3 de Google Maps en San Salvador. SEO Local para negocios en El Salvador.',
    jsonLd: [
      ORG_SCHEMA,
      serviceSchema({
        name: 'SEO Local San Salvador',
        description: 'Posicionamiento en Google Maps para negocios locales en San Salvador y El Salvador.',
        url: `${SITE_URL}/seo-local`,
      }),
      breadcrumbSchema([
        { name: 'Inicio', url: `${SITE_URL}/` },
        { name: 'SEO Local San Salvador', url: `${SITE_URL}/seo-local` },
      ]),
    ],
  });

  const rootRef = useRootRef();
  useLenis();
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-[88dvh] w-full overflow-hidden flex items-end pb-24 px-6 md:px-12">
        {/* Below xl: map as a low-opacity backdrop */}
        <div className="xl:hidden absolute inset-x-[-8%] top-[18%] bottom-[12%] pointer-events-none opacity-[0.16]">
          <ElSalvadorMap />
        </div>
        {/* xl+: map docked right */}
        <div className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 w-[44%] max-w-[640px] aspect-[375/230] pointer-events-none">
          <ElSalvadorMap />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mb-3">
            Inicio &nbsp;/&nbsp; Servicios &nbsp;/&nbsp; SEO Local
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-6">
            SEO Local · Google Maps
          </div>
          <h1 className="font-display font-bold leading-[1.02] tracking-[-0.02em] text-[var(--text)] xl:max-w-[760px]" style={{ fontSize: 'clamp(44px, 7.5vw, 88px)' }}>
            Te encuentran
            <span className="block text-[var(--accent)]">o te ignoran.</span>
          </h1>
          <p className="mt-6 font-sans font-light text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.65] max-w-[520px]">
            Te ayudamos a aparecer en Google Maps y en las búsquedas
            donde tus clientes ya están buscando.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
            <span>Sin complicaciones</span>
            <span className="text-[var(--border-strong)]">·</span>
            <span>Resultados medibles</span>
            <span className="text-[var(--border-strong)]">·</span>
            <span>Trabajo continuo</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href={CAL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center bg-[var(--accent)] text-white rounded-full px-7 py-3 font-sans font-medium text-[14px] transition-all duration-200 hover:bg-[var(--accent-deep)] hover:shadow-[0_0_24px_rgba(45,79,255,0.35)]">
              Consulta gratis
            </a>
            <a href="#proceso" className="font-sans font-normal text-[14px] text-[var(--accent)] hover:underline underline-offset-4">
              Ver cómo funciona →
            </a>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-[var(--bg)] border-y border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-[var(--border)]">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] mb-6">Sin SEO Local</div>
            <ul className="flex flex-col gap-5 font-sans font-light text-[15px] text-[var(--muted)] leading-[1.6]">
              <li className="flex items-start gap-3"><span className="text-[var(--muted)] font-bold mt-0.5">×</span><span>Tu competencia aparece antes que tú cuando te buscan</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--muted)] font-bold mt-0.5">×</span><span>Pierdes clientes que están buscando exactamente lo que ofreces</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--muted)] font-bold mt-0.5">×</span><span>Dependes solo de recomendaciones y publicidad pagada</span></li>
            </ul>
          </div>
          <div className="p-10 md:p-16">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-6">Con SEO Local</div>
            <ul className="flex flex-col gap-5 font-sans font-light text-[15px] text-[var(--text)] leading-[1.6]">
              <li className="flex items-start gap-3"><span className="text-[var(--accent)] font-bold mt-0.5">✓</span><span>Apareces en el top 3 cuando buscan tu servicio en tu zona</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--accent)] font-bold mt-0.5">✓</span><span>Clientes que ya quieren lo que vendes te encuentran a ti</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--accent)] font-bold mt-0.5">✓</span><span>Tráfico constante sin pagar por cada clic</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[var(--bg)] py-[120px] px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Cómo lo hacemos</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            Posicionamiento en Google Maps.
          </h2>
          <hr className="border-t border-[var(--border)] mt-12 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHAT.map((w) => (
              <div key={w.n} className="scroll-reveal rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-8 transition-colors hover:border-[var(--border-strong)]">
                <div className="font-mono text-[11px] text-[var(--muted)] mb-5">{w.n}</div>
                <h3 className="font-display font-medium text-[18px] text-[var(--text)] tracking-[-0.01em] mb-3">{w.title}</h3>
                <p className="font-sans font-light text-[14px] text-[var(--muted)] leading-[1.7]">{w.body}</p>
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
            Cuatro pasos.
          </h2>
          <hr className="border-t border-[var(--border)] mt-12 mb-12" />
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="hidden md:block absolute top-[14px] left-[6%] right-[6%] h-px bg-[var(--border)]" aria-hidden="true" />
            {PROCESS.map((s) => (
              <div key={s.n} className="scroll-reveal relative">
                <div className="font-mono text-[11px] text-[var(--border-strong)] bg-[var(--bg)] inline-block pr-3 mb-5">{s.n}</div>
                <h3 className="font-display font-medium text-[18px] text-[var(--text)] tracking-[-0.01em] mb-3">{s.title}</h3>
                <p className="font-sans font-light text-[14px] text-[var(--muted)] leading-[1.7]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-[var(--surface)] border-y border-[var(--border)] py-[100px] px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">La garantía</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            Top 3 en Google Maps en 90 días.{' '}
            <span className="text-[var(--accent)]">O seguimos trabajando sin costo extra.</span>
          </h2>
          <p className="scroll-reveal mt-6 font-sans font-light text-[16px] text-[var(--muted)] leading-[1.65] max-w-[560px] mx-auto">
            No es un eslogan. Es un compromiso contractual. Si no llegamos al
            top 3 en tu categoría dentro de 90 días, continuamos el servicio
            gratis hasta lograrlo.
          </p>
          <a href={CAL_URL} target="_blank" rel="noreferrer" className="scroll-reveal mt-10 inline-flex items-center bg-[var(--accent)] text-white rounded-full px-7 py-3 font-sans font-medium text-[14px] transition-all duration-200 hover:bg-[var(--accent-deep)] hover:shadow-[0_0_24px_rgba(45,79,255,0.35)]">
            Empieza hoy →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--bg)] py-[120px] px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Preguntas</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)] mb-12">
            Preguntas frecuentes.
          </h2>
          <div>
            {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section id="contacto" className="bg-[var(--surface)] py-[120px] px-6 md:px-12">
        <div className="max-w-[960px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Trabajemos juntos</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(36px,5vw,48px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            ¿Listo para aparecer en Google Maps?
          </h2>
          <p className="scroll-reveal mt-6 font-sans font-light text-[16px] text-[var(--muted)] leading-[1.65] max-w-[520px]">
            Agenda una llamada de 30 minutos. Sin presión, solo una
            conversación sobre lo que necesita tu negocio.
          </p>
          <div className="scroll-reveal mt-12"><CalEmbed /></div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
