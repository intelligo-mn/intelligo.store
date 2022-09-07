//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { i18n } = require("./next-i18next.config");
/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  i18n,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    domains: [
      "localhost",
      "googleusercontent.com",
      "maps.googleapis.com",
      "chawkbazarapi.redq.io",
      "graph.facebook.com",
      "res.cloudinary.com",
      "s3.amazonaws.com",
      "18.141.64.26",
      "via.placeholder.com",
      "api.mindbank.us",
      "pickbazarlaravel.s3.ap-southeast-1.amazonaws.com",
      "chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com",
      "picsum.photos",
      "cdninstagram.com",
      "scontent.cdninstagram.com"
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withNx(nextConfig);
