"use client";

import { motion, type Variants } from "framer-motion";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/data/services";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export function ServicesGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </motion.div>
  );
}
