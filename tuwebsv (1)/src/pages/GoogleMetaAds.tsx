import { useSeo, SITE_URL, ORG_SCHEMA, serviceSchema, breadcrumbSchema } from '../seo';
import { useLenis, useScrollReveal, useRootRef } from '../scroll-reveal';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import FaqItem from '../components/FaqItem';
import CalEmbed, { CAL_URL } from '../components/CalEmbed';
import AdsMetricsDemo from '../components/AdsMetricsDemo';

const FAQS = [
  { q: '¿Cuánto presupuesto mínimo necesito para empezar?', a: 'Puedes empezar desde $1 a $5 diarios. Según el sector, ver resultados puede costar más, y entre mayor presupuesto diario, más resultados verás.' },
  { q: '¿El presupuesto de los anuncios va directo a Google o Meta?', a: 'Sí. Tú pagas directamente a Google o Meta con tu tarjeta. Nosotros cobramos una tarifa mensual fija por gestionar, optimizar y reportar tus campañas. Así sabes exactamente cuánto va a publicidad y cuánto a gestión, sin sorpresas.' },
  { q: '¿Necesito tener fotos o videos profesionales?', a: 'No. Trabajamos con lo que tienes. Si necesitas contenido adicional, te recomendamos opciones simples y económicas, pero no es un requisito para empezar.' },
  { q: '¿Cuándo empiezo a ver resultados?', a: 'Google Ads puede generar resultados desde los primeros días. Meta Ads toma un poco más porque primero necesita aprender a quién mostrarle tus anuncios.' },
  { q: '¿Puedo pausar o cancelar en cualquier momento?', a: 'Sí. No manejamos contratos largos. Si en algún momento quieres pausar o parar, lo hacemos sin problema.' },
];

const WHAT = [
  { n: '01', title: 'Google Ads para búsquedas con intención', body: 'Apareces justo cuando alguien busca lo que ofreces. Configuramos campañas con palabras clave que generan clientes, no clics vacíos.' },
  { n: '02', title: 'Meta Ads para audiencias correctas', body: 'Facebook e Instagram para llegar a tu cliente ideal. Trabajamos creatividades, audiencias y mensajes hasta encontrar lo que convierte.' },
  { n: '03', title: 'Optimización continua', body: 'Cada semana revisamos qué funciona y qué no. Reasignamos presupuesto, ajustamos audiencias y mejoramos resultados mes a mes.' },
];

const PROCESS = [
  { n: '01', title: 'Diagnóstico', body: 'Revisamos tu negocio, tu cliente y qué plataforma tiene más sentido. Definimos presupuesto y objetivos claros.' },
  { n: '02', title: 'Configuración', body: 'Creamos las cuentas, instalamos el seguimiento correcto y lanzamos las primeras campañas.' },
  { n: '03', title: 'Optimización', body: 'Semana a semana ajustamos para mejorar costo por cliente. Te enviamos reportes con números reales.' },
];

