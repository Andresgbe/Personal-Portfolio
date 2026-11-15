export type Service = {
  icon_name: string;
  title: string;
  description: string;
};

// Fallback data — used by lib/queries/services.ts when Supabase isn't
// configured. Adapted for AGM Software Agency.
export const services: Service[] = [
  {
    icon_name: "AppWindow",
    title: "Plataformas web y SaaS a medida",
    description:
      "Aplicaciones web completas con autenticación, base de datos relacional y arquitectura escalable. Ideal cuando tu negocio necesita lógica real y no solo una página informativa.",
  },
  {
    icon_name: "Rocket",
    title: "Landing pages de alta conversión",
    description:
      "Sitios ultra rápidos, con identidad visual propia, animaciones fluidas y estructura persuasiva diseñada para convertir visitantes en clientes reales.",
  },
  {
    icon_name: "Bot",
    title: "Automatizaciones y Agentes IA",
    description:
      "Flujos autónomos en n8n/Make, integraciones entre sistemas y agentes con IA para WhatsApp o Instagram que califican leads, agendan y responden 24/7.",
  },
  {
    icon_name: "LayoutDashboard",
    title: "Dashboards y sistemas administrativos",
    description:
      "Paneles internos a medida (ERP, CRM, control de inventario, finanzas y operaciones) para que gestiones tu empresa en tiempo real sin depender de hojas de cálculo.",
  },
  {
    icon_name: "RefreshCw",
    title: "Migración y modernización tecnológica",
    description:
      "¿Tu sistema actual es lento o quedó obsoleto? Lo migramos a un stack moderno (Next.js, TypeScript, Cloud) multiplicando su velocidad y manteniendo tu SEO.",
  },
  {
    icon_name: "Wrench",
    title: "Partner tecnológico y soporte continuo",
    description:
      "Acompañamiento de ingeniería mensual: monitoreo, nuevas funcionalidades, actualizaciones de seguridad y optimización constante de tu infraestructura.",
  },
];
