/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gainsboro: "#e2dee1",
        black: "#000",
        white: "#fff",
        chocolate: "#b94a00",
      },
      spacing: {},
      fontFamily: {
        "isidora-sans": "'Isidora Sans'",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        xl: "20px",
        "981xl": "1000px",
      },
    },
    fontSize: {
      "5xl": "24px",
      xl: "20px",
      "8xl": "27px",
      "3xl": "22px",
      sm: "14px",
      lg: "18px",
      "13xl": "32px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      mq600px: {
        raw: "screen and (max-width: 600px)",
      },
      sm: {
        max: "420px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
