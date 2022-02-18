module.exports = {
  purge: ["./src/components/**/*.jsx", "./src/components/*.jsx", "./src/views/*.jsx", "./src/*.jsx"],
  theme: {
    extend: {},
    colors: {
      'primary': '#B41C2E',
      'white': '#ffffff',
      'lightgray': '#A7A7A7',
      'gray': '#e4e4e4',
      'darkgray': '#424242',
      'green': '#3CBC00',
      'purple': '#8501ff',
    }
  },
  plugins: [
    // require("@tailwindcss/forms"), 
    // require("tw-elements/dist/plugin")
  ],
};
