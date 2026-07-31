"use client";

import { motion } from "framer-motion";
import { FabricDetail } from "@/types/product";

export default function FabricSection({
  intro,
  details,
}: {
  intro: string;
  details: FabricDetail[];
}) {
  return (
    <section className="bg-forest-900 px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-4 font-display text-3xl text-cream-50 md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          القماش
        </motion.h2>
        <motion.p
          className="mb-14 max-w-xl font-body text-base leading-8 text-cream-100/70 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {intro}
        </motion.p>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 border-t border-cream-100/10 pt-10 md:grid-cols-2">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 2) * 0.08,
              }}
            >
              <h3 className="mb-2 font-display text-sm tracking-widest2 text-gold-300">
                {d.label}
              </h3>
              <p className="font-body text-base leading-8 text-cream-100/80">
                {d.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
