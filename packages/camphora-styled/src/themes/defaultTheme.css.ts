import { createTheme, keyframes } from "@vanilla-extract/css";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const [defaultPalette, paletteVars] = createTheme({
  base: {
    100: "hsl(240 20% 99%)",
    200: "hsl(240 20% 89%)",
    300: "hsl(240 21% 79%)",
    content: "hsl(240 2% 20%)",
  },
  primary: {
    bg: "hsl(225 87% 75%)",
    focus: "hsl(225 87% 60%)",
    content: "hsl(225 100% 15%)",
  },
  secondary: {
    bg: "hsl(269 66% 76%)",
    focus: "hsl(268 66% 61%)",
    content: "hsl(269 100% 15%)",
  },
  accent: {
    bg: "hsl(29 67% 50%)",
    focus: "hsl(29 67% 40%)",
    content: "hsl(29 100% 10%)",
  },
  neutral: {
    bg: "hsl(263 25% 18%)",
    focus: "hsl(262 26% 14%)",
    content: "hsl(263 60% 84%)",
  },
  info: {
    bg: "hsl(192 77% 67%)",
    content: "hsl(192 100% 13%)",
  },
  success: {
    bg: "hsl(160 68% 43%)",
    content: "hsl(160 100% 9%)",
  },
  warning: {
    bg: "hsl(46 88% 62%)",
    content: "hsl(46 100% 12%)",
  },
  error: {
    bg: "hsl(348 93% 64%)",
    content: "hsl(348 100% 13%)",
  },
});

export const [defaultTheme, themeVars] = createTheme({
  btn: {
    opacity: { ghost: "20%" },
  },
  shadow: {
    menu: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  animation: {
    btn: "0.25s",
    drawer: "0.3s",
    dropdown: `${fadeIn} 0.1s ease-in-out`,
  },
  rounded: {
    btn: "8px",

    menuItem: "4px",
    menu: "8px",
  },
  padding: {
    menuLabel: "2px 4px",
    menuBar: "4px 2px",
    menuItem: "4px 8px",
    menu: "4px",
  },
  width: {
    drawerMenu: {
      small: "100px",
      medium: "200px",
      large: "300px",
    },
  },
  input: {
    height: {
      "extra-small": "24px",
      small: "32px",
      medium: "48px",
      large: "64px",
    },
    lineHeight: {
      "extra-small": "20px",
      small: "24px",
      medium: "28px",
      large: "36px",
    },
  },
  card: {
    rounded: {
      xs: "4px",
      sm: "6px",
      md: "8px",
      lg: "12px",
    },
    padding: {
      xs: "2px",
      sm: "4px",
      md: "4px",
      lg: "8px",
    },
    shadow: {
      none: "0",
      xs: "0 2px 3px rgba(0, 0, 0, 0.1)",
      sm: "0 4px 6px rgba(0, 0, 0, 0.1)",
      md: "0 4px 6px rgba(0, 0, 0, 0.1)",
      lg: "0 6px 8px rgba(0, 0, 0, 0.1)",
    },
    width: {
      xs: "144px",
      sm: "192px",
      md: "256px",
      lg: "512px",
    },
    backgroundColor: {
      default: "#fff",
      100: "hsl(240 20% 99%)",
      200: "hsl(240 20% 89%)",
      300: "hsl(240 21% 79%)",
    },
  },
});
