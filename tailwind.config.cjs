const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      stargaze: ["Stargaze"],
      "stargaze-stencil": ["StargazeStencil"],
      xxix: ["XXIX"],
      "roboto-condensed": ["RobotoCondensed"],
    },
    colors: {
      transparent: "transparent",
      white: "white",
      black: "black",
      blue: "#333AE3",
      purple: "#5D27E3",
      grey: "#A3A3A3",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".gradient-text": {
          color: "transparent",
          backgroundClip: "text",
          backgroundImage: "linear-gradient(to right, #333AE3, #5D27E3)",
        },
        ".scrollbar-hidden": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
