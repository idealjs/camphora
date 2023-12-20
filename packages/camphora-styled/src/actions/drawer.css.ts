import { style } from "@vanilla-extract/css";

import { vars } from "../theme.css";
import { clickReaction, clickReactionInput } from "./reaction.css";

export const drawer = style({
  position: "relative",
  display: "grid",
  gridAutoColumns: "auto",
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
      height: "100%",
      width: "100%",
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
      transitionDuration: vars.animation.drawer,
    },
    [`${clickReaction} > ${clickReactionInput}:checked ~ ${drawerSide} &`]: {
      background: "black",
      opacity: 0.4,
    },
  },
});

export const drawerMenu = style({
  backgroundColor: vars.colors.base[100],
  selectors: {
    [`${drawer} > ${drawerSide} &`]: {
      height: "100%",
      width: "fit-content",
      transform: "translateX(-100%)",
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: vars.animation.drawer,
    },
    [`${clickReaction} > ${clickReactionInput}:checked ~ ${drawerSide} &`]: {
      transform: "translateX(0px)",
    },
  },
});
