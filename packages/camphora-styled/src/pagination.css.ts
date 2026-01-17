import { style } from "@vanilla-extract/css";

import { colorTokenVars } from "./tokens/color.css";
import { sizeTokenVars } from "./tokens/size.css";

export const pagination = style({
  display: "flex",
  alignItems: "center",
  gap: sizeTokenVars.spacing.xs,
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const paginationItem = style({
  display: "flex",
});

export const paginationButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "40px",
  height: "40px",
  padding: `0 ${sizeTokenVars.spacing.sm}`,
  borderRadius: sizeTokenVars.borderRadius.sm,
  border: "none",
  backgroundColor: "transparent",
  color: colorTokenVars.common[600],
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
  fontSize: "14px",
  selectors: {
    "&:hover": {
      backgroundColor: colorTokenVars.common[100],
      color: colorTokenVars.common[900],
    },
    "&:focus": {
      outline: `2px solid ${colorTokenVars.primary[500]}`,
      outlineOffset: "2px",
    },
  },
});

export const paginationActive = style({
  selectors: {
    [`${paginationButton}&`]: {
      backgroundColor: colorTokenVars.primary[500],
      color: colorTokenVars.primary[900],
      fontWeight: "500",
    },
    [`${paginationButton}&:hover`]: {
      backgroundColor: colorTokenVars.primary[600],
    },
  },
});

export const paginationDisabled = style({
  selectors: {
    [`${paginationButton}&`]: {
      opacity: 0.5,
      cursor: "not-allowed",
      pointerEvents: "none",
    },
  },
});
