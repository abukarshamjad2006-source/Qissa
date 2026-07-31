"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ColorId } from "@/types/product";

interface ProductColorContextValue {
  activeColor: ColorId;
  setActiveColor: (color: ColorId) => void;
}

const ProductColorContext = createContext<ProductColorContextValue | null>(null);

export function ProductColorProvider({
  initialColor,
  children,
}: {
  initialColor: ColorId;
  children: ReactNode;
}) {
  const [activeColor, setActiveColor] = useState<ColorId>(initialColor);
  return (
    <ProductColorContext.Provider value={{ activeColor, setActiveColor }}>
      {children}
    </ProductColorContext.Provider>
  );
}

export function useProductColor() {
  const ctx = useContext(ProductColorContext);
  if (!ctx) {
    throw new Error("useProductColor must be used within ProductColorProvider");
  }
  return ctx;
}
