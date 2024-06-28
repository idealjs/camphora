import { createTheme } from "@vanilla-extract/css";

import { vars } from "./contract.css";

export const light = createTheme(vars, {
  colors: {
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
  },
  opacity: {
    btn: "20%",
  },
  animation: {
    btn: "0.25s",
    drawer: "0.3s",
    dropdown: "0.1s",
  },
  rounded: {
    btn: "8px",
    card: "4px",
  },
  padding: {
    card: "4px",
    menuLabel: "2px 4px",
    menuBar: "4px 2px",
  },
  width: {
    card: {
      "extra-small": "144px",
      small: "192px",
      medium: "256px",
      large: "512px",
    },
    drawerMenu: {
      small: "100px",
      medium: "200px",
      large: "300px",
    },
  },
  height: {
    input: {
      "extra-small": "24px",
      small: "32px",
      medium: "48px",
      large: "64px",
    },
  },
  lineHeight: {
    input: {
      "extra-small": "20px",
      small: "24px",
      medium: "28px",
      large: "36px",
    },
  },
});
