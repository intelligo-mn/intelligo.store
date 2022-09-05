const path = require("path");

module.exports = {
  i18n: {
    locales: ["mn"],
    defaultLocale: "mn",
    localeDetection: true
  },
  localePath: path.resolve("./public/locales"),
};
