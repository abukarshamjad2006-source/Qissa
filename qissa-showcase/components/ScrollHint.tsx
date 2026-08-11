"use client";

import { motion } from "framer-motion";

export default function ScrollHint({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 bottom-6 z-30 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-body text-[11px] tracking-widest2 text-cream-100/70">
        مرر لتكتشف المزيد
      </span>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </motion.svg>
    </motion.div>
  );
}
