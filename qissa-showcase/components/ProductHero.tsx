"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProductColor } from "@/types/product";
import { productImagePath } from "@/lib/utils";
import { productContent } from "@/content/product";

export default function ProductHero({ color }: { color: ProductColor }) {
  return (
    <section className="relative h-[85svh] w-full overflow-hidden bg-forest-950">
      <Image
        src={productImagePath(color.folder, "close.jpg")}
        alt={`${productContent.designTitle} — تفصيل التطريز`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/10 to-transparent" />

      <Link
        href="/"
        className="absolute top-6 right-6 z-10 rounded-full border border-cream-100/30 px-5 py-2 font-body text-xs tracking-widest2 text-cream-50 backdrop-blur-sm transition-colors duration-300 hover:bg-cream-50/10"
      >
        {productContent.backButtonLabel}
      </Link>

      <motion.div
        className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-16 md:pb-16"
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <span className="mb-3 block font-body text-xs tracking-widest2 text-gold-300">
          {productContent.brandName}
        </span>
        <h1 className="max-w-2xl font-display text-4xl leading-tight text-cream-50 md:text-6xl">
          {productContent.designTitle}
        </h1>
      </motion.div>
    </section>
  );
}
