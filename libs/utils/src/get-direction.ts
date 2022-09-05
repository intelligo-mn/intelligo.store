export function getDirection(locale: string | undefined) {
  if (!locale) return "ltr";
  const rtlLanguages = ["ar", "he"];
  return rtlLanguages.includes(locale) ? "rtl" : "ltr";
}
