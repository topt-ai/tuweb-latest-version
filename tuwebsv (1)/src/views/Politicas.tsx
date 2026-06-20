import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export default function Politicas() {
  const privacy = [
    { h: '¿Quién recopila tu información?', b: 'TuWebSV es un servicio de marketing digital con sede en San Salvador, El Salvador. Somos responsables del tratamiento de los datos que compartes con nosotros a través de este sitio web.' },
    { h: '¿Qué información recopilamos?', b: 'Recopilamos únicamente la información que tú nos proporcionas voluntariamente: nombre, correo electrónico, número de teléfono y cualquier detalle que compartas al agendar una consulta o escribirnos directamente.' },
    { h: '¿Para qué usamos tu información?', b: 'Usamos tu información exclusivamente para: responder a tu consulta, coordinar reuniones o llamadas, y enviarte información relevante sobre nuestros servicios si así lo solicitas. No enviamos correos masivos ni publicidad no solicitada.' },
    { h: '¿Compartimos tu información con terceros?', b: 'No vendemos, alquilamos ni compartimos tu información personal con terceros. Utilizamos Calendly para gestionar agendas y WhatsApp para comunicación directa. Ambas plataformas tienen sus propias políticas de privacidad independientes.' },
    { h: 'Cookies', b: 'Este sitio puede usar cookies técnicas básicas para su funcionamiento. No usamos cookies de seguimiento ni publicidad de terceros en este sitio.' },
    { h: 'Tus derechos', b: 'Puedes solicitar en cualquier momento la eliminación o corrección de tus datos escribiéndonos a hola@tuwebsv.com. Respondemos en un plazo máximo de 5 días hábiles.' },
    { h: 'Contacto', b: 'Para cualquier consulta sobre privacidad: hola@tuwebsv.com' },
  ];

  const terms = [
    { h: 'Aceptación de términos', b: 'Al contratar cualquier servicio de TuWebSV, aceptas los términos descritos en este documento. Si tienes preguntas antes de contratar, escríbenos antes de proceder.' },
    { h: 'Servicios ofrecidos', b: 'TuWebSV ofrece servicios de SEO local, gestión de campañas publicitarias en Google y Meta, y diseño de páginas web para negocios. El alcance específico de cada proyecto se define por escrito antes de iniciar.' },
    { h: 'Pagos', b: 'Los servicios se facturan de forma mensual o por proyecto según lo acordado. El pago debe realizarse antes del inicio de cada período o entrega. No se realizan reembolsos una vez iniciado el trabajo del período correspondiente.' },
    { h: 'Resultados', b: 'TuWebSV ofrece una garantía de posicionamiento Top 3 en Google Maps en 90 días para servicios de SEO Local, sujeto a condiciones del mercado y competencia en la zona del cliente. Para otros servicios, los resultados dependen de múltiples factores externos y no pueden garantizarse de forma absoluta.' },
    { h: 'Cancelación', b: 'Cualquiera de las partes puede cancelar el servicio con 15 días de aviso previo por escrito. No manejamos contratos de largo plazo salvo que se acuerde explícitamente.' },
    { h: 'Propiedad del trabajo', b: 'Una vez completado el pago correspondiente, el cliente es dueño del sitio web y los activos digitales entregados. Las cuentas de Google Ads y Meta Ads son siempre propiedad del cliente.' },
    { h: 'Limitación de responsabilidad', b: 'TuWebSV no se hace responsable por cambios en algoritmos de Google o Meta que afecten el rendimiento de campañas activas, ni por interrupciones en servicios de terceros fuera de nuestro control.' },
    { h: 'Contacto', b: 'Para cualquier consulta sobre estos términos: hola@tuwebsv.com · +503 7201 8215' },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans flex flex-col">
      <SiteNav />

      <main className="flex-grow pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-[760px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)] mb-6">Legal</div>
          <h1 className="font-display font-bold text-[clamp(36px,5vw,48px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)] mb-3">
            Política de Privacidad y Términos.
          </h1>
          <div className="flex items-center gap-6 mt-4 mb-12">
            <a href="#privacidad" className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] hover:underline">→ Privacidad</a>
            <a href="#terminos" className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] hover:underline">→ Términos</a>
          </div>

          <section id="privacidad" className="mb-16">
            <h2 className="font-display font-bold text-[clamp(28px,3.5vw,32px)] tracking-[-0.01em] text-[var(--text)] mb-2">Política de Privacidad</h2>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mb-8">Actualizado: enero 2025</div>
            <div className="flex flex-col gap-7">
              {privacy.map((p) => (
                <div key={p.h}>
                  <h3 className="font-display font-medium text-[16px] text-[var(--text)] mb-2">{p.h}</h3>
                  <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.75]">{p.b}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-[var(--border)] mb-16" />

          <section id="terminos">
            <h2 className="font-display font-bold text-[clamp(28px,3.5vw,32px)] tracking-[-0.01em] text-[var(--text)] mb-2">Términos de Servicio</h2>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mb-8">Actualizado: enero 2025</div>
            <div className="flex flex-col gap-7">
              {terms.map((p) => (
                <div key={p.h}>
                  <h3 className="font-display font-medium text-[16px] text-[var(--text)] mb-2">{p.h}</h3>
                  <p className="font-sans font-light text-[15px] text-[var(--muted)] leading-[1.75]">{p.b}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
