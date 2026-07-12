'use client';

import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import ServicesDropdown from './ServicesDropdown';
import { WHATSAPP_URL } from '../whatsapp';

type Props = {
  current?: 'home' | 'servicios' | 'trabajo' | 'nosotros' | 'contacto';
};

export default function SiteNav({ current }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const link = (href: string, label: string, key: string) => (
    <a
      href={href}
      aria-current={current === key ? 'page' : undefined}
      className={`font-sans font-normal text-[14px] transition-colors duration-200 ${
        current === key ? 'text-[var(--text)]' : 'text-[var(--muted)] hover:text-[var(--text)]'
      }`}
    >
      {label}
    </a>
  );

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[940px] rounded-full transition-all duration-300 flex items-center justify-between px-5 py-2.5 ${
          scrolled
            ? 'bg-[rgba(17,19,28,0.85)] backdrop-blur-[12px] border border-[var(--border)]'
            : 'bg-transparent border border-transparent'
        }`}
      >
        <a href="/" className="font-sans font-medium text-[15px] tracking-[0.02em] text-[var(--text)]">
          TuWebSV
        </a>

        <div className="hidden md:flex items-center gap-7">
          {link('/#trabajo', 'Trabajo', 'trabajo')}
          <ServicesDropdown />
          {link('/nosotros', 'Nosotros', 'nosotros')}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center bg-[var(--accent)] text-white rounded-full px-5 py-2 font-sans font-medium text-[13px] transition-all duration-200 hover:bg-[var(--accent-deep)] hover:shadow-[0_0_20px_rgba(45,79,255,0.3)]"
        >
          Contáctanos
        </a>

        <button
          type="button"
          className="md:hidden text-[var(--text)]"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
