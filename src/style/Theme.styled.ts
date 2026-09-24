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
    body: "0.875rem", // 14px
    medium: "1rem", // 16px
    h2: "1.25rem", // 20px
    navigation: "1.125rem", // 18px
    mobileHeading: "1.5625rem", // 25px
    h1: "2.125rem", // 34px
    logo: "3.375rem", // 54px
  },

  fontWeights: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  breakpoints: {
    mobile: "720px",
  },

  sizes: {
    maxWidth: 1024,
  },
} as const;
export type Theme = typeof theme;
