"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageTransitionProps {
  /** Unique key that changes whenever the content set (e.g. color) changes */
  transitionKey: string;
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a block of content (a full image set) and cross-fades it with a
 * subtle blur + scale whenever `transitionKey` changes — used when the
 * customer switches colors.
 */
export default function ImageTransition({
  transitionKey,
  children,
  className,
}: ImageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={transitionKey}
        className={className}
        initial={{ opacity: 0, scale: 1.03, filter: "blur(14px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{
          opacity: 0,
          scale: 0.98,
          filter: "blur(14px)",
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
