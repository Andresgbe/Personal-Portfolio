import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { MotionProvider } from "@/components/providers/motion-provider";
import "./globals.css";

const THEME_AND_MOTION_INIT_SCRIPT = `(function(){try{if(localStorage.getItem("motion-enabled")==="false")document.documentElement.dataset.motion="off";if(localStorage.getItem("theme-mode")==="light")document.documentElement.dataset.theme="light"}catch(e){}})()`;

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "AGM Software Agency — Desarrollo Web, Sistemas & Automatización",
  description:
    "Agencia de desarrollo de software a medida, páginas web, paneles administrativos y automatizaciones con Inteligencia Artificial.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_AND_MOTION_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
