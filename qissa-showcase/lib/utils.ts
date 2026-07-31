export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Builds the public path to a product image for a given color folder. */
export function productImagePath(folder: string, fileName: string) {
  return `/products/${folder}/${fileName}`;
}