export default function GoogleMetaAds() {
  useSeo({
    title: 'Mejor Agencia de Google Ads y Meta Ads en San Salvador | Publicidad Digital cerca de mí - TuWebSV',
    description: 'Gestión de campañas publicitarias en Google Ads, Facebook e Instagram para negocios locales en San Salvador y El Salvador. Cada dólar invertido trabaja al máximo.',
    canonical: `${SITE_URL}/google-meta-ads`,
    ogTitle: 'Google Ads y Meta Ads San Salvador | TuWebSV',
    ogDescription: 'Campañas de publicidad en Google, Facebook e Instagram gestionadas para negocios locales en El Salvador.',
    jsonLd: [
      ORG_SCHEMA,
      serviceSchema({
        name: 'Google Ads y Meta Ads San Salvador',
        description: 'Gestión de campañas publicitarias en Google, Facebook e Instagram para negocios locales en El Salvador.',
        url: `${SITE_URL}/google-meta-ads`,
      }),
      breadcrumbSchema([
        { name: 'Inicio', url: `${SITE_URL}/` },
        { name: 'Google & Meta Ads San Salvador', url: `${SITE_URL}/google-meta-ads` },
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
        {/* Below xl: metrics demo as a low-opacity backdrop */}
        <div className="xl:hidden absolute inset-x-0 top-[22%] bottom-[14%] pointer-events-none opacity-[0.18] flex items-center justify-center">
          <AdsMetricsDemo />
        </div>
        {/* xl+: metrics demo docked right, pulled in toward center */}
        <div className="hidden xl:flex absolute right-[6%] top-1/2 -translate-y-1/2 w-[38%] max-w-[360px] justify-center pointer-events-none">
          <AdsMetricsDemo />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mb-3">
            Inicio &nbsp;/&nbsp; Servicios &nbsp;/&nbsp; Google &amp; Meta Ads
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-6">
            Google Ads · Meta Ads · Publicidad Digital
          </div>
          <h1 className="font-display font-bold leading-[1.02] tracking-[-0.02em] text-[var(--text)] xl:max-w-[760px]" style={{ fontSize: 'clamp(44px, 7.5vw, 88px)' }}>
            Genera clientes
            <span className="block text-[var(--accent)]">o quema presupuesto.</span>
          </h1>
          <p className="mt-6 font-sans font-light text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.65] max-w-[560px]">
            Campañas en Google, Facebook e Instagram gestionadas para que cada
            dólar invertido trabaje.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
            <span>Sin contratos largos</span>
            <span className="text-[var(--border-strong)]">·</span>
            <span>Tu pagas a Google/Meta directo</span>
            <span className="text-[var(--border-strong)]">·</span>
            <span>Reportes mensuales</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href={CAL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center bg-[var(--accent)] text-white rounded-full px-7 py-3 font-sans font-medium text-[14px] transition-all duration-200 hover:bg-[var(--accent-deep)] hover:shadow-[0_0_24px_rgba(45,79,255,0.35)]">
              Consulta gratis
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
            Anuncios, sin complicaciones.
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

      {/* GOOGLE VS META */}
      <section className="bg-[var(--bg)] py-[120px] px-6 md:px-12 border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Google vs Meta</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            Dos formas de llegar. Elegimos la que te sirve.
          </h2>
          <hr className="border-t border-[var(--border)] mt-12 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Google Ads */}
            <div className="scroll-reveal rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-8 md:p-10">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-[8px] h-[8px] rounded-full bg-[var(--accent)]" />
                <h3 className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--text)]">Google Ads</h3>
              </div>
              <p className="font-sans font-light italic text-[13px] text-[var(--muted)] mb-7">
                Para personas que ya están buscando lo que ofreces.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'El cliente ya quiere comprar. Apareces justo cuando te busca.',
                  'Funciona mejor para servicios con demanda activa: dentistas, abogados, talleres, restaurantes.',
                  'Pagas solo cuando alguien hace clic en tu anuncio.',
                  'Resultados desde los primeros días de campaña.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 font-sans font-light text-[15px] text-[var(--muted)] leading-[1.6]">
                    <span className="text-[var(--accent)] mt-[-1px]">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meta Ads */}
            <div className="scroll-reveal rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-8 md:p-10">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-[8px] h-[8px] rounded-full bg-[var(--accent)]" />
                <h3 className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--text)]">Meta Ads</h3>
              </div>
              <p className="font-sans font-light italic text-[13px] text-[var(--muted)] mb-7">
                Para personas que todavía no saben que te necesitan.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'El cliente está navegando. Tu anuncio aparece y despierta el interés.',
                  'Funciona mejor para reconocimiento, ofertas especiales y remarketing.',
                  'Llegas a personas por intereses, edad, zona y comportamiento.',
                  'Ideal para construir audiencia y reactivar contactos que ya te conocen.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 font-sans font-light text-[15px] text-[var(--muted)] leading-[1.6]">
                    <span className="text-[var(--accent)] mt-[-1px]">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content disclaimer */}
          <div className="scroll-reveal mt-6 rounded-[16px] border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] mb-3">Sobre el contenido</div>
            <p className="font-sans font-light text-[15px] md:text-[16px] text-[var(--muted)] leading-[1.75] max-w-[760px]">
              No producimos video ni hacemos sesiones de fotos. Trabajamos con el
              material que ya tienes. Donde sí te ayudamos es en lo más importante
              de cada anuncio: el mensaje. Te guiamos con el copy y el enfoque para
              que cada campaña diga lo correcto y conecte con tu cliente.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" className="bg-[var(--bg)] py-[120px] px-6 md:px-12 border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Proceso</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            Tres pasos. Mes a mes.
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
            ¿Listo para que cada dólar trabaje?
          </h2>
          <p className="scroll-reveal mt-6 font-sans font-light text-[16px] text-[var(--muted)] leading-[1.65] max-w-[520px]">
            Agenda una llamada. Definimos juntos qué plataforma tiene más
            sentido para tu negocio, con qué presupuesto, y qué esperar.
          </p>
          <div className="scroll-reveal mt-12"><CalEmbed /></div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
