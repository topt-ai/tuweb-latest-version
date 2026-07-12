'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useLenis } from '../scroll-reveal';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import ElSalvadorMap from '../components/ElSalvadorMap';
import LiveRankingFeed from '../components/LiveRankingFeed';
import ContactForm from '../components/ContactForm';
import { WHATSAPP_URL } from '../whatsapp';

const PROJECTS = [
  {
    client: 'The Tooth Boutique',
    tags: ['Sitio web', 'SEO local'],
    result: 'Top 3 en Google Maps para "ortodoncista san salvador".',
    img: '/tooth1.png',
    hoverImg: '/tooth2.png',
    href: 'https://www.thetoothboutique.com/',
    cta: 'Ver sitio',
  },
  {
    client: 'Jarvis Real Estate',
    tags: ['Sitio web', 'Demo'],
    result: 'Demo para agentes inmobiliarios en El Salvador. Listings y contacto por WhatsApp.',
    img: '/jarvis1.png',
    hoverImg: '/jarvis2.png',
    href: 'https://jarvisrealty.tuwebsv.com/',
    cta: 'Ver demo',
  },
  {
    client: 'Bisou Munchies',
    tags: ['Sitio web'],
    result: 'Sitio para marca de postres en Nicaragua.',
    img: '/bisoutuweb.webp',
    hoverImg: null as string | null,
    href: 'https://bisoumunchies.com/',
    cta: 'Ver sitio',
  },
  {
    client: 'Top Google Places',
    tags: ['SEO local'],
    result: 'The Tooth Boutique entre las primeras opciones al buscar clínicas de ortodoncia en San Salvador.',
    img: '/project_mapstooth.png',
    hoverImg: null as string | null,
    href: null as string | null,
    cta: null as string | null,
  },
  {
    client: 'VOID',
    tags: ['Sitio web', 'Marca'],
    result: 'Agencia de marketing y desempeño.',
    img: '/project_void2.png',
    hoverImg: null as string | null,
    href: null as string | null,
    cta: null as string | null,
  },
];

