import { style } from "@vanilla-extract/css";

import { card } from "./card.css";
import { paletteVars, sizeVars } from "./themes";

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
      [`${menu} &:hover`]: {
        backgroundColor: paletteVars.primary.bg,
      },
      [`${menu} &:not(:has(${menu})):active`]: {
        backgroundColor: paletteVars.primary.focus,
      },
    };
  },
});

export const menu = style([
  card,
  {
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
