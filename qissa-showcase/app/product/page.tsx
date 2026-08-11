import { productContent } from "@/content/product";
import ProductHero from "@/components/ProductHero";
import ProductDescription from "@/components/ProductDescription";
import SizeCalculator from "@/components/SizeCalculator";
import FabricSection from "@/components/FabricSection";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<{ color?: string }>;
}) {
  const { color: colorId } = await searchParams;
  const color =
    productContent.colors.find((c) => c.id === colorId) ??
    productContent.colors[0];

  return (
    <main className="bg-cream-50">
      <ProductHero color={color} />
      <ProductDescription paragraphs={productContent.designDescription} />
      <SizeCalculator
        title={productContent.sizeChartTitle}
        intro={productContent.sizeChartIntro}
        rows={productContent.sizeChartRows}
      />
      <FabricSection
        intro={productContent.fabricIntro}
        details={productContent.fabricDetails}
      />
    </main>
  );
}
