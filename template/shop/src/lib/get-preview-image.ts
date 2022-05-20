export const getPreviewImage = (value: any) => {
  let images: any[] = [];
  if (value) {
    images = Array.isArray(value)
      ? value.map(({ thumbnail }) => ({ preview: thumbnail }))
      : [{ preview: value.thumbnail }];
  }
  return images;
};
