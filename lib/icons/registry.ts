import {
  AppWindow,
  BarChart3,
  Bot,
  Boxes,
  Camera,
  Circle,
  Code2,
  Cpu,
  Database,
  FileText,
  Gauge,
  Globe,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Palette,
  RefreshCw,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Curated on purpose — not "all of lucide" (~1500 icons would bloat the admin
// bundle). Covers every icon already used by the seed data plus a modest
// superset for future picks from the admin panel.
export const ICON_REGISTRY: Record<string, LucideIcon> = {
  AppWindow,
  BarChart3,
  Bot,
  Boxes,
  Camera,
  Code2,
  Cpu,
  Database,
  FileText,
  Gauge,
  Globe,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Palette,
  RefreshCw,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Wrench,
  Zap,
};

const DEFAULT_ICON = Circle;

// Falls back to a default rather than throwing — a DB row can drift out of
// sync with this list (e.g. edited outside the admin panel).
export function resolveIcon(name: string): LucideIcon {
  const icon = ICON_REGISTRY[name];
  if (!icon) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[icon-registry] unknown icon name "${name}", using fallback`);
    }
    return DEFAULT_ICON;
  }
  return icon;
}

export const ICON_OPTIONS: { name: string; Icon: LucideIcon }[] = Object.entries(
  ICON_REGISTRY,
).map(([name, Icon]) => ({ name, Icon }));
