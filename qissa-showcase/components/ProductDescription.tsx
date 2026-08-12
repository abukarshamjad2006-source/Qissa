"use client";

import { motion } from "framer-motion";

export default function ProductDescription({
  paragraphs,
}: {
  paragraphs: string[];
}) {
  return (
    <section className="bg-cream-50 px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-2xl">
        <motion.span
          className="mb-6 block font-body text-xs tracking-widest2 text-gold-500"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          حكاية التصميم
        </motion.span>

        <div className="flex flex-col gap-6">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="font-body text-lg leading-10 text-ink-900/85 md:text-xl md:leading-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
