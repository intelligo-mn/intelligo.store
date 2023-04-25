import { KeyBasedImage, Type } from "@framework/types";

/**
 * Helper methods to filter brands
 *
 * @param brands
 * @param layout
 */
export const filterBrands = (brands: Type[] | undefined, layout: string) => {
  if (!brands) {
    return [];
  }

  const filterBrands: Type[] = [];
  brands?.map((brand: Type) => {
    brand?.images?.map((image: KeyBasedImage) => {
      if (image.key === layout) {
        filterBrands.push(brand);
        return false;
      }
    });
  })

  return filterBrands;
}

export const filterBrandImages = (images: KeyBasedImage[], layout: string) => {
  return images?.find((image: KeyBasedImage) => image.key === layout);
}