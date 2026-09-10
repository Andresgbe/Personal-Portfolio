"use client";

import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// No `whileInView` here on purpose — the parent grid orchestrates the
// stagger via `variants` propagation, this card just supplies the shape.
export const serviceCardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      variants={serviceCardVariants}
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: "0 24px 48px -16px rgba(0,0,0,0.5)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur-sm"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5">
        <Icon
          className="h-5 w-5 text-[var(--hero-accent)]"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
      <h3 className="font-serif mt-4 text-lg font-medium text-white">
        {title}
      </h3>
      <p className="font-nav mt-2 text-sm leading-relaxed text-white/70">
        {description}
      </p>
    </motion.div>
  );
}
