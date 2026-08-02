"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface ScrollSectionProps {
  src: string;
  alt: string;
  index: number;
  total: number;
  priority?: boolean;
}

export default function ScrollSection({
  src,
  alt,
  index,
  total,
  priority,
}: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.6, once: false });

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-forest-950"
    >
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{
          scale: isInView ? 1 : 1.08,
          opacity: isInView ? 1 : 0,
          filter: isInView ? "blur(0px)" : "blur(10px)",
        }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/30 via-transparent to-forest-950/10" />

      <span className="absolute bottom-8 left-8 font-body text-xs tracking-widest2 text-cream-100/70">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </section>
  );
}
