/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#DB4444",
        secondary2: "#F5F5F5",
        inputColor: "#F5F5F5",
      },
    },
  },

  plugins: [],
};
