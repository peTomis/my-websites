module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true, 
    },
    extend: {
      colors: {
        background:{
          buttonBorder: "#333333",
          footer: "#111111",
          header: "#111111",
          page: "#111111",

        },
        primary: {
          DEFAULT: "#111111",
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
