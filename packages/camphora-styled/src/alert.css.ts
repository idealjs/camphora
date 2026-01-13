import { style, styleVariants } from "@vanilla-extract/css";
import { colorTokenVars } from "./tokens/color.css";

export const alert = style({
  padding: "12px 16px",
  borderRadius: "8px",
  display: "flex",
  gap: "12px",
  alignItems: "flex-start",
  border: `1px solid ${colorTokenVars.common[300]}`,
  background: colorTokenVars.common[100],
  color: colorTokenVars.common[900],
});

export const alertContent = style({
  flex: "1 1 auto",
});

export const alertIcon = style({
  marginTop: "2px",
  flex: "0 0 auto",
});

export const alertVariants = styleVariants({
  info: {
    background: colorTokenVars.info[100],
    border: `1px solid ${colorTokenVars.info[300]}`,
    color: colorTokenVars.info[800],
  },
  success: {
    background: colorTokenVars.success[100],
    border: `1px solid ${colorTokenVars.success[300]}`,
    color: colorTokenVars.success[800],
  },
  warning: {
    background: colorTokenVars.warning[100],
    border: `1px solid ${colorTokenVars.warning[300]}`,
    color: colorTokenVars.warning[800],
  },
  error: {
    background: colorTokenVars.error[100],
    border: `1px solid ${colorTokenVars.error[300]}`,
    color: colorTokenVars.error[800],
  },
});

export const closeButton = style({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "4px",
  marginLeft: "8px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  selectors: {
    "&:focus": {
      outline: "2px solid transparent",
      boxShadow: `0 0 0 3px ${colorTokenVars.primary?.[200] ?? colorTokenVars.common[200]}`,
    },
  },
});
