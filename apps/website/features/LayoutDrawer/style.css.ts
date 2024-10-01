import { drawer, drawerSide } from "@idealjs/camphora-styled";
import { style } from "@vanilla-extract/css";

export const responsiveDrawerSide = style([
  drawerSide,
  {
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
  },
]);
