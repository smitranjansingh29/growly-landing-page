// postcss.config.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ required fix
    autoprefixer: {},
  },
};
