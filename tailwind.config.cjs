module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        'header':"#2b2d42",
        'headerFont': "#8d99ae",
        'main' : "#415a77",
        'button': "#1d3557",
        'buttonColor': "#f1faee"
      },
      spacing: {
        '128': '32rem',
        '100': '26rem'
      },
      screens:{
        'sm':{'max': "420px"}
      }
    },
  },
  plugins: [],
};
