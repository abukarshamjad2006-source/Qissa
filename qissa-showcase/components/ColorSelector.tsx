"use client";

import { motion } from "framer-motion";
import { ProductColor } from "@/types/product";
import { useProductColor } from "@/hooks/useProductColor";

export default function ColorSelector({ colors }: { colors: ProductColor[] }) {
  const { activeColor, setActiveColor } = useProductColor();

  return (
    <nav
      aria-label="اختيار اللون"
      className="fixed top-6 inset-x-0 z-40 flex justify-center px-4"
    >
      <div className="rounded-3xl bg-cream-50/70 backdrop-blur-md px-5 py-3 shadow-[0_1px_20px_rgba(21,23,15,0.08)] border border-forest-900/5">
        
        {/* دوائر الألوان */}
        <ul className="flex items-center justify-center gap-2">
          {colors.map((color) => {
            const isActive = color.id === activeColor;

            return (
              <li key={color.id} className="relative">
                <button
                  type="button"
                  onClick={() => setActiveColor(color.id)}
                  aria-pressed={isActive}
                  aria-label={color.label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 ease-luxe hover:scale-110"
                >
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: isActive
                        ? "0 0 0 2px #B08D4E"
                        : "0 0 0 1px rgba(21,23,15,0.12)",
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <span
                    className="h-6 w-6 rounded-full border border-black/5"
                    style={{ backgroundColor: color.swatch }}
                  />

                  {/* اسم اللون عند تمرير الماوس */}
                  <span className="pointer-events-none absolute -bottom-8 whitespace-nowrap rounded-full bg-forest-900 px-3 py-1 text-xs font-body text-cream-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {color.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* اختر لونك */}
        <p className="mt-2 text-center font-body text-xs tracking-widest text-forest-900/70">
          اختر لونك
        </p>

      </div>
    </nav>
  );
}
