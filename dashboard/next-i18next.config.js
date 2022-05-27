const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "de", "es", "ar", "he", "zh", "mn"],
    defaultLocale: "mn",
    // localeDetection: false,
  },
  localePath: path.resolve("./public/locales"),
};
