/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#0D0CFF",
      green: "#7DF94E",
      bright: "#F9F9F9",
      dark: "#070707",
      grey: "#C9C9C9",
      white: "#FFF",
      black: "#000",
      lightGrey: "#D9D9D9",
    },
    fontFamily: {
      "re-70": ["Redaction-70"],
      "re-50": ["Redaction-50"],
      "re-35": ["Redaction-35"],
    },
    extend: {},
  },
  plugins: [],
};