export default function Home() {
  const sitiosCountersRef = useRef<HTMLDivElement>(null);

  useLenis();

  // Scroll-triggered reveals + numeric counters. Hero entrance is pure CSS
  // (see `.hero-fade-up*` in index.css) so it can't get stranded.
  useEffect(() => {
    const tweens: gsap.core.Tween[] = [];

    document.querySelectorAll<HTMLElement>('.scroll-reveal').forEach((el) => {
      tweens.push(
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        )
      );
    });

    if (sitiosCountersRef.current) {
      sitiosCountersRef.current.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
        const target = parseFloat(el.dataset.counter || '0');
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const obj = { v: 0 };
        tweens.push(
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
            onUpdate: () => {
              el.textContent = `${prefix}${obj.v.toFixed(decimals)}${suffix}`;
            },
          })
        );
      });
    }

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      <SiteNav current="home" />

      {/* HERO */}
      <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-end pb-24 md:pb-32 px-6 md:px-12">
        {/* Below xl: map as a low-opacity backdrop behind the text */}
        <div className="xl:hidden absolute inset-x-[-8%] top-[18%] bottom-[12%] pointer-events-none opacity-[0.16]">
          <ElSalvadorMap />
        </div>
        {/* xl+: map docked right at full strength */}
        <div className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 w-[44%] max-w-[640px] aspect-[375/230] pointer-events-none">
          <ElSalvadorMap />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto">
          <h1 className="hero-fade-up hero-fade-up-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--border-strong)] mb-6">
            Agencia de Marketing en San Salvador
          </h1>

          <p
            className="font-display font-bold leading-[1.02] tracking-[-0.02em] text-[var(--text)]"
            style={{ fontSize: 'clamp(44px, 7.5vw, 88px)' }}
          >
            <span className="hero-fade-up hero-fade-up-2 block">Visible o invisible.</span>
            <span className="hero-fade-up hero-fade-up-3 block">No hay intermedios.</span>
          </p>

          <p className="hero-fade-up hero-fade-up-4 mt-6 font-sans font-light text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.65] max-w-[480px]">
            Construimos sitios. Mejoramos tu posición en Google.
            Cada uno funciona solo, juntos funcionan mejor.
          </p>

          <div className="hero-fade-up hero-fade-up-5 mt-10 flex flex-wrap items-center gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-[var(--accent)] text-white rounded-full px-7 py-3 font-sans font-medium text-[14px] transition-all duration-200 hover:bg-[var(--accent-deep)] hover:shadow-[0_0_24px_rgba(45,79,255,0.35)]"
            >
              Contáctanos
            </a>
            <a
              href="#trabajo"
              className="font-sans font-normal text-[14px] text-[var(--accent)] hover:underline underline-offset-4"
            >
              Ver trabajo →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="relative bg-[var(--bg)] py-[120px] px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">
            Qué hacemos
          </div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            3 servicios principales.
          </h2>
          <hr className="border-t border-[var(--border)] mt-12 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sitios Web */}
            <div className="scroll-reveal rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-10 transition-all duration-200 hover:border-[var(--border-strong)] hover:-translate-y-1">
              <div className="font-mono text-[11px] text-[var(--muted)] mb-6">01</div>
              <h3 className="font-display font-bold text-[28px] md:text-[32px] tracking-[-0.01em] text-[var(--text)] mb-5">Sitios Web</h3>
              <p className="font-sans font-light text-[16px] text-[var(--muted)] leading-[1.7] max-w-[440px]">
                Sitios construidos para representar bien tu negocio y convertir
                visitas en clientes. Sin plantillas genéricas.
              </p>
              <div className="flex flex-wrap gap-2 mt-7">
                {['Carga rápida', 'Sitios completos con base de datos', 'Listo para Google', 'Móvil y escritorio'].map((t) => (
                  <span key={t} className="font-mono text-[11px] text-[var(--muted)] border border-[var(--border)] rounded-full px-3 py-1">{t}</span>
                ))}
              </div>
              <div ref={sitiosCountersRef} className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-7">
                <div>
                  <div data-counter="2" data-prefix="< " data-suffix="s" data-decimals="0" className="font-display font-bold text-[26px] md:text-[28px] text-[var(--accent)] leading-none">{'< 0s'}</div>
                  <div className="mt-2 font-sans font-light text-[12px] text-[var(--muted)]">Tiempo de carga</div>
                </div>
                <div>
                  <div data-counter="98" data-decimals="0" className="font-display font-bold text-[26px] md:text-[28px] text-[var(--accent)] leading-none">0</div>
                  <div className="mt-2 font-sans font-light text-[12px] text-[var(--muted)]">PageSpeed</div>
                </div>
                <div>
                  <div data-counter="100" data-suffix="%" data-decimals="0" className="font-display font-bold text-[26px] md:text-[28px] text-[var(--accent)] leading-none">0%</div>
                  <div className="mt-2 font-sans font-light text-[12px] text-[var(--muted)]">Código propio</div>
                </div>
              </div>
              <a href="/paginas-web" className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] hover:underline underline-offset-4">Ver detalle →</a>
            </div>

            {/* SEO Local */}
            <div className="scroll-reveal rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-10 transition-all duration-200 hover:border-[var(--border-strong)] hover:-translate-y-1">
              <div className="font-mono text-[11px] text-[var(--muted)] mb-6">02</div>
              <h3 className="font-display font-bold text-[28px] md:text-[32px] tracking-[-0.01em] text-[var(--text)] mb-5">SEO Local</h3>
              <p className="font-sans font-light text-[16px] text-[var(--muted)] leading-[1.7] max-w-[440px]">
                Hacemos que tu negocio aparezca cuando alguien busca lo que
                ofreces, en tu zona. Google Maps, búsquedas, todo.
              </p>
              <div className="flex flex-wrap gap-2 mt-7">
                {['Perfil de Google', 'Autoridad local', 'Arreglos de fondo', 'Reseñas'].map((t) => (
                  <span key={t} className="font-mono text-[11px] text-[var(--muted)] border border-[var(--border)] rounded-full px-3 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-10 border-t border-[var(--border)] pt-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="status-pulse w-[8px] h-[8px] rounded-full bg-[var(--pulse)] shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">En vivo</span>
                </div>
                <LiveRankingFeed />
              </div>
              <a href="/seo-local" className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] hover:underline underline-offset-4">Ver detalle →</a>
            </div>

            {/* Google & Meta Ads */}
            <div className="scroll-reveal rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-10 transition-all duration-200 hover:border-[var(--border-strong)] hover:-translate-y-1">
              <div className="font-mono text-[11px] text-[var(--muted)] mb-6">03</div>
              <h3 className="font-display font-bold text-[28px] md:text-[32px] tracking-[-0.01em] text-[var(--text)] mb-5">Google &amp; Meta Ads</h3>
              <p className="font-sans font-light text-[16px] text-[var(--muted)] leading-[1.7] max-w-[440px]">
                Campañas en Google, Facebook e Instagram. Cada dólar
                invertido trabaja al máximo. Resultados desde el primer mes.
              </p>
              <div className="flex flex-wrap gap-2 mt-7">
                {['Google Ads', 'Facebook Ads', 'Instagram Ads', 'Reportes claros'].map((t) => (
                  <span key={t} className="font-mono text-[11px] text-[var(--muted)] border border-[var(--border)] rounded-full px-3 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-10 border-t border-[var(--border)] pt-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="status-pulse w-[8px] h-[8px] rounded-full bg-[var(--pulse)] shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">Campañas activas</span>
                </div>
                <div className="grid grid-cols-2 gap-4 font-mono text-[12px]">
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                    <span className="text-[var(--muted)]">Google</span>
                    <span className="text-[var(--accent)]">CPC −18%</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                    <span className="text-[var(--muted)]">Meta</span>
                    <span className="text-[var(--accent)]">CTR 3.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--muted)]">Leads/mes</span>
                    <span className="text-[var(--text)]">+47</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--muted)]">ROAS</span>
                    <span className="text-[var(--text)]">4.1×</span>
                  </div>
                </div>
              </div>
              <a href="/google-meta-ads" className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] hover:underline underline-offset-4">Ver detalle →</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRABAJO */}
      <section id="trabajo" className="relative bg-[var(--bg)] py-[120px] px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Trabajo</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            Resultados, no mockups.
          </h2>
          <hr className="border-t border-[var(--border)] mt-12 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <article
                key={p.client}
                className="scroll-reveal group rounded-[16px] bg-[var(--surface)] border border-[var(--border)] overflow-hidden transition-all duration-200 hover:border-[var(--border-strong)]"
              >
                <div className="relative bg-[var(--bg)] border-b border-[var(--border)] overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                  <Image
                    src={p.img}
                    alt={p.client}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${p.hoverImg ? 'group-hover:opacity-0' : ''}`}
                  />
                  {p.hoverImg && (
                    <Image
                      src={p.hoverImg}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] text-[var(--muted)] border border-[var(--border)] rounded-full px-2.5 py-0.5">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display font-medium text-[18px] text-[var(--text)] mb-2 tracking-[-0.01em]">{p.client}</h3>
                  <p className="font-sans font-light text-[13px] text-[var(--muted)] leading-[1.6] mb-5">{p.result}</p>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer" className="inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] hover:underline underline-offset-4">
                      {p.cta} →
                    </a>
                  ) : (
                    <span className="inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Caso interno</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="relative bg-[var(--bg)] py-[120px] px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">El proceso</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(32px,4.5vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            Simple, de principio a fin.
          </h2>
          <hr className="border-t border-[var(--border)] mt-12 mb-12" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="hidden md:block absolute top-[14px] left-[8%] right-[8%] h-px bg-[var(--border)]" aria-hidden="true" />
            {[
              { n: '01', title: 'Hablamos', body: 'Una llamada. Nos dices qué necesita tu negocio, te decimos qué haríamos y cuánto cuesta.' },
              { n: '02', title: 'Construimos', body: 'Sitio, SEO, o ambos. Trabajo real, no plantillas ni promesas vagas.' },
              { n: '03', title: 'Apareces', body: 'Tu negocio visible donde tus clientes están buscando. Así de simple.' },
            ].map((s) => (
              <div key={s.n} className="scroll-reveal relative">
                <div className="font-mono text-[11px] text-[var(--border-strong)] bg-[var(--bg)] inline-block pr-3 mb-5">{s.n}</div>
                <h3 className="font-display font-medium text-[20px] text-[var(--text)] mb-3 tracking-[-0.01em]">{s.title}</h3>
                <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.7] max-w-[300px]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section id="contacto" className="relative bg-[var(--surface)] py-[120px] px-6 md:px-12">
        <div className="max-w-[960px] mx-auto">
          <div className="scroll-reveal font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-5">Trabajemos juntos</div>
          <h2 className="scroll-reveal font-display font-bold text-[clamp(40px,6vw,56px)] leading-[1.05] tracking-[-0.02em] text-[var(--text)]">
            ¿Listo para aparecer?
          </h2>
          <p className="scroll-reveal mt-6 font-sans font-light text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.65] max-w-[520px]">
            Cuéntanos qué necesita tu negocio. Sin presión, solo una
            conversación sobre lo que necesitas.
          </p>

          <div className="scroll-reveal mt-12">
            <ContactForm />
          </div>

          <p className="scroll-reveal mt-8 font-sans font-light text-[14px] text-[var(--muted)]">
            ¿Prefieres WhatsApp?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline underline-offset-4">
              Escríbenos
            </a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
