import { createVar, style } from "@vanilla-extract/css";
import {} from "@vanilla-extract/css-utils";

export const button = style({
  cursor: "pointer",
});

export const buttonActive = style({});

const buttonBgOpacity = createVar();
const buttonBgColor = createVar();

export const buttonGhost = style({
  vars: {
    [buttonBgOpacity]: "0.2",
    [buttonBgColor]: "215 27.907% 16.863%",
  },
  selectors: {
    [`&:hover, ${buttonActive}&`]: {
      backgroundColor: `hsl(${buttonBgColor}/${buttonBgOpacity})`,
    },
  },
});
