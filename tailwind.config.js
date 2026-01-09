export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#2D8B2D",
          600: "#237023",
          700: "#1A561A",
        },
      },
      fontFamily: {
        heading: ['"Battambang"', 'Inter', 'sans-serif'],
        body: ['"Kantumruy Pro"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
