import { Attachment } from '@/framework/types';

export function displayImage(
  selectedVariationImage: Attachment | undefined,
  gallery: Attachment[] | undefined | null,
  image: Attachment | undefined
) {
  if (selectedVariationImage) {
    return [selectedVariationImage];
  }
  if (gallery?.length) {
    return gallery;
  }
  if (image) {
    return [image];
  }
  return [];
}
