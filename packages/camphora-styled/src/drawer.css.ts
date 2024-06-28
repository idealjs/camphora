import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { IaData } from "./interactive.css";
import { vars } from "./themes/contract.css";

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
      display: "grid",
      height: "100%",
      width: "100%",
      position: "absolute",
      visibility: "hidden",
      overflowY: "hidden",
    },
    [`${IaData}:checked ~ &`]: {
      visibility: "visible",
      overflowY: "auto",
    },
  },
});

export const drawerOverlay = style({
  selectors: {
    [`${drawer} > ${drawerSide} &`]: {
      gridColumnStart: "1",
      gridRowStart: "1",
      placeSelf: "stretch",
      position: "sticky",
      top: 0,
      cursor: "pointer",
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "300ms",
    },
    [`${IaData}:checked ~ ${drawerSide} &`]: {
      background: "black",
      opacity: 0.4,
    },
  },
});

export const drawerMenu = style({
  selectors: {
    [`${drawer} > ${drawerSide} &`]: {
      gridColumnStart: "1",
      gridRowStart: "1",
      boxSizing: "border-box",
      width: vars.width.drawerMenu.large,
      transform: `translateX(${calc.negate(vars.width.drawerMenu.large)})`,
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: vars.animation.drawer,
    },
    [`${IaData}:checked ~ ${drawerSide} &`]: {
      transform: "translateX(0px)",
    },
  },
});
