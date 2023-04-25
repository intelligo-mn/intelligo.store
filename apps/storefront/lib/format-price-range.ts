/**
 * Helper method to format price range as , seperated
 *
 * @param price
 */

export const formatPriceRange = (price: string) => {
  // Replace - to ,
  let replaceChar = price.replaceAll("-", ",");

  const priceArr = replaceChar.split(",");

  let arrLen = priceArr.length, min = Infinity, max = -Infinity;
  while (arrLen--) {
    // If price has over 1000+
    if (priceArr[arrLen] === "1000+") {
      return ['1000']
    }

    // Calculate the minimum
    if (priceArr[arrLen].trim() !== '' && Number(priceArr[arrLen]) < min) {
      min = Number(priceArr[arrLen]);
    }

    // Calculate the maximum
    if (priceArr[arrLen].trim() !== '' && Number(priceArr[arrLen]) > max) {
      max = Number(priceArr[arrLen]);
    }
  }

  return [min.toString(), max.toString()];
}