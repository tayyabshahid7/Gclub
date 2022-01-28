export default {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      "app-color": "#233328",
      "app-gray": "#999a9b",
      "app-rose": "#5C2F42",
      "value-color": "#182637",
      "club-color": "#514829",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "2.125rem",
      ml: "3.rem",
      xl: "3.5rem",
    },
    extend: {
      backgroundImage: (theme) => ({
        "bg-sign-in": "url('/assets/images/login-screen.webp')",
        "bg-sign-up": "url('/assets/images/login-screen.webp')",
      }),
    },
  },
};
