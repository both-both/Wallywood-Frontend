export const theme = {
  colors: {
    primary: "#D97852",
    secondary: "#5C1F06",
    tertiary: "#D1B3A7",
    grey: "#524641",
    black: "#000",
    white: "#ffffff",
  },

  fonts: {
    primary: "'Titillium Web', sans-serif",
  },
  fontSizes: {
    body: "14px",
    medium: "16px",
    navigation: "22px",
    h2: "20px",
    mobileHeading: "25px",
    h1: "34px",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
  },

  breakpoints: {
    mobile: "600px",
    footer: "800px",
    goals: "1000px",
    header: "1150px",
    navigation: "1400px",
  },
} as const;
export type Theme = typeof theme;
