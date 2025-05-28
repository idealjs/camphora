import { style } from "@vanilla-extract/css";

import { paletteVars, sizeVars } from "./themes";

export const tabs = style({
  display: "grid",
  vars: {},
  selectors: {},
});

export const tab = style({
  selectors: {
    [`${tabs} &`]: {
      appearance: "none",
      gridRowStart: 1,
      margin: "0px",
      backgroundColor: paletteVars.primary.bg,
      color: paletteVars.primary.content,
    },
    [`${tabs} &:checked`]: {
      backgroundColor: paletteVars.primary.focus,
    },
    ["&:after"]: {
      content: "attr(aria-label)",
    },
  },
});

export const tabPanel = style({
  selectors: {
    [`${tabs} &`]: {
      gridColumnStart: 1,
      gridRowStart: 2,
      gridColumnEnd: "span 9999",
      display: "none",
    },
    [`${tab}:checked+&`]: {
      display: "block",
    },
  },
});
