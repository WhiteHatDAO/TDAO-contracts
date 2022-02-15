module.exports = {
  purge: ["./src/components/**/*.jsx", "./src/components/*.jsx", "./src/views/*.jsx", "./src/*.jsx"],
  theme: {
    extend: {},
    colors: {
      'primary': '#B41C2E',
      'white': '#ffffff',
    }
  },
  plugins: [
    // require("@tailwindcss/forms"), 
    // require("tw-elements/dist/plugin")
  ],
};
