import {
  AppWindow,
  Bot,
  LayoutDashboard,
  RefreshCw,
  Rocket,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: AppWindow,
    title: "Plataformas web a medida",
    description:
      "Aplicaciones completas con base de datos y hosting. Ideal si tu proyecto necesita lógica de negocio real, no solo un sitio estático.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    description:
      "Sitios rápidos, optimizados y con diseño propio para presentar tu marca, producto o servicio online.",
  },
  {
    icon: Bot,
    title: "Automatizaciones y chatbots",
    description:
      "Flujos automatizados, integraciones entre plataformas y chatbots para WhatsApp o Instagram que responden mientras duermes.",
  },
  {
    icon: RefreshCw,
    title: "Migración y modernización de sitios",
    description:
      "¿Tu sitio actual es lento o quedó viejo? Lo migro a un stack moderno (React/Next.js) sin perder tu contenido ni tu posicionamiento en Google.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards y paneles administrativos",
    description:
      "Interfaces internas para que gestiones tu propio negocio — pedidos, inventario, usuarios — sin depender de hojas de cálculo.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y soporte continuo",
    description:
      "Acompañamiento técnico mensual para que tu sitio siga funcionando, actualizado y seguro, sin que tengas que preocuparte por eso.",
  },
];
