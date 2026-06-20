import { useSeo, SITE_URL, ORG_SCHEMA, breadcrumbSchema } from '../seo';
import { CAL_URL } from '../components/CalEmbed';
import { useLenis, useScrollReveal, useRootRef } from '../scroll-reveal';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

const VALUES = [
  { n: '01', title: 'Sin palabras raras', body: 'Si necesitas un diccionario para entender un reporte, no hicimos bien nuestro trabajo. Hablamos en términos de tu negocio, no del nuestro.' },
  { n: '02', title: 'Sin contratos largos', body: 'Si lo que hacemos te funciona, seguimos trabajando. Si no, te lo decimos. Nadie firma con esposas.' },
  { n: '03', title: 'Te respondo yo', body: 'No hay cuentas que rebotan en cinco personas. Hablas conmigo, yo hago el trabajo.' },
];

export default function Nosotros() {
  useSeo({
    title: 'Sobre TuWebSV | Agencia de Marketing Digital en San Salvador, El Salvador',
    description: 'Conoce a Tommy Acevedo, fundador de TuWebSV. Agencia de marketing digital en San Salvador especializada en SEO Local, Google Ads y diseño web para negocios locales.',
    canonical: `${SITE_URL}/nosotros`,
    ogTitle: 'Sobre TuWebSV | Agencia de Marketing Digital en San Salvador',
    ogDescription: 'Conoce a Tommy Acevedo, fundador de TuWebSV. Marketing digital para negocios locales en El Salvador.',
    jsonLd: [
      ORG_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Tommy Acevedo',
        jobTitle: 'Fundador',
        worksFor: { '@id': `${SITE_URL}/#organization` },
        address: { '@type': 'PostalAddress', addressLocality: 'San Salvador', addressCountry: 'SV' },
      },
      breadcrumbSchema([
        { name: 'Inicio', url: `${SITE_URL}/` },
        { name: 'Nosotros', url: `${SITE_URL}/nosotros` },
      ]),
    ],
  });

  const rootRef = useRootRef();
  useLenis();
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      <SiteNav current="nosotros" />

      {/* HERO */}
      <section className="relative min-h-[70vh] w-full flex items-end pb-20 pt-40 px-6 md:px-12 border-b border-[var(--border)]">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-6">Nosotros</div>
          <h1 className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-[var(--text)]" style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}>
            Una persona detrás de cada decisión.
          </h1>
          <p className="mt-6 font-sans font-light text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.65] max-w-[640px]">
            Tú hablas conmigo.
          </p>
        </div>
      </section>

      {/* TOMMY */}
      <section className="bg-[var(--bg)] py-[120px] px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-16 items-center">
          <div className="scroll-reveal">
            <div className="rounded-[16px] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
              <img
                src="/tommyaboutus.webp"
                alt="Tommy Acevedo, fundador de TuWebSV"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="scroll-reveal">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">El que hace el trabajo</div>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,40px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
              Soy Tommy.{' '}
              <span className="text-[var(--accent)]">Tú hablas conmigo. Yo hago el trabajo.</span>
            </h2>
            <p className="mt-6 font-sans font-light text-[16px] text-[var(--muted)] leading-[1.7] max-w-[560px]">
              Arranqué TuWebSV porque quería ayudar a negocios locales de forma
              directa, sin fantasía ni tecnicismos. La mayoría de agencias
              presentan soluciones extensas que terminan agregándole más estrés
              al dueño del negocio. Lo he visto de primera mano.
            </p>
            <p className="mt-4 font-sans font-light text-[16px] text-[var(--muted)] leading-[1.7] max-w-[560px]">
              Me gusta trabajar bien, sin complicaciones innecesarias. La
              mayoría de resultados se logran en la mitad del tiempo que una
              agencia grande te propone.
            </p>
            <p className="mt-4 font-sans font-light text-[16px] text-[var(--muted)] leading-[1.7] max-w-[560px]">
              Antes de arrancar, evalúo si somos buen fit. Si no lo somos, te
              lo digo directo y te doy mis recomendaciones sin costo.
            </p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-[var(--bg)] py-[120px] px-6 md:px-12 border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Cómo trabajamos</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            Tres reglas, sin excepción.
          </h2>
          <hr className="border-t border-[var(--border)] mt-12 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.n} className="scroll-reveal rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-8 transition-colors hover:border-[var(--border-strong)]">
                <div className="font-mono text-[11px] text-[var(--muted)] mb-5">{v.n}</div>
                <h3 className="font-display font-medium text-[20px] text-[var(--text)] tracking-[-0.01em] mb-3">{v.title}</h3>
                <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.7]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--surface)] py-[100px] px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Trabajemos juntos</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            ¿Hablamos?
          </h2>
          <p className="scroll-reveal mt-6 font-sans font-light text-[16px] text-[var(--muted)] leading-[1.65] max-w-[520px] mx-auto">
            Una llamada de 30 minutos. Sin compromiso. Hablamos de tu negocio
            y de qué tiene más sentido para ti.
          </p>
          <a href={CAL_URL} target="_blank" rel="noreferrer" className="scroll-reveal mt-10 inline-flex items-center bg-[var(--accent)] text-white rounded-full px-7 py-3 font-sans font-medium text-[14px] transition-all duration-200 hover:bg-[var(--accent-deep)] hover:shadow-[0_0_24px_rgba(45,79,255,0.35)]">
            Agendar llamada →
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
