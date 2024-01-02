import { focusAction, hoverAction, vars } from "@idealjs/camphora-styled";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const menuBar = style({
  display: "flex",
  zIndex: 1,
  backgroundColor: vars.colors.primary.bg,
  padding: vars.padding.menuBar,
});

export const menu = style({});

export const menuCard = style({
  backgroundColor: vars.colors.secondary.bg,
});

export const menuItem = style({});

export const subMenus = style({
  top: calc.negate(vars.padding.card),
  left: "100%",
  right: "auto",
  selectors: {
    [`${focusAction}:not(:focus) ${hoverAction} > &`]: {
      visibility: "hidden",
    },
  },
});

export const menuLabel = style({
  cursor: "pointer",
  whiteSpace: "nowrap",
  userSelect: "none",
  selectors: {
    [`${menu} &`]: {
      padding: vars.padding.menuLabel,
    },
    [`${menu} &:hover, ${menu}:focus &`]: {
      backgroundColor: vars.colors.primary.focus,
      borderRadius: vars.rounded.card,
    },
  },
});

export const menuItemLabel = style({
  cursor: "pointer",
  whiteSpace: "nowrap",
  userSelect: "none",
  padding: vars.padding.menuLabel,
  selectors: {
    [`${menuItem}:hover > &`]: {
      backgroundColor: vars.colors.secondary.focus,
      borderRadius: vars.rounded.card,
    },
  },
});
