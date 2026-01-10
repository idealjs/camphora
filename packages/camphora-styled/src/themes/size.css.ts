import { createTheme } from "@vanilla-extract/css";

import { sizeTokenVars } from "../tokens/size.css";

const sizeValues = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    xs: "2px",
    sm: "8px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  },
  borderWidth: {
    thin: "1px",
    normal: "2px",
    thick: "4px",
  },
  padding: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  margin: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  shadow: {
    none: "none",
    xs: "0 1px 2px rgba(0,0,0,0.1)",
    sm: "0 2px 4px rgba(0,0,0,0.1)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 6px 8px rgba(0,0,0,0.1)",
    xl: "0 8px 10px rgba(0,0,0,0.1)",
  },
};

export const sizeTheme = createTheme(sizeTokenVars, sizeValues);
