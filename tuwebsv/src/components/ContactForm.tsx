'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      phone: String(data.get('phone') || ''),
      email: String(data.get('email') || ''),
      website: String(data.get('website') || ''),
      message: String(data.get('message') || ''),
    };

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('request_failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-10 md:p-12 flex flex-col items-center text-center">
        <span className="status-pulse w-[10px] h-[10px] rounded-full bg-[var(--pulse)] shadow-[0_0_10px_rgba(74,222,128,0.6)] mb-6" />
        <h3 className="font-display font-bold text-[22px] text-[var(--text)] mb-3">
          Mensaje enviado.
        </h3>
        <p className="font-sans font-light text-[15px] text-[var(--muted)] max-w-[380px] leading-[1.6]">
          Nos comunicaremos lo más pronto posible contigo.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-[10px] bg-[var(--bg)] border border-[var(--border)] px-4 py-3 font-sans font-light text-[15px] text-[var(--text)] placeholder:text-[var(--muted)] outline-none transition-colors focus:border-[var(--accent)]';
  const labelClass =
    'font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)] mb-2 block';

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[16px] bg-[var(--surface)] border border-[var(--border)] p-8 md:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className={labelClass}>Nombre</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelClass}>Celular</label>
          <input id="cf-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="+503 0000 0000" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-email" className={labelClass}>Correo</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="tu@correo.com" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-website" className={labelClass}>Sitio web actual <span className="normal-case tracking-normal text-[var(--muted)]">(opcional)</span></label>
          <input id="cf-website" name="website" type="text" autoComplete="url" className={inputClass} placeholder="tusitio.com" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-message" className={labelClass}>¿En qué te ayudamos?</label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Cuéntanos qué necesita tu negocio"
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-5 font-sans font-light text-[13px] text-[var(--accent)]">
          Algo falló al enviar el mensaje. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-7 inline-flex items-center bg-[var(--accent)] text-white rounded-full px-7 py-3 font-sans font-medium text-[14px] transition-all duration-200 hover:bg-[var(--accent-deep)] hover:shadow-[0_0_24px_rgba(45,79,255,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Enviando…' : 'Enviar mensaje'}
      </button>
    </form>
  );
}
