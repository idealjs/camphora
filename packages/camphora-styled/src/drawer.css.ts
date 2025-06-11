import { style } from "@vanilla-extract/css";

import { inputData } from "./interactive.css";

export const drawer = style({
  position: "relative",
  display: "grid",
  gridAutoColumns: "max-content auto",
  height: "100%",
});

export const drawerContent = style({
  selectors: {
    [`${inputData}:checked ~ &`]: {},
    [`${drawer} &`]: {
      gridColumnStart: 2,
      gridRowStart: 1,
      overflowY: "hidden",
    },
  },
});

export const drawerSide = style({
  selectors: {
    [`${drawer} > &`]: {
      gridColumnStart: 1,
      gridRowStart: 1,
      height: "100%",
      position: "absolute",
      visibility: "hidden",
      overflowY: "hidden",
      transform: "translateX(-100%)",
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "0.3s",
      display: "flex",
      flexDirection: "column",
      zIndex: 400,
    },
    [`${inputData}:checked ~ &`]: {
      visibility: "visible",
      overflowY: "auto",
      transform: "translateX(0px)",
    },
  },
});

export const responsiveDrawerSide = style({
  selectors: {
    [`${drawer} > &`]: {
      "@media": {
        "(min-width: 1024px)": {
          position: "static",
          visibility: "visible",
          overflowY: "auto",
          transform: "none",
          transition: "none",
        },
      },
    },
  },
});

export const responsiveDrawerToggle = style({
  selectors: {
    [`${drawer} &`]: {
      "@media": {
        "(min-width: 1024px)": {
          display: "none",
        },
      },
    },
  },
});
