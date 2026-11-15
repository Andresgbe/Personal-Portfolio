"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/spotlight-card";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
};

export const serviceCardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={serviceCardVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full"
    >
      <SpotlightCard className="h-full p-6 shadow-lg shadow-black/25">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-xl border border-ink/15 bg-bg/70 transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                <Icon
                  className="size-5 text-secondary transition-colors duration-300 group-hover:text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>
              {typeof index === "number" && (
                <span className="font-mono text-xs text-ink/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
            </div>

            <h3 className="font-display mt-5 text-xl font-medium text-ink transition-colors group-hover:text-primary">
              {title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink/70">
              {description}
            </p>
          </div>

          <div className="mt-6 border-t border-ink/8 pt-4">
            <Link
              href="/contact"
              className="font-mono inline-flex items-center gap-1.5 text-xs text-secondary transition-colors hover:text-primary"
            >
              <span>Solicitar este servicio</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
