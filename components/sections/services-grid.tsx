"use client";

import { motion, type Variants } from "framer-motion";
import { ServiceCard } from "@/components/ui/service-card";
import type { Service } from "@/data/services";
import { resolveIcon } from "@/lib/icons/registry";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => {
        // Resolved once per service here, then passed down as a prop —
        // ServiceCard renders it via destructuring (like AutomationRow does
        // for automations), not by calling resolveIcon in its own render.
        const icon = resolveIcon(service.icon_name);
        return (
          <ServiceCard
            key={service.title}
            icon={icon}
            title={service.title}
            description={service.description}
          />
        );
      })}
    </motion.div>
  );
}
