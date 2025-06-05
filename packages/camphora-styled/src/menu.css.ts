import { style } from "@vanilla-extract/css";

import { paletteVars, sizeVars } from "./themeContracts.css";

export const menuItem = style({
  position: "relative",
  borderRadius: sizeVars.menuItem.rounded.md,
  padding: sizeVars.menuItem.padding.md,
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
    padding: sizeVars.menu.padding.md,
    selectors: {
      ["ul&"]: {
        listStyleType: "none",
        margin: "0px",
      },
      ["& &"]: {
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
      backgroundColor: paletteVars.primary.bg,
    },
    [`${menu} &:not(:has(${menu})):active`]: {
      backgroundColor: paletteVars.primary.focus,
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
