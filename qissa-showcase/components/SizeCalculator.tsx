"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SizeRow } from "@/types/product";
import { getSizeRecommendation } from "@/lib/sizeLogic";

export default function SizeCalculator({
  title,
  intro,
  rows,
}: {
  title: string;
  intro: string;
  rows: SizeRow[];
}) {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);

  const recommendation = useMemo(
    () => getSizeRecommendation(height, weight, rows),
    [height, weight, rows]
  );

  return (
    <section className="bg-cream-100 px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-2xl">
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
          className="mb-12 max-w-xl font-body text-base leading-8 text-ink-900/70 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {intro}
        </motion.p>

        <motion.div
          className="rounded-3xl border border-ink-900/10 bg-cream-50 p-8 md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="mb-10">
            <div className="mb-3 flex items-center justify-between">
              <label className="font-display text-sm tracking-widest2 text-ink-900">
                الطول (سم)
              </label>
              <input
                type="number"
                value={height}
                min={150}
                max={200}
                onChange={(e) =>
                  setHeight(Math.min(200, Math.max(150, Number(e.target.value))))
                }
                className="w-20 rounded-lg border border-ink-900/15 bg-cream-50 px-2 py-1 text-center font-body text-ink-900"
              />
            </div>
            <input
              type="range"
              min={145}
              max={205}
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full accent-gold-500"
              dir="ltr"
            />
          </div>

          <div className="mb-12">
            <div className="mb-3 flex items-center justify-between">
              <label className="font-display text-sm tracking-widest2 text-ink-900">
                الوزن (كغ)
              </label>
              <input
                type="number"
                value={weight}
                min={40}
                max={110}
                onChange={(e) =>
                  setWeight(Math.min(110, Math.max(40, Number(e.target.value))))
                }
                className="w-20 rounded-lg border border-ink-900/15 bg-cream-50 px-2 py-1 text-center font-body text-ink-900"
              />
            </div>
            <input
              type="range"
              min={40}
              max={110}
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full accent-gold-500"
              dir="ltr"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              key={`relaxed-${recommendation.relaxedFit}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl bg-forest-900 px-4 py-6 text-center"
            >
              <p className="mb-2 font-body text-xs tracking-widest2 text-cream-100/70">
                مقاس مريح
              </p>
              <p className="font-display text-4xl text-gold-300">
                {recommendation.relaxedFit}
              </p>
            </motion.div>
            <motion.div
              key={`oversized-${recommendation.oversizedFit}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl bg-forest-800 px-4 py-6 text-center"
            >
              <p className="mb-2 font-body text-xs tracking-widest2 text-cream-100/70">
                أوفر سايز
              </p>
              <p className="font-display text-4xl text-gold-300">
                {recommendation.oversizedFit}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
