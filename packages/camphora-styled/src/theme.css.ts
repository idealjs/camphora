import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    primary: null,
    secondary: null,
  },
  animation: {
    btn: null,
  },
  rounded: {
    btn: null,
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    primary: "#570df8",
    secondary: "#f000b8",
  },
  animation: {
    btn: "0.25s",
  },
  rounded: {
    btn: "0.5rem",
  },
});
