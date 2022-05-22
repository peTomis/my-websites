module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true, 
    },
    extend: {
      colors: {
        background:{
          footer: "#777777",
          header: "#888888",
          page: "#AAAAAA",
        },
        primary: {
          DEFAULT: "#FFFFFF",
        },
        
      },
    },
    fontFamily: {
      assistant: ["Assistant", "sans-serif"],
    },
    fontSize: {
      h1: "48px",
    },
  },
  plugins: [],
}
