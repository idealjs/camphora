import { keyframes, style } from "@vanilla-extract/css";

import { inputData } from "./interactive.css";

const gradient = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 0.4 },
});

export const overlay = style({
  height: "100%",
  width: "100%",
  position: "absolute",
  background: "black",
  cursor: "pointer",
  visibility: "hidden",
  zIndex: 300,
  selectors: {
    [`${inputData}:checked ~ &`]: {
      animation: `${gradient} 300ms`,
      opacity: 0.4,
      visibility: "visible",
    },
  },
});
