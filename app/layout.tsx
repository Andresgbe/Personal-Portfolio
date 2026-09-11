import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/providers/motion-provider";
import "./globals.css";

// Runs synchronously while the browser parses the HTML — before first paint —
// so a saved "off" preference is already in effect and the CSS animations
// never flash on, then off. `data-motion` is deliberately absent from the JSX
// below (no attribute means "on"), so React never manages it and can't clobber
// what this sets on a re-render.
const MOTION_INIT_SCRIPT = `(function(){try{if(localStorage.getItem("motion-enabled")==="false")document.documentElement.dataset.motion="off"}catch(e){}})()`;

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// App-wide typeface: fallback for "Means Web" (no free @font-face source available).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

// UI chrome (nav, buttons, labels) — a cleaner sans reads better than the
// editorial serif at small sizes, e.g. in the header nav.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${fraunces.variable} ${jakarta.variable} h-full scroll-smooth antialiased`}
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
