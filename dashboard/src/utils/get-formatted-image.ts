interface IImage {
  __typename?: string;
  id: string;
  thumbnail: string;
  original: string;
}
export function getFormattedImage(image: IImage | undefined) {
  if (!image) return null;
  const { __typename, ...rest } = image;
  return { ...rest };
}
