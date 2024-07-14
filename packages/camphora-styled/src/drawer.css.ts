import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { IaData } from "./interactive.css";
import { menu } from "./menu.css";
import { themeVars } from "./themes/defaultTheme.css";

export const drawer = style({
  position: "relative",
  display: "grid",
  gridAutoColumns: "auto",
  height: "100%",
});

export const drawerContent = style({
  selectors: {
    [`${IaData}:checked ~ &`]: {},
    [`${drawer} &`]: {
      overflowY: "auto",
    },
  },
});

export const drawerSide = style({
  selectors: {
    [`${drawer} > &`]: {
      height: "100%",
      position: "absolute",
      visibility: "hidden",
      overflowY: "hidden",

      transform: "translateX(-100%)",
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: themeVars.animation.drawer,
    },
    [`${IaData}:checked ~ &`]: {
      visibility: "visible",
      overflowY: "auto",
      transform: "translateX(0px)",
    },
  },
});

export const drawerMenu = style([
  menu,
  {
    minHeight: "100%",
    boxSizing: "border-box",
  },
]);
