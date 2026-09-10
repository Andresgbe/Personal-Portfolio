export type Service = {
  icon_name: string;
  title: string;
  description: string;
};

// Fallback data — used by lib/queries/services.ts only when Supabase isn't
// configured (see supabase/SETUP.md). Once it is, this is edited from
// /admin, not here; kept in sync as the seed data in
// supabase/migrations/0001_init.sql.
export const services: Service[] = [
  {
    icon_name: "AppWindow",
    title: "Plataformas web a medida",
    description:
      "Aplicaciones completas con base de datos y hosting. Ideal si tu proyecto necesita lógica de negocio real, no solo un sitio estático.",
  },
  {
    icon_name: "Rocket",
    title: "Landing pages",
    description:
      "Sitios rápidos, optimizados y con diseño propio para presentar tu marca, producto o servicio online.",
  },
  {
    icon_name: "Bot",
    title: "Automatizaciones y chatbots",
    description:
      "Flujos automatizados, integraciones entre plataformas y chatbots para WhatsApp o Instagram que responden mientras duermes.",
  },
  {
    icon_name: "RefreshCw",
    title: "Migración y modernización de sitios",
    description:
      "¿Tu sitio actual es lento o quedó viejo? Lo migro a un stack moderno (React/Next.js) sin perder tu contenido ni tu posicionamiento en Google.",
  },
  {
    icon_name: "LayoutDashboard",
    title: "Dashboards y paneles administrativos",
    description:
      "Interfaces internas para que gestiones tu propio negocio — pedidos, inventario, usuarios — sin depender de hojas de cálculo.",
  },
  {
    icon_name: "Wrench",
    title: "Mantenimiento y soporte continuo",
    description:
      "Acompañamiento técnico mensual para que tu sitio siga funcionando, actualizado y seguro, sin que tengas que preocuparte por eso.",
  },
];
