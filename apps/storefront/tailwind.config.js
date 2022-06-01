function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  };
}

module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'category-bg': "url('/assets/images/category/bg.jpg')",
      },
      colors: {
        body: "#5A5A5A",
        heading: "#212121",
        input: "#1D1E1F",
        black: "#000",
        white: "#fff",
        linen: "#FBF1E9",
        linenSecondary: "#ECE7E3",
        olive: "#3D9970",
        maroon: "#B03060",
        brown: "#C7844B",
        placeholder: "#707070",
        borderBottom: "#f7f7f7",
        facebook: "#4267B2",
        facebookHover: "#395fad",
        google: "#4285F4",
        googleHover: "#307bf9",
        success: "#23B848",
        blue: "#129CB8",
        gray: {
          50: "#FBFBFB",
          100: "#F1F1F1",
          150: "#F4F4F4",
          200: "#F9F9F9",
          300: "#E6E6E6",
          350: "#E9ECEF",
          400: "#999999",
          500: "#D8D8D8",
          600: "#3A3A3A",
          700: "#292929",
          800: "#707070",
          900: "#3C3C3C"
        },
      },
      fontSize: {
        "10px": ".625rem",
      },
      screens: {
        sm: "480px",
        lg: "1025px",
        "2xl": "1500px",
        "3xl": "1780px",
      },
      spacing: {
        "430px": "430px",
        "450px": "450px",
        "500px": "500px",
        "64vh": "64vh",
      },
      minHeight: {
        "50px": "50px",
      },
      scale: {
        80: "0.8",
        85: "0.85",
        300: "3",
        400: "4",
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
    boxShadow: {
      cart: "0 3px 6px rgba(0,0,0,0.12)",
      product: "0 6px 12px rgba(0,0,0,.08)",
      listProduct: "0 2px 4px rgba(0,0,0,.08)",
      navigation: "0 3px 6px rgba(0, 0, 0, 0.16)",
      navigationReverse: "0 -3px 6px rgba(0, 0, 0, 0.16)",
      header: "0 2px 3px rgba(0, 0, 0, 0.08)",
      vendorCard: "1px 1px 4px rgba(0, 0, 0, 0.12)",
      vendorCardHover: "0 6px 18px rgba(0, 0, 0, 0.12)",
      subMenu: "1px 2px 3px rgba(0, 0, 0, 0.08)",
      bottomNavigation: "0 -2px 3px rgba(0, 0, 0, 0.06)",
      cookies: "0 -2px 3px rgba(0, 0, 0, 0.04)",
      avatar: "0px 15px 30px rgba(0, 0, 0, 0.16)",
      dropDown: "0px 10px 40px rgba(41,50,68,0.15)",
      checkoutCard: "0px 2px 2px rgba(0, 0, 0, 0.12)",
    },
    fontFamily: {
      body: ["'Open Sans', sans-serif"],
      satisfy: ["'Satisfy', cursive"],
      segoe: ["'Segoe UI', sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
