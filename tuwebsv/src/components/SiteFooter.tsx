export default function SiteFooter() {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1 — Brand + address */}
          <div>
            <a href="/" className="font-sans font-medium text-[15px] tracking-[0.02em] text-[var(--text)]">TuWebSV</a>
            <p className="mt-4 font-sans font-light text-[13px] text-[var(--muted)] max-w-[220px]">
              Sitios web y SEO local para negocios en El Salvador.
            </p>
            <address className="not-italic mt-4 font-sans font-light text-[13px] text-[var(--muted)] leading-[1.7]">
              San Salvador, El Salvador<br />
              <a href="tel:+50372018215" className="hover:text-[var(--text)] transition-colors">+503 7201 8215</a><br />
              <a href="mailto:hola@tuwebsv.com" className="hover:text-[var(--text)] transition-colors">hola@tuwebsv.com</a>
            </address>
          </div>

          {/* Col 2 — Servicios */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] mb-5">Servicios</h4>
            <ul className="flex flex-col gap-3 font-sans font-light text-[13px] text-[var(--muted)]">
              <li><a href="/paginas-web" className="hover:text-[var(--text)] transition-colors">Sitios web</a></li>
              <li><a href="/seo-local" className="hover:text-[var(--text)] transition-colors">SEO local</a></li>
              <li><a href="/google-meta-ads" className="hover:text-[var(--text)] transition-colors">Google &amp; Meta Ads</a></li>
            </ul>
          </div>

          {/* Col 3 — Empresa */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] mb-5">Empresa</h4>
            <ul className="flex flex-col gap-3 font-sans font-light text-[13px] text-[var(--muted)]">
              <li><a href="/nosotros" className="hover:text-[var(--text)] transition-colors">Nosotros</a></li>
              <li><a href="/contacto" className="hover:text-[var(--text)] transition-colors">Contacto</a></li>
              <li><a href="/politicas" className="hover:text-[var(--text)] transition-colors">Políticas</a></li>
            </ul>
          </div>

          {/* Col 4 — Contacto */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] mb-5">Contacto</h4>
            <ul className="flex flex-col gap-3 font-sans font-light text-[13px] text-[var(--muted)]">
              <li><a href="mailto:hola@tuwebsv.com" className="hover:text-[var(--text)] transition-colors">hola@tuwebsv.com</a></li>
              <li><a href="https://wa.me/50372018215" target="_blank" rel="noreferrer" className="hover:text-[var(--text)] transition-colors">+503 7201 8215</a></li>
              <li>Lun a Sáb, 8:00 a 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-sans font-light text-[13px] text-[var(--muted)]">© 2026 TuWebSV</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--border-strong)]">
            Visible o invisible.
          </div>
        </div>
      </div>
    </footer>
  );
}
