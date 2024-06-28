import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
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
    dropdown: null,
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
  width: {
    card: {
      "extra-small": null,
      small: null,
      medium: null,
      large: null,
    },
    drawerMenu: {
      small: null,
      medium: null,
      large: null,
    },
  },
  height: {
    input: {
      "extra-small": null,
      small: null,
      medium: null,
      large: null,
    },
  },
  lineHeight: {
    input: {
      "extra-small": null,
      small: null,
      medium: null,
      large: null,
    },
  },
});
