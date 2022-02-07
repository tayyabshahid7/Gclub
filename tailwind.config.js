export default {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      "app-color": "#233328",
      "app-green": "#1F3427",
      "app-brass": "#514829",
      "app-wash": "#E7DFE8",
      "app-gray": "#5c5c5c",
      "app-rose": "#5C2F42",
      "app-charcoal": "#242625",
      "app-loader": "#222428",
      "app-secondary-gray": "#E0DEDA",
      "value-color": "#182637",
      "club-color": "#514829",
      "contact-color": "#E0DEDA",
    },
    fontSize: {
      xs: [
        "14px",
        {
          fontWeight: 400,
          fontStyle: "normal",
          lineHeight: "16px",
          letterSpacing: "2px",
        },
      ],
      sm: [
        "16px",
        { fontWeight: 400, lineHeight: "32px", letterSpacing: "0em" },
      ],
      lg: [
        "24px",
        { fontWeight: 400, lineHeight: "40px", letterSpacing: "0em" },
      ],
      xl: [
        "32px",
        { fontWeight: 400, lineHeight: "40px", letterSpacing: "0em" },
      ],
      "2xl": [
        "64px",
        { fontWeight: 400, lineHeight: "60px", letterSpacing: "0em" },
      ],
      h1: [
        "72px",
        {
          fontWeight: 100,
          fontStyle: "normal",
          lineHeight: "72px",
          letterSpacing: "0em",
          textTransform: "uppercase",
        },
      ],
      h2: [
        "56px",
        {
          fontWeight: 100,
          fontStyle: "normal",
          lineHeight: "56px",
          letterSpacing: "0em",
          textTransform: "uppercase",
        },
      ],
    },
    extend: {
      fontFamily: {
        acumin: "Acumin Variable Concept, serif",
        "ivy-presto": "IvyPresto Display, serif",
      },
      spacing: {
        forty: "40rem",
      },
      backgroundImage: (theme) => ({
        "bg-sign-in": "url('/assets/images/login-screen.webp')",
        "bg-sign-up": "url('/assets/images/login-screen.webp')",
      }),
    },
  },
};
