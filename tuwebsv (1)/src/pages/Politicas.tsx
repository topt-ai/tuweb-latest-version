import { useEffect, useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

export default function Politicas() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Set Title and Meta
  useEffect(() => {
    document.title = "Política de Privacidad y Términos de Servicio | TuWebSV";
    
    // Add meta robots noindex, nofollow
    let metaRobots = document.querySelector('meta[name="robots"]');
    let metaCreated = false;
    
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
      metaCreated = true;
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');
    
    return () => {
      if (metaCreated && metaRobots) {
        document.head.removeChild(metaRobots);
      } else if (metaRobots) {
        // We aren't removing it if it was preexisting, but we might want to revert its content?
        // Let's keep it simple.
        metaRobots.setAttribute('content', 'index, follow'); // restore a default just in case
      }
    };
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-[var(--text)] bg-[var(--bg)] font-sans selection:bg-[var(--terra)] selection:text-[var(--surface)] flex flex-col">
      
      {/* NAVBAR */}
      <nav 
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[960px] rounded-[50px] transition-all duration-400 flex items-center justify-between px-6 py-3 ${
          isScrolled 
            ? 'bg-[rgba(245,240,232,0.92)] backdrop-blur-[20px] border border-[rgba(26,26,24,0.15)] shadow-[0_4px_20px_rgba(26,26,24,0.08)]' 
            : 'bg-[rgba(245,240,232,0.15)] backdrop-blur-[8px] border border-[rgba(26,26,24,0.1)]'
        }`}
      >
        <a href="/" className="font-sans font-bold tracking-[0.08em] text-[var(--green)]">TUWEBSV</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-[15px]">
          <a href="/#inicio" className="hover:text-[var(--terra)] transition-colors">Inicio</a>
          <div className="relative group">
            <a href="/#servicios" className="flex items-center gap-1 hover:text-[var(--terra)] transition-colors py-2">Servicios</a>
            <div className="absolute top-[100%] left-[-20px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-3 px-2 min-w-[200px] border border-[rgba(26,26,24,0.05)] flex flex-col">
                <a href="/seo-local" className="font-sans text-[14px] text-[var(--text)] hover:bg-[#F5F5F5] hover:text-[var(--terra)] rounded-[8px] px-3 py-2 transition-colors">SEO Local (Google Maps)</a>
                <a href="/paginas-web" className="font-sans text-[14px] text-[var(--text)] hover:bg-[#F5F5F5] hover:text-[var(--terra)] rounded-[8px] px-3 py-2 transition-colors">Diseño de Páginas Web</a>
                <a href="/google-meta-ads" className="font-sans text-[14px] text-[var(--text)] hover:bg-[#F5F5F5] hover:text-[var(--terra)] rounded-[8px] px-3 py-2 transition-colors">Google & Meta Ads</a>
              </div>
            </div>
          </div>
          <a href="/nosotros" className="hover:text-[var(--terra)] transition-colors">Nosotros</a>
          <a href="/contacto" className="hover:text-[var(--terra)] transition-colors">Contacto</a>
        </div>
        
        <div className="hidden md:block">
          <a href="/contacto" className="bg-[var(--green)] text-[#F5F0E8] rounded-full px-5 py-2.5 font-sans font-bold text-[14px] hover:bg-[#152e23] transition-colors">
            Consulta gratis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[var(--dark)]" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--bg)] flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <a href="/" className="font-sans font-bold tracking-[0.08em] text-[var(--green)]">TUWEBSV</a>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--dark)]">
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-sans font-medium">
            <a href="/#inicio" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
            <div className="flex flex-col gap-4">
              <a href="/#servicios" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a>
              <a href="/seo-local" className="text-[18px] text-[var(--muted)] pl-4 border-l-2 border-[rgba(26,26,24,0.1)]" onClick={() => setIsMobileMenuOpen(false)}>SEO Local</a>
              <a href="/paginas-web" className="text-[18px] text-[var(--muted)] pl-4 border-l-2 border-[rgba(26,26,24,0.1)]" onClick={() => setIsMobileMenuOpen(false)}>Páginas Web</a>
              <a href="/google-meta-ads" className="text-[18px] text-[var(--muted)] pl-4 border-l-2 border-[rgba(26,26,24,0.1)]" onClick={() => setIsMobileMenuOpen(false)}>Google & Meta Ads</a>
            </div>
            <a href="/nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
            <a href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-[160px] pb-[80px] px-[5%] max-w-[720px] mx-auto w-full">
        <h1 className="sr-only">Política de Privacidad y Términos de Servicio</h1>
        
        <div className="flex items-center gap-6 mb-12">
          <a href="#privacidad" className="font-mono text-[12px] text-[var(--terra)] hover:underline">&rarr; Política de Privacidad</a>
          <a href="#terminos" className="font-mono text-[12px] text-[var(--terra)] hover:underline">&rarr; Términos de Servicio</a>
        </div>

        <div className="w-full h-[1px] bg-[rgba(26,26,24,0.08)] mb-12"></div>

        {/* SECTION 1: PRIVACIDAD */}
        <section id="privacidad" className="mb-[80px]">
          <h2 className="font-sans font-bold text-[clamp(28px,4vw,36px)] text-[var(--text)] mb-3">Política de Privacidad</h2>
          <div className="font-mono text-[11px] text-[var(--muted)] mb-8 uppercase tracking-wider">
            Actualizado: enero 2025
          </div>
          
          <div className="flex flex-col gap-6 font-sans font-light text-[16px] text-[var(--muted)] leading-[1.8]">
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">¿Quién recopila tu información?</strong>
              TuWebSV es un servicio de marketing digital con sede en San Salvador, El Salvador. Somos responsables del tratamiento de los datos que compartes con nosotros a través de este sitio web.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">¿Qué información recopilamos?</strong>
              Recopilamos únicamente la información que tú nos proporcionas voluntariamente: nombre, correo electrónico, número de teléfono y cualquier detalle que compartas al agendar una consulta o escribirnos directamente.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">¿Para qué usamos tu información?</strong>
              Usamos tu información exclusivamente para: responder a tu consulta, coordinar reuniones o llamadas, y enviarte información relevante sobre nuestros servicios si así lo solicitas. No enviamos correos masivos ni publicidad no solicitada.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">¿Compartimos tu información con terceros?</strong>
              No vendemos, alquilamos ni compartimos tu información personal con terceros. Utilizamos Calendly para gestionar agendas y WhatsApp para comunicación directa. Ambas plataformas tienen sus propias políticas de privacidad independientes.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">Cookies</strong>
              Este sitio puede usar cookies técnicas básicas para su funcionamiento. No usamos cookies de seguimiento ni publicidad de terceros en este sitio.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">Tus derechos</strong>
              Puedes solicitar en cualquier momento la eliminación o corrección de tus datos escribiéndonos a <a href="mailto:hola@tuwebsv.com" className="text-[var(--terra)] hover:underline">hola@tuwebsv.com</a>. Respondemos en un plazo máximo de 5 días hábiles.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">Contacto</strong>
              Para cualquier consulta sobre privacidad: <a href="mailto:hola@tuwebsv.com" className="text-[var(--terra)] hover:underline">hola@tuwebsv.com</a>
            </div>
          </div>
        </section>

        <div className="w-full h-[1px] bg-[rgba(26,26,24,0.08)] mb-12"></div>

        {/* SECTION 2: TERMINOS */}
        <section id="terminos">
          <h2 className="font-sans font-bold text-[clamp(28px,4vw,36px)] text-[var(--text)] mb-3">Términos de Servicio</h2>
          <div className="font-mono text-[11px] text-[var(--muted)] mb-8 uppercase tracking-wider">
            Actualizado: enero 2025
          </div>
          
          <div className="flex flex-col gap-6 font-sans font-light text-[16px] text-[var(--muted)] leading-[1.8]">
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">Aceptación de términos</strong>
              Al contratar cualquier servicio de TuWebSV, aceptas los términos descritos en este documento. Si tienes preguntas antes de contratar, escríbenos antes de proceder.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">Servicios ofrecidos</strong>
              TuWebSV ofrece servicios de SEO local, gestión de campañas publicitarias en Google y Meta, y diseño de páginas web para negocios. El alcance específico de cada proyecto se define por escrito antes de iniciar.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">Pagos</strong>
              Los servicios se facturan de forma mensual o por proyecto según lo acordado. El pago debe realizarse antes del inicio de cada período o entrega. No se realizan reembolsos una vez iniciado el trabajo del período correspondiente.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">Resultados</strong>
              TuWebSV ofrece una garantía de posicionamiento Top 3 en Google Maps en 90 días para servicios de SEO Local, sujeto a condiciones del mercado y competencia en la zona del cliente. Para otros servicios, los resultados dependen de múltiples factores externos y no pueden garantizarse de forma absoluta.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">Cancelación</strong>
              Cualquiera de las partes puede cancelar el servicio con 15 días de aviso previo por escrito. No manejamos contratos de largo plazo salvo que se acuerde explícitamente.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">Propiedad del trabajo</strong>
              Una vez completado el pago correspondiente, el cliente es dueño del sitio web y los activos digitales entregados. Las cuentas de Google Ads y Meta Ads son siempre propiedad del cliente.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">Limitación de responsabilidad</strong>
              TuWebSV no se hace responsable por cambios en algoritmos de Google o Meta que afecten el rendimiento de campañas activas, ni por interrupciones en servicios de terceros fuera de nuestro control.
            </div>
            
            <div>
              <strong className="font-sans font-bold text-[var(--text)] block mb-1">Contacto</strong>
              Para cualquier consulta sobre estos términos: <a href="mailto:hola@tuwebsv.com" className="text-[var(--terra)] hover:underline">hola@tuwebsv.com</a> &middot; <a href="https://wa.me/50372018215" target="_blank" rel="noreferrer" className="text-[var(--terra)] hover:underline">+503 7201 8215</a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[var(--dark)] pt-[80px] pb-[40px] px-[8%] mt-auto">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-[48px]">
            {/* Col 1 */}
            <div>
              <div className="font-sans font-bold tracking-[0.08em] text-[var(--green)] mb-4">TUWEBSV</div>
              <p className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] mb-4">
                Marketing local que funciona.
              </p>
              <address className="not-italic font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]">
                TuWebSV<br />
                San Salvador, El Salvador<br />
                +503 7201 8215<br />
                <a href="mailto:hola@tuwebsv.com" className="hover:text-[#F5F0E8] transition-colors">hola@tuwebsv.com</a>
              </address>
            </div>
            
            {/* Col 2 */}
            <div>
              <h4 className="font-sans font-medium text-[16px] text-[var(--bg)] mb-6">Servicios</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="/seo-local" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">SEO Local</a></li>
                <li><a href="/google-meta-ads" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Google & Meta Ads</a></li>
                <li><a href="/paginas-web" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Páginas Web</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-sans font-medium text-[16px] text-[var(--bg)] mb-6">Empresa</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="/nosotros" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Nosotros</a></li>
                <li><a href="/contacto" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Contacto</a></li>
                <li><a href="/politicas" className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)] hover:text-[#F5F0E8] transition-colors">Políticas</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-sans font-medium text-[16px] text-[var(--bg)] mb-6">Contacto</h4>
              <ul className="flex flex-col gap-3">
                <li className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]"><a href="mailto:hola@tuwebsv.com" className="hover:text-[#F5F0E8] transition-colors">hola@tuwebsv.com</a></li>
                <li className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]"><a href="https://wa.me/50372018215" target="_blank" rel="noreferrer" className="hover:text-[#F5F0E8] transition-colors">+503 7201 8215</a></li>
                <li className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]">Lun–Sáb 8:00–18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[rgba(245,240,232,0.08)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]">
              © 2026 TuWebSV. Todos los derechos reservados.
            </div>
            <div className="font-sans font-light text-[14px] text-[rgba(245,240,232,0.55)]">
              Creada con orgullo en El Salvador 🇸🇻
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/50372018215" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[999] w-[56px] h-[56px] bg-[var(--terra)] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(196,98,45,0.35)] hover:scale-108 transition-transform duration-200"
      >
        <MessageCircle size={28} />
      </a>

    </div>
  );
}
