'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { WHATSAPP_URL } from '../whatsapp';

type Props = { open: boolean; onClose: () => void; id?: string };

export default function MobileMenu({ open, onClose, id = 'mobile-menu' }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Menú principal"
      className="fixed inset-0 z-[100] bg-[var(--bg)] flex flex-col p-8"
    >
      <div className="flex justify-between items-center mb-12">
        <a href="/" className="font-display font-medium tracking-[0.04em] text-[var(--text)]">TuWebSV</a>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar menú"
          className="text-[var(--text)]"
        >
          <X size={28} aria-hidden="true" />
        </button>
      </div>
      <nav className="flex flex-col gap-7 font-sans font-light text-[22px] text-[var(--text)]">
        <a href="/#trabajo" onClick={onClose}>Trabajo</a>
        <a href="/#servicios" onClick={onClose}>Servicios</a>
        <div className="flex flex-col gap-3 pl-4 border-l border-[var(--border)]">
          <a href="/seo-local" className="text-[17px] text-[var(--muted)]" onClick={onClose}>SEO Local</a>
          <a href="/paginas-web" className="text-[17px] text-[var(--muted)]" onClick={onClose}>Páginas Web</a>
          <a href="/google-meta-ads" className="text-[17px] text-[var(--muted)]" onClick={onClose}>Google &amp; Meta Ads</a>
        </div>
        <a href="/contacto" onClick={onClose}>Contacto</a>
      </nav>
      <div className="mt-10">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={onClose}
          className="inline-flex items-center justify-center bg-[var(--accent)] text-white rounded-full px-6 py-3 font-sans font-medium text-[14px] transition-colors duration-200 hover:bg-[var(--accent-deep)]"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
}
