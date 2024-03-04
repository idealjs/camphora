import { hoverAction, menu, vars } from "@idealjs/camphora-styled";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const menuBar = style({
  backgroundColor: vars.colors.primary.bg,
  padding: vars.padding.menuBar,
});

export const menuCard = style({
  backgroundColor: vars.colors.secondary.bg,
  width: vars.size.card.small,
});

export const subMenus = style({
  top: calc.negate(vars.padding.card),
  left: "100%",
  right: "auto",
  visibility: "hidden",
  selectors: {
    [`${menuBar}:not(:has(.showSubMenus)) ${hoverAction} > &`]: {
      visibility: "hidden",
    },
    [".showSubMenus > &"]: {
      visibility: "visible",
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
});
