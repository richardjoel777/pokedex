module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1F2833",
        text_primary: "#66FCF1",
        border_primary: "#45A29E",
        light_blue: "#b4ebff",
        dark_blue: "#00003f",
        orange: "#ff6900",
        thick_blue: "#14b9ff",
        light_green: "#b4f000",
        pink: "#d28cd2",
        light_yellow: "#fac85a",
        dark_green: "#46c846",
        brown: "#b48c64",
        purple: "#a08cff",
        blue: "#5078dc",
        light_brown: "#787878",
        pale_blue: "#aac8f0",
        light_pink: "#ffafdc",
        border_dark: "#466e9b",
        rose: "#FB7185",
        sdw: "#4B5563",
      },
      fontFamily: {
        primary_font: ["Noto Sans", "Arial", "sans-serif"],
      },
      backgroundImage: {
        primary_background: "url('./assets/background.jpg')",
        pokeball: "url(./assets/trans-ball-bg.png)",
        shuffle_arrow: "url(./assets/shuffle-arrow.png)",
        pokedex_bg: "url(./assets/pokedex_bg.png)",
        pokemon_circle: "url(./assets/pokemon_circle_bg.png)",
        pokeCard: "url(./assets/card-bg.png)",
      },
      boxShadow: {
        blue: "#58b9d6 3px 3px 3px 3px",
        nav: "inset 0 0 0 0 #31302B",
        navHover: "inset 0 100px 0 0 #b4ebff",
      },
      dropShadow: {
        pokeShadow: "1px 1px 1px #ccc",
        xlPokeShadow: "3px 3px 3px #ccc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
