"use client";

import { useEffect, useRef, useState } from "react";
import { useProductColor } from "@/hooks/useProductColor";
import { productContent } from "@/content/product";
import { productImagePath } from "@/lib/utils";
import ScrollSection from "./ScrollSection";
import ImageTransition from "./ImageTransition";
import NextButton from "./NextButton";
import ScrollHint from "./ScrollHint";

export default function ProductGallery() {
  const { activeColor } = useProductColor();
  const color = productContent.colors.find((c) => c.id === activeColor)!;
  const images = Array.from({ length: color.imageCount }, (_, i) =>
    productImagePath(color.folder, `${i + 1}.jpg`)
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => setShowHint(el.scrollTop < 40);
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [activeColor]);

  return (
    <>
      <ImageTransition transitionKey={color.id} className="h-[100svh]">
        <div
          ref={scrollRef}
          className="snap-gallery no-scrollbar h-[100svh] w-full"
        >
          {images.map((src, i) => (
            <ScrollSection
              key={src}
              src={src}
              alt={`${productContent.productName} — ${color.label} — ${i + 1}`}
              index={i}
              total={images.length}
              priority={i === 0}
            />
          ))}

          <section className="relative flex h-[100svh] w-full flex-col items-center justify-center gap-8 bg-forest-950 px-6 text-center">
            <p className="max-w-md font-body text-sm leading-8 text-cream-100/70">
              {productContent.tagline}
            </p>
            <NextButton
              href={`/product?color=${color.id}`}
              label={productContent.nextButtonLabel}
            />
          </section>
        </div>
      </ImageTransition>
      <ScrollHint visible={showHint} />
    </>
  );
}
