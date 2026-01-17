import { style } from "@vanilla-extract/css";

import { colorTokenVars } from "./tokens/color.css";
import { sizeTokenVars } from "./tokens/size.css";

export const breadcrumb = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const breadcrumbItem = style({
  display: "flex",
  alignItems: "center",
});

export const breadcrumbSeparator = style({
  margin: `0 ${sizeTokenVars.spacing.xs}`,
  color: colorTokenVars.common[400],
  userSelect: "none",
});

export const breadcrumbLink = style({
  color: colorTokenVars.common[600],
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      color: colorTokenVars.primary[500],
    },
    "&:focus": {
      outline: `2px solid ${colorTokenVars.primary[500]}`,
      outlineOffset: "2px",
    },
  },
});

export const breadcrumbCurrent = style({
  color: colorTokenVars.common[900],
  fontWeight: "500",
  selectors: {
    "&:focus": {
      outline: `2px solid ${colorTokenVars.primary[500]}`,
      outlineOffset: "2px",
    },
  },
});
