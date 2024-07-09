import { style } from "@vanilla-extract/css";

import { vars } from "./themes";

export const menuItem = style({
  position: "relative",
  borderRadius: vars.rounded.menuItem,
  padding: vars.padding.menuItem,
  get selectors() {
    return {
      [`${menu} &`]: {
        display: "grid",
        gridAutoFlow: "column",
        alignItems: "center",
        gap: "8px",
        gridAutoColumns: "minmax(auto, max-content) auto max-content",
        cursor: "pointer",
        color: vars.colors.primary.content,
      },
      [`${menu} &:hover`]: {
        backgroundColor: vars.colors.primary.bg,
      },
      [`${menu} &:not(:has(${menu})):active`]: {
        backgroundColor: vars.colors.primary.focus,
      },
    };
  },
});

export const menu = style({
  borderRadius: vars.rounded.menu,
  padding: vars.padding.menu,
  boxShadow: vars.shadow.menu,
  backgroundColor: vars.colors.base[100],
  width: vars.width.card["extra-small"],
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
});
