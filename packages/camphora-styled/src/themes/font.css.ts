import { createTheme } from "@vanilla-extract/css";

import { typoTokenVars } from "../tokens/typo.css";

const typoValues = {
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeight: {
    tight: "1.2",
    normal: "1.5",
    loose: "1.8",
  },
  letterSpacing: {
    tight: "-0.02em",
    normal: "0",
    loose: "0.02em",
  },
};

export const fontTheme = createTheme(typoTokenVars, typoValues);
