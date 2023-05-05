import { clickReaction, clickReactionInput } from "@idealjs/camphora-action";
import { style } from "@vanilla-extract/css";

export const drawer = style({
  position: "relative",
  height: "100vh",
});

export const drawerContent = style({
  selectors: {
    [`${clickReactionInput}:checked ~ &`]: {},
    [`${clickReaction} &`]: {},
  },
});

export const drawerSide = style({
  selectors: {
    [`${drawer} > &`]: {
      height: "100vh",
      width: "100vw",
      position: "absolute",
      top: 0,
      overflow: "hidden",
      visibility: "hidden",
    },
    [`${clickReaction} > ${clickReactionInput}:checked ~ &`]: {
      visibility: "visible",
    },
  },
});

export const drawerOverlay = style({
  selectors: {
    [`${drawer} > ${drawerSide} &`]: {
      display: "block",
      position: "absolute",
      width: "100%",
      height: "100%",
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "300ms",
    },
    [`${clickReaction} > ${clickReactionInput}:checked ~ ${drawerSide} &`]: {
      background: "black",
      opacity: 0.4,
    },
  },
});

export const drawerMenu = style({
  selectors: {
    [`${drawer} > ${drawerSide} &`]: {
      height: "100%",
      width: 300,
      transform: "translateX(-300px)",
      background: "green",
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "300ms",
    },
    [`${clickReaction} > ${clickReactionInput}:checked ~ ${drawerSide} &`]: {
      transform: "translateX(0px)",
    },
  },
});
