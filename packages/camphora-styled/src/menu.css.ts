import { style } from "@vanilla-extract/css";

import { card } from "./card.css";
import { themeVars } from "./themes";

export const menuItem = style({
  position: "relative",
  borderRadius: themeVars.rounded.menuItem,
  padding: themeVars.padding.menuItem,
  get selectors() {
    return {
      [`${menu} &`]: {
        display: "grid",
        gridAutoFlow: "column",
        alignItems: "center",
        gap: "8px",
        gridAutoColumns: "minmax(auto, max-content) auto max-content",
        cursor: "pointer",
        color: themeVars.colors.primary.content,
      },
      [`${menu} &:hover`]: {
        backgroundColor: themeVars.colors.primary.bg,
      },
      [`${menu} &:not(:has(${menu})):active`]: {
        backgroundColor: themeVars.colors.primary.focus,
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
