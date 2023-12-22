import {
  clickAction,
  clickActionInput,
  clickReaction,
  vars,
} from "@idealjs/camphora-styled";
import { style } from "@vanilla-extract/css";

export const sideDrawer = style({
  height: "100%",
  backgroundColor: vars.colors.base.content,
  "@media": {
    "screen and (min-width: 375px)": {
      width: "66%",
    },
    "screen and (min-width: 1024px)": {
      width: "24%",
    },
    "screen and (min-width: 1280px)": {
      width: "20%",
    },
    "screen and (min-width: 1440px)": {
      width: "16%",
    },
    "screen and (min-width: 1920px)": {
      width: "12%",
    },
  },
});

export const drawerAnimate = style({
  transform: "translateX(-100%)",
  transitionProperty: "all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: vars.animation.drawer,
  selectors: {
    [`${clickAction} > ${clickActionInput}:checked ~ ${clickReaction} &`]: {
      transform: "translateX(0px)",
    },
  },
});

export const overlayAnimate = style({
  transitionProperty: "all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: vars.animation.drawer,
  opacity: 0,
  selectors: {
    [`${clickAction} > ${clickActionInput}:checked ~ ${clickReaction} &`]: {
      transform: "translateX(0px)",
      opacity: 0.4,
    },
  },
});
