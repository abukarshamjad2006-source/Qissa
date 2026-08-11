export type ColorId = "black" | "beige" | "white" | "navy";

export interface ProductColor {
  id: ColorId;
  /** Arabic display label for the color */
  label: string;
  /** Swatch hex used for the selector UI */
  swatch: string;
  /** Folder name under /public/products/<folder> */
  folder: string;
  /** Number of full-bleed scroll images for this color (1.jpg ... N.jpg) */
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
}
