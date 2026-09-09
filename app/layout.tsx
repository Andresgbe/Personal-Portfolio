import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { MotionProvider } from "@/components/providers/motion-provider";
import "./globals.css";

// Runs before hydration so a previously-saved "off" preference takes effect
// before first paint — otherwise the CSS animations would flash on, then off.
const MOTION_INIT_SCRIPT = `
  try {
    if (localStorage.getItem("motion-enabled") === "false") {
      document.documentElement.dataset.motion = "off";
    }
  } catch (e) {}
`;

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
    >
      <body className="min-h-full flex flex-col">
        <Script id="motion-init" strategy="beforeInteractive">
          {MOTION_INIT_SCRIPT}
        </Script>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
