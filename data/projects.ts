import {
  Bot,
  CalendarCheck,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type Shot = {
  caption: string;
  color: string;
  src?: string;
};

type ProjectBase = {
  slug: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  year: string;
  color: string;
  url?: string;
  gallery?: Shot[];
};

export type SoftwareProject = ProjectBase & {
  kind: "software";
  category: string;
};

export type Automation = ProjectBase & {
  kind: "automation";
  icon: LucideIcon;
};

export type Project = SoftwareProject | Automation;

// Proyectos reales de AGM Software Agency.
export const softwareProjects: SoftwareProject[] = [
  {
    kind: "software",
    slug: "laboratorio-eislab",
    title: "Laboratorio Clínico EisLab",
    category: "Plataforma médica & IA",
    year: "2026",
    description:
      "Plataforma web médica con catálogo interactivo de exámenes clínicos, asistente virtual con Inteligencia Artificial para responder dudas de pacientes en tiempo real e integración con WhatsApp para agendar tomas de muestra.",
    role: "Diseño y desarrollo Full-Stack",
    stack: ["Next.js", "React", "Tailwind CSS", "Asistente IA", "WhatsApp API"],
    color: "#0284c7",
    url: "https://laboratorioeislab.com",
    gallery: [
      {
        caption: "Portada principal: propuesta de valor y catálogo de servicios",
        color: "#0f262e",
        src: "/projects/eislab-hero.png",
      },
      {
        caption: "Catálogo interactivo de exámenes y perfiles clínicos",
        color: "#0c3833",
        src: "/projects/eislab-exams.png",
      },
      {
        caption: "Asistente virtual de Inteligencia Artificial para consultas",
        color: "#153540",
        src: "/projects/eislab-ai.png",
      },
      {
        caption: "Canales de atención, ubicación y contacto directo",
        color: "#07161b",
        src: "/projects/eislab-contact.png",
      },
    ],
  },
  {
    kind: "software",
    slug: "centro-comercial-sacramento",
    title: "Centro Comercial Sacramento",
    category: "Sistema administrativo",
    year: "2026",
    description:
      "Sistema web que reemplazó las hojas de cálculo con las que se administraba el centro comercial: locales, pagos de alquiler, servicios básicos, egresos, caja chica y manejo multimoneda, con roles de administrador y operadores.",
    role: "Diseño y desarrollo Full-Stack",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    color: "#e8703a",
    gallery: [
      {
        caption: "Servicios básicos: facturas filtradas por proveedor, año y mes",
        color: "#0f262e",
        src: "/projects/sacramento.svg",
      },
      {
        caption: "Control de alquileres, locales y estados de pago",
        color: "#c85a28",
      },
      {
        caption: "Caja chica, egresos y balance multimoneda",
        color: "#153540",
      },
    ],
  },
  {
    kind: "software",
    slug: "caracas-culinary-campus",
    title: "Caracas Culinary Campus",
    category: "Plataforma educativa",
    year: "2026",
    description:
      "Plataforma institucional para escuela gastronómica: presentación de diplomados profesionales, talleres culinarios y sistema de admisión online para postulantes.",
    role: "Diseño y desarrollo web",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "#d97706",
    gallery: [
      {
        caption: "Catálogo de diplomados y talleres gastronómicos",
        color: "#261a0c",
        src: "/projects/culinary.svg",
      },
      {
        caption: "Formulario de admisión e información de cursos",
        color: "#140e06",
      },
    ],
  },
  {
    kind: "software",
    slug: "lorenzo-broker",
    title: "Lorenzo Broker",
    category: "Landing page",
    year: "2026",
    description:
      "Landing de una comunidad de trading en español. El contenido — precio, plan, preguntas frecuentes, canales — se edita en vivo sobre la propia página desde una sesión con permisos, así que el cliente cambia lo que necesita sin tocar código ni esperar un deploy.",
    role: "Diseño y desarrollo",
    stack: ["Next.js", "Supabase Auth", "Edición en vivo", "Tailwind CSS"],
    color: "#1b8a6b",
    gallery: [
      {
        caption: "Portada: la propuesta y el acceso a la comunidad",
        color: "#0b261e",
        src: "/projects/lorenzo.svg",
      },
      {
        caption: "Edición en vivo de precios, planes y preguntas frecuentes",
        color: "#13634d",
      },
      {
        caption: "Versión móvil optimizada para conversión",
        color: "#0f262e",
      },
    ],
  },
  {
    kind: "software",
    slug: "conectasalud",
    title: "ConectaSalud",
    category: "Plataforma humanitaria",
    year: "2026",
    description:
      "Plataforma que conecta al personal médico que necesita insumos con los centros de acopio y los voluntarios que pueden conseguirlos: roles, niveles de urgencia y seguimiento para que nadie duplique el esfuerzo. Avalada por la UCV, con más de 4.000 solicitudes procesadas.",
    role: "Diseño y desarrollo de plataforma",
    stack: ["Next.js", "PostgreSQL", "Roles & Permisos", "Tailwind CSS"],
    color: "#0c6e62",
    gallery: [
      {
        caption: "Guía de uso: cómo participa cada rol en la plataforma",
        color: "#0c3833",
        src: "/projects/conectasalud.svg",
      },
      {
        caption: "Tablero de solicitudes médicas por nivel de urgencia",
        color: "#095249",
      },
      {
        caption: "Coordinación entre centros de acopio y voluntarios",
        color: "#12313b",
      },
    ],
  },
];

export const automations: Automation[] = [
  {
    kind: "automation",
    slug: "publicador-automatico-instagram",
    title: "Publicación Automática en Instagram con IA",
    year: "2026",
    description:
      "Sistema autónomo que genera copys persuasivos, diseña carruseles y programa publicaciones en Instagram en los horarios de mayor impacto comercial.",
    role: "Generación de Contenido & Social Media IA",
    stack: ["OpenAI / Gemini", "Instagram Graph API", "Generación Visual", "n8n"],
    icon: Sparkles,
    color: "#e8703a",
  },
  {
    kind: "automation",
    slug: "motor-recomendaciones-ia",
    title: "Motor de IA para Recomendaciones Personalizadas",
    year: "2026",
    description:
      "Módulo inteligente que analiza el historial de compras y hábitos del cliente para sugerir productos afines en tiempo real, aumentando el ticket promedio y la recurrencia.",
    role: "Inteligencia Predictiva & E-commerce",
    stack: ["Algoritmos Predictivos", "Vector Embeddings", "Next.js / Supabase", "Cross-Selling"],
    icon: Bot,
    color: "#5ec2cc",
  },
  {
    kind: "automation",
    slug: "agendador-citas-whatsapp",
    title: "Agendamiento & Recordatorios en WhatsApp",
    year: "2026",
    description:
      "Sistema de reservas para consultorios, clínicas y salones que bloquea horarios en Google Calendar y envía recordatorios interactivos 24h y 2h antes, reduciendo las inasistencias drásticamente.",
    role: "Automatización de Operaciones",
    stack: ["Google Calendar", "WhatsApp Cloud API", "n8n", "Gestión de Turnos"],
    icon: CalendarCheck,
    color: "#22c55e",
  },
  {
    kind: "automation",
    slug: "sync-precios-inventario-multimoneda",
    title: "Actualizador de Precios Multimoneda (Tasa BCV)",
    year: "2026",
    description:
      "Disparador diario que consulta la tasa oficial al publicarse, recalcula miles de precios en Bolívares y actualiza en segundos la tienda web y catálogo de WhatsApp.",
    role: "Automatización Cloud & Finanzas",
    stack: ["Python Worker", "API BCV", "Webhooks", "Catálogo Multicanal"],
    icon: TrendingUp,
    color: "#f59e0b",
  },
];

export const projects: Project[] = [...softwareProjects, ...automations];

const PLACEHOLDER_SHOTS: Array<{ caption: string; mix: string }> = [
  { caption: "Vista principal", mix: "100%, transparent" },
  { caption: "Detalle de interfaz", mix: "78%, #050810" },
  { caption: "Versión mobile", mix: "72%, #ffffff" },
];

export function coverShot(project: Project): Shot | undefined {
  return project.gallery?.find((shot) => Boolean(shot.src));
}

export function galleryFor(project: Project): Shot[] {
  if (project.gallery && project.gallery.length > 0) return project.gallery;

  return PLACEHOLDER_SHOTS.map(({ caption, mix }) => ({
    caption,
    color: `color-mix(in oklab, ${project.color} ${mix})`,
  }));
}

export function nextProject(project: Project, siblings: Project[]): Project {
  const index = siblings.findIndex((p) => p.slug === project.slug);
  return siblings[(index + 1) % siblings.length];
}
