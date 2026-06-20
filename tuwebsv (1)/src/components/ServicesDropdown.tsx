import { useEffect, useId, useRef, useState } from 'react';

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', onClick);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        className="flex items-center gap-1 text-[var(--muted)] hover:text-[var(--text)] transition-colors py-2 font-sans font-normal text-[14px]"
      >
        Servicios
      </button>
      <div
        id={menuId}
        role="menu"
        className={`absolute top-[100%] left-[-12px] pt-2 transition-all duration-200 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="bg-[var(--surface)] rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.45)] py-3 px-2 min-w-[220px] border border-[var(--border)] flex flex-col">
          <a role="menuitem" href="/seo-local" className="font-sans text-[13px] text-[var(--muted)] hover:bg-[#0F1119] hover:text-[var(--text)] rounded-[8px] px-3 py-2 transition-colors">SEO Local (Google Maps)</a>
          <a role="menuitem" href="/paginas-web" className="font-sans text-[13px] text-[var(--muted)] hover:bg-[#0F1119] hover:text-[var(--text)] rounded-[8px] px-3 py-2 transition-colors">Diseño de Páginas Web</a>
          <a role="menuitem" href="/google-meta-ads" className="font-sans text-[13px] text-[var(--muted)] hover:bg-[#0F1119] hover:text-[var(--text)] rounded-[8px] px-3 py-2 transition-colors">Google &amp; Meta Ads</a>
        </div>
      </div>
    </div>
  );
}
