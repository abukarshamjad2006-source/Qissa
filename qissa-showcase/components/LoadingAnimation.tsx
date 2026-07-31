"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productContent } from "@/content/product";

/**
 * A brief forest-green curtain that reveals the brand mark once,
 * on first mount, then steps out of the way permanently.
 */
export default function LoadingAnimation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-900"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
          }}
        >
          <motion.span
            className="font-display text-cream-100 text-4xl md:text-5xl tracking-widest2"
            initial={{ opacity: 0, letterSpacing: "0.05em", filter: "blur(6px)" }}
            animate={{
              opacity: 1,
              letterSpacing: "0.28em",
              filter: "blur(0px)",
              transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            {productContent.brandName}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
