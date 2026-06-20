'use client';

import { useLenis, useScrollReveal, useRootRef } from '../scroll-reveal';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import CalEmbed from '../components/CalEmbed';

export default function Contacto() {
  const rootRef = useRootRef();
  useLenis();
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      <SiteNav current="contacto" />

      {/* HERO */}
      <section className="pt-40 pb-12 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-6">Contacto</div>
          <h1 className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-[var(--text)]" style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}>
            Hablemos de tu negocio.
          </h1>
          <p className="mt-6 font-sans font-light text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.65] max-w-[560px]">
            Agenda una videollamada gratuita de 30 minutos. Te decimos
            exactamente qué está fallando en tu presencia digital y qué hacer
            para solucionarlo.
          </p>
        </div>
      </section>

      {/* CALENDLY + CONTACT METHODS */}
      <section className="bg-[var(--bg)] py-16 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div className="scroll-reveal">
            <CalEmbed />
          </div>
          <aside className="scroll-reveal flex flex-col gap-4">
            <div className="rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] mb-3">WhatsApp</div>
              <a href="https://wa.me/50372018215" target="_blank" rel="noreferrer" className="font-display font-medium text-[20px] text-[var(--text)] hover:text-[var(--accent)] transition-colors block">
                +503 7201 8215
              </a>
              <p className="mt-2 font-sans font-light text-[13px] text-[var(--muted)]">Respuesta rápida en horario laboral.</p>
            </div>
            <div className="rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] mb-3">Email</div>
              <a href="mailto:hola@tuwebsv.com" className="font-display font-medium text-[18px] text-[var(--text)] hover:text-[var(--accent)] transition-colors block break-all">
                hola@tuwebsv.com
              </a>
              <p className="mt-2 font-sans font-light text-[13px] text-[var(--muted)]">Para propuestas detalladas.</p>
            </div>
            <div className="rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] mb-3">Horario</div>
              <div className="font-sans font-medium text-[15px] text-[var(--text)]">Lun a Sáb · 8:00 a 18:00</div>
              <p className="mt-2 font-sans font-light text-[13px] text-[var(--muted)]">Hora de El Salvador (GMT−6).</p>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
