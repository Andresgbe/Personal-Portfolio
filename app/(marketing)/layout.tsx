import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";

// The public marketing site's chrome — Header floats over every page here.
// /admin is a sibling of this route group specifically so it doesn't get
// this nav bar (it has its own, in app/admin/(protected)/layout.tsx).
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
