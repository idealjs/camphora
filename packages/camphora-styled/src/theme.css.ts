import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  zIndex: {
    menu: null,
    dialog: null,
  },
  colors: {
    base: {
      100: null,
      200: null,
      300: null,
      content: null,
    },
    primary: {
      bg: null,
      focus: null,
      content: null,
    },
    secondary: {
      bg: null,
      focus: null,
      content: null,
    },
    accent: {
      bg: null,
      focus: null,
      content: null,
    },
    neutral: {
      bg: null,
      focus: null,
      content: null,
    },
    info: {
      bg: null,
      content: null,
    },
    success: {
      bg: null,
      content: null,
    },
    warning: {
      bg: null,
      content: null,
    },
    error: {
      bg: null,
      content: null,
    },
  },
  opacity: {
    btn: null,
  },
  animation: {
    btn: null,
    drawer: null,
    popover: null,
  },
  rounded: {
    btn: null,
    card: null,
  },
  padding: {
    card: null,
    menuLabel: null,
    menuBar: null,
  },
  size: {
    card: {
      small: null,
      medium: null,
      large: null,
    },
  },
});

export const lightTheme = createTheme(vars, {
  zIndex: {
    menu: "1",
    dialog: "10",
  },
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
    drawer: "0.4s",
    popover: "0.1s",
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
  size: {
    card: {
      small: "256px",
      medium: "512px",
      large: "1024px",
    },
  },
});
