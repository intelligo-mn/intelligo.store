const path = require("path");

module.exports = {
  i18n: {
    locales: ["mn", "en", "de", "es", "ar", "he", "zh"],
    defaultLocale: "mn",
    // localeDetection: false,
  },
  localePath: path.resolve("./public/locales"),
};
