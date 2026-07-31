"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Image breathes in as it enters, holds, then eases out — a slow, deliberate reveal.
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [10, 0, 0, 8]);
  const filter = useMotionBlur(blur);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-forest-950"
    >
      <motion.div
        className="absolute inset-0"
        style={{ scale, opacity, filter, y: parallaxY }}
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

function useMotionBlur(blur: MotionValue<number>) {
  return useTransform(blur, (b) => `blur(${b}px)`);
}
