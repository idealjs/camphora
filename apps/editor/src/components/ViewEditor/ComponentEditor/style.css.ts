import { editComponent, editContainer } from "@idealjs/camphora-styled";
import { style } from "@vanilla-extract/css";

export const helpLine = style({
  visibility: "hidden",
  selectors: {
    [`${editContainer}:focus > &`]: {
      visibility: "visible",
    },
    [`${editContainer}:hover > &:not(:has(~ ${editComponent} ${editContainer}:hover))`]:
      {
        visibility: "visible",
      },
  },
});

export const helpPoint = style({
  visibility: "hidden",
  selectors: {
    [`${editContainer}:focus > &`]: {
      visibility: "visible",
    },
  },
});
