/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text": "#7E88C3",
        "secondary-text": "#858BB2",
      },
    },
  },
  plugins: [],
};
