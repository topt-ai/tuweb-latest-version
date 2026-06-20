/** @type {import('next').NextConfig} */
const nextConfig = {
  // This app dir is the deploy root (Vercel root directory = "tuwebsv (1)").
  // Pin tracing here so parent-folder lockfiles don't confuse the build.
  outputFileTracingRoot: import.meta.dirname,
  async redirects() {
    const map = [
      ['/sobre-nosotros', '/nosotros'],
      ['/servicios', '/'],
      ['/seo', '/seo-local'],
      ['/web', '/paginas-web'],
      ['/ads', '/google-meta-ads'],
      ['/generacion-le', '/'],
      ['/generacion-leads', '/'],
      ['/generacion-leads-el-salvador', '/'],
      ['/posicionamiento-google-el-salvador', '/seo-local'],
      ['/automatizaciones-el-salvador', '/'],
      ['/diseno-web-el-salvador', '/paginas-web'],
      ['/asistentes-voz-ia-el-salvador', '/'],
      ['/chatbots-ia-el-salvador', '/'],
      ['/chatbots-inteligentes', '/'],
      ['/asistentes-de-voz', '/'],
    ];
    return map.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
