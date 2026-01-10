import { style } from "@vanilla-extract/css";

import { colorTokenVars } from "./tokens/color.css";

export const menuItem = style({
  position: "relative",
  borderRadius: "4px",
  padding: "4px 8px",
  get selectors() {
    return {
      [`${menu} &`]: {
        display: "grid",
        gridAutoFlow: "column",
        alignItems: "center",
        gap: "8px",
        gridAutoColumns: "minmax(auto, max-content) auto max-content",
        cursor: "pointer",
      },
    };
  },
});

export const menu = style([
  {
    padding: "4px",
    selectors: {
      "ul&": {
        listStyleType: "none",
        margin: "0px",
      },
      "& &": {
        position: "absolute",
        display: "none",
      },
      [`& ${menuItem}:hover > &`]: {
        display: "block",
        top: "0px",
        left: "100%",
      },
    },
  },
]);

export const menuItemPrimary = style({
  selectors: {
    [`${menu} &:hover`]: {
      backgroundColor: colorTokenVars.primary[500],
    },
    [`${menu} &:not(:has(${menu})):active`]: {
      backgroundColor: colorTokenVars.primary[600],
    },
  },
});

export const drawerMenu = style([
  menu,
  {
    boxSizing: "border-box",
    minHeight: "100%",
  },
]);
