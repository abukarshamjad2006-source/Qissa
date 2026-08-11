"use client";

import { motion } from "framer-motion";
import { SizeRow } from "@/types/product";

export default function SizeChart({
  title,
  intro,
  rows,
}: {
  title: string;
  intro: string;
  rows: SizeRow[];
}) {
  return (
    <section className="bg-cream-100 px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-4 font-display text-3xl text-ink-900 md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mb-10 max-w-xl font-body text-base leading-8 text-ink-900/70 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {intro}
        </motion.p>

        <motion.div
          className="overflow-hidden rounded-2xl border border-ink-900/10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <table className="w-full border-collapse text-center font-body">
            <thead>
              <tr className="bg-forest-900 text-cream-50">
                <th className="px-4 py-4 text-sm tracking-widest2">
                  الطول (سم)
                </th>
                <th className="px-4 py-4 text-sm tracking-widest2">
                  الوزن (كغ)
                </th>
                <th className="px-4 py-4 text-sm tracking-widest2">
                  مقاس مريح
                </th>
                <th className="px-4 py-4 text-sm tracking-widest2">
                  أوفر سايز
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-cream-50" : "bg-cream-100"}
                >
                  <td className="px-4 py-4 text-ink-900/80">
                    {row.heightRange}
                  </td>
                  <td className="px-4 py-4 text-ink-900/80">
                    {row.weightRange}
                  </td>
                  <td className="px-4 py-4 font-display text-gold-600">
                    {row.relaxedFit}
                  </td>
                  <td className="px-4 py-4 font-display text-gold-600">
                    {row.oversizedFit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
