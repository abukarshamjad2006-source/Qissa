"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SizeRow } from "@/types/product";
import { getSizeRecommendation } from "@/lib/sizeLogic";

type Props = {
  title?: string;
  rows: SizeRow[];
};

export default function SizeCalculator({
  title = "اعرف مقاسك",
  rows,
}: Props) {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [showTable, setShowTable] = useState(false);

  const recommendation = useMemo(
    () => getSizeRecommendation(height, weight),
    [height, weight]
  );

  return (
    <section
      dir="rtl"
      className="mx-auto w-full max-w-2xl px-4 py-12"
    >
      {/* العنوان */}
      <div className="mb-8 text-center">
        <p className="mb-3 font-body text-xs tracking-[0.25em] text-gold-500">
          QISSA
        </p>

        <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
          {title}
        </h2>

        <p className="mt-3 font-body text-sm leading-7 text-forest-900/65">
          أدخل طولك ووزنك لمعرفة المقاس المناسب لك
        </p>
      </div>

      {/* أداة القياس */}
      <div className="rounded-3xl border border-forest-900/10 bg-cream-50/80 p-6 shadow-[0_10px_40px_rgba(21,23,15,0.06)] backdrop-blur-md md:p-8">

        {/* الطول */}
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <label className="font-body text-sm text-forest-900">
              الطول
            </label>

            <span className="font-body text-sm font-semibold text-gold-600">
              {height} سم
            </span>
          </div>

          <input
            type="range"
            min="145"
            max="205"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-forest-900/10 accent-gold-500"
          />

          <div className="mt-2 flex justify-between font-body text-xs text-forest-900/45">
            <span>145 سم</span>
            <span>205 سم</span>
          </div>
        </div>

        {/* الوزن */}
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <label className="font-body text-sm text-forest-900">
              الوزن
            </label>

            <span className="font-body text-sm font-semibold text-gold-600">
              {weight} كغ
            </span>
          </div>

          <input
            type="range"
            min="35"
            max="130"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-forest-900/10 accent-gold-500"
          />

          <div className="mt-2 flex justify-between font-body text-xs text-forest-900/45">
            <span>35 كغ</span>
            <span>130 كغ</span>
          </div>
        </div>

        {/* النتائج */}
        <div className="grid gap-4 sm:grid-cols-2">

          {/* المقاس العادي */}
          <motion.div
            key={`normal-${recommendation.recommended}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-gold-500/20 bg-white/50 p-5 text-center"
          >
            <p className="mb-2 font-body text-xs text-forest-900/55">
              المقاس الموصى به
            </p>

            <div className="font-display text-3xl text-forest-900">
              {recommendation.recommended}
            </div>
          </motion.div>

          {/* الأوفرسايز */}
          <motion.div
            key={`oversize-${recommendation.oversize}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-forest-900/10 bg-forest-900 p-5 text-center"
          >
            <p className="mb-2 font-body text-xs text-cream-50/60">
              مقاس Oversize
            </p>

            <div className="font-display text-3xl text-cream-50">
              {recommendation.oversize}
            </div>
          </motion.div>

        </div>

        {/* جدول المقاسات */}
        <button
          type="button"
          onClick={() => setShowTable((value) => !value)}
          className="mt-7 w-full rounded-full border border-forest-900/15 px-5 py-3 font-body text-sm text-forest-900 transition-colors duration-300 hover:bg-forest-900 hover:text-cream-50"
        >
          {showTable
            ? "إخفاء جدول المقاسات"
            : "عرض جدول المقاسات كامل"}
        </button>

        {showTable && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.35 }}
            className="mt-5 overflow-hidden rounded-2xl border border-forest-900/10"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-center">
                <thead>
                  <tr className="border-b border-forest-900/10">
                    <th className="px-3 py-3 font-body text-xs font-semibold text-gold-600">
                      الطول
                    </th>

                    <th className="px-3 py-3 font-body text-xs font-semibold text-gold-600">
                      الوزن
                    </th>

                    <th className="px-3 py-3 font-body text-xs font-semibold text-gold-600">
                      المقاس
                    </th>

                    <th className="px-3 py-3 font-body text-xs font-semibold text-gold-600">
                      Oversize
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={`${row.size}-${index}`}
                      className="border-b border-forest-900/5 last:border-0"
                    >
                      <td className="px-3 py-3 font-body text-xs text-forest-900/75">
                        {row.height}
                      </td>

                      <td className="px-3 py-3 font-body text-xs text-forest-900/75">
                        {row.weight}
                      </td>

                      <td className="px-3 py-3 font-body text-xs font-semibold text-forest-900">
                        {row.size}
                      </td>

                      <td className="px-3 py-3 font-body text-xs font-semibold text-gold-600">
                        {row.oversize}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
