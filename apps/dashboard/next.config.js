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
      "via.placeholder.com",
      "res.cloudinary.com",
      "s3.amazonaws.com",
      "18.141.64.26",
      "127.0.0.1",
      "localhost",
      "api.mindbank.us",
      "picsum.photos",
      "pickbazar-sail.test",
      "pickbazarlaravel.s3.ap-southeast-1.amazonaws.com",
      "chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com",
      "lh3.googleusercontent.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withNx(nextConfig);
