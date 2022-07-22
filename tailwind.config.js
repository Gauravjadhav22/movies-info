module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
    colors: {
    
      "transparent": "transparent",
      "current": "currentColor",
      "red":"#FF0000",
      "white": "#ffffff",
      "purple": "#3f3cbb",
      "midnight": "#121063",
      "metal": "#565584",
      "tahiti": "#3ab7bf",
      "silver": "#ecebff",
      "bubble-gum": "#ff77e9",
      "bermuda": "#78dcca",
      "body-col": "#0F172A",
      "content-col": "#1E293B",
      "search-1": "#4DD637",
      "search-2": "#3DBE29",
      "black":"#000000",
    },
  },
  plugins: [],
};
