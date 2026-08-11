export type ColorId = "black" | "beige" | "white" | "navy";

export interface ProductColor {
  id: ColorId;
  label: string;
  swatch: string;
  folder: string;
  imageCount: number;
}

export interface FabricDetail {
  label: string;
  value: string;
}

export interface SizeRow {
  heightRange: string;
  weightRange: string;
  relaxedFit: string;
  oversizedFit: string;
}

export interface ProductContent {
  brandName: string;
  productName: string;
  tagline: string;
  designTitle: string;
  designDescription: string[];
  fabricIntro: string;
  fabricDetails: FabricDetail[];
  colors: ProductColor[];
  nextButtonLabel: string;
  backButtonLabel: string;
  sizeChartTitle: string;
  sizeChartIntro: string;
  sizeChartRows: SizeRow[];
}
