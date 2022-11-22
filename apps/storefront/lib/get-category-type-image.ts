import { Category } from "@framework/types";

export const getCategoryTypeImage = (category: Category, variant = "image") => {
  const { image } = category;

  if (!image?.length) return null;

  if (variant === "vector" && image?.length > 1) {
    return image[1];
  }

  return image[0];
};
