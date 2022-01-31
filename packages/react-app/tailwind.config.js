module.exports = {
  // purge: ["./src/components/**/*.jsx", "./src/components/*.jsx", "./src/views/*.jsx", "./src/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("tw-elements/dist/plugin")],
};
