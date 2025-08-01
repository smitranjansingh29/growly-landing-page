module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-toastify/dist/ReactToastify.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4f46e5",
          DEFAULT: "#4338ca",
          dark: "#3730a3",
        },
        secondary: {
          light: "#f97316",
          DEFAULT: "#ea580c",
          dark: "#c2410c",
        },
      },
    },
  },
  plugins: [],
};
