import { productContent } from "@/content/product";
import { ProductColorProvider } from "@/hooks/useProductColor";
import ColorSelector from "@/components/ColorSelector";
import ProductGallery from "@/components/ProductGallery";
import LoadingAnimation from "@/components/LoadingAnimation";
export const dynamic = "force-dynamic";

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
