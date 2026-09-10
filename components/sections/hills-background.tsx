import { Hill } from "@/components/ui/hill";

// Rounded, cloud-like bumps (cubic Bézier, viewBox 1440x600) — back-to-front,
// darkest/subtlest to lightest/boldest, increasing amplitude toward camera.
// Shared by every section so the "landscape" reads as one continuous scene.
const HILLS = [
  {
    path: "M0,340 C100,260 200,220 300,260 C400,300 440,210 540,190 C640,170 700,270 800,280 C900,290 950,190 1050,180 C1150,170 1220,260 1320,280 C1380,292 1420,300 1440,290 L1440,600 L0,600 Z",
    color: "var(--hero-hill-back)",
    opacity: 0.9,
    duration: 11,
    bottom: "0%",
    className: "hidden sm:block",
  },
  {
    path: "M0,420 C110,330 210,280 320,340 C430,400 470,290 580,260 C690,230 750,340 860,360 C970,380 1020,270 1130,250 C1240,230 1320,340 1440,360 L1440,600 L0,600 Z",
    color: "var(--hero-hill-mid)",
    opacity: 0.95,
    duration: 9,
    bottom: "-1%",
  },
  {
    path: "M0,480 C120,380 240,320 360,400 C480,480 530,340 650,310 C770,280 840,410 960,430 C1080,450 1140,320 1260,300 C1350,286 1410,320 1440,310 L1440,600 L0,600 Z",
    color: "var(--hero-hill-front)",
    opacity: 1,
    duration: 7,
    bottom: "-2%",
  },
] as const;

export function HillsBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={`absolute inset-x-0 z-0${className ? ` ${className}` : ""}`}>
      {HILLS.map((hill) => (
        <Hill key={hill.bottom} {...hill} />
      ))}
    </div>
  );
}
