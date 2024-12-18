/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-text": "#7E88C3",
        "secondary-text": "#858BB2",
        "paid-status": "#33D69F",
        "pending-status": "#FF8F00",
        "draft-status": "#373B53",
        neutral: "#0C0E16",
        error: "#EC5757",
      },
      letterSpacing: {
        tight: "-0.25px",
      },
      fontSize: {
        sm: "13px",
        base: "15px",
      },
    },
  },
  plugins: [],
};
