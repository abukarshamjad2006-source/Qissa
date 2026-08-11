"use client";

import dynamic from "next/dynamic";
import { productContent } from "@/content/product";
import { ProductColorProvider } from "@/hooks/useProductColor";

const ColorSelector = dynamic(() => import("@/components/ColorSelector"), {
  ssr: false,
});
const ProductGallery = dynamic(() => import("@/components/ProductGallery"), {
  ssr: false,
});
const LoadingAnimation = dynamic(
  () => import("@/components/LoadingAnimation"),
  { ssr: false }
);

export default function ShowcasePage() {
  return (
    <ProductColorProvider initialColor={productContent.colors[0].id}>
      <LoadingAnimation />
      <main className="relative h-[100svh] w-full bg-forest-950">
        <ColorSelector colors={productContent.colors} />
        <ProductGallery />
      </main>
    </ProductColorProvider>
  );
}
