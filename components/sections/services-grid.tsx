"use client";

import { motion, type Variants } from "framer-motion";
import { ServiceCard } from "@/components/ui/service-card";
import type { Service } from "@/data/services";
import { resolveIcon } from "@/lib/icons/registry";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service, index) => {
        const icon = resolveIcon(service.icon_name);
        return (
          <ServiceCard
            key={service.title}
            icon={icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        );
      })}
    </motion.div>
  );
}
