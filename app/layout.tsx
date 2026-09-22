import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { MotionProvider } from "@/components/providers/motion-provider";
import "./globals.css";

// Runs synchronously while the browser parses the HTML — before first paint —
// so a saved "off" preference is already in effect and the CSS animations
// never flash on, then off. `data-motion` is deliberately absent from the JSX
// below (no attribute means "on"), so React never manages it and can't clobber
// what this sets on a re-render.
const MOTION_INIT_SCRIPT = `(function(){try{if(localStorage.getItem("motion-enabled")==="false")document.documentElement.dataset.motion="off"}catch(e){}})()`;

// The three faces of the brand manual. Display carries the headlines, Inter
// the body, and the mono is reserved for terminal-style detail: eyebrows,
// meta labels, figure numbers.
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
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
      // The script below adds `data-motion` before React hydrates; without
      // this, React reports the extra attribute as a hydration mismatch.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
