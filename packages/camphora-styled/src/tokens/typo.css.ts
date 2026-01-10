import { createThemeContract } from "@vanilla-extract/css";

export const typoTokenVars = createThemeContract({
  fontSize: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  fontWeight: {
    light: null,
    normal: null,
    medium: null,
    semibold: null,
    bold: null,
  },
  lineHeight: {
    tight: null,
    normal: null,
    loose: null,
  },
  letterSpacing: {
    tight: null,
    normal: null,
    loose: null,
  },
});
