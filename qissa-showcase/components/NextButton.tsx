"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NextButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link href={href} className="group inline-block">
      <motion.span
        className="relative flex items-center gap-3 overflow-hidden rounded-full border border-cream-100/30 px-10 py-4 font-display text-sm tracking-widest2 text-cream-50"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.span
          className="absolute inset-0 -z-10 bg-gold-400"
          variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
        />
        <motion.span
          variants={{ rest: { color: "#FBF8F1" }, hover: { color: "#15170F" } }}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.span>
        <motion.span
          aria-hidden
          variants={{
            rest: { x: 0, color: "#FBF8F1" },
            hover: { x: -4, color: "#15170F" },
          }}
          transition={{ duration: 0.3 }}
        >
          ←
        </motion.span>
      </motion.span>
    </Link>
  );
}
