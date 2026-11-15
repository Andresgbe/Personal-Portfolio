import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// The public marketing site's chrome — Header floats over every page here,
// and Footer closes every public view. /admin is a sibling of this route
// group specifically so it doesn't get this nav bar.
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
