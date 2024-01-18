import { style } from "@vanilla-extract/css";

import { clickActionInput } from "./actions";

export const modal = style({
  selectors: {
    [`${clickActionInput}:checked + &`]: {
      visibility: "visible",
    },
  },
});

export const modalContent = style({});
