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
