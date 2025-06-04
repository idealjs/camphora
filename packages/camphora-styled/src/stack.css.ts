import { style } from "@vanilla-extract/css";

export const stack = style({
  display: "grid",
  gridTemplateColumns: "3px 4px 1fr 4px 3px",
  gridTemplateRows: "3px 4px 1fr 4px 3px",
});

export const stackItem = style({
  selectors: {
    [`${stack} &:nth-last-child(1)`]: {
      gridColumn: "1 / 6",
      gridRow: "1 / 4",
    },
    [`${stack} &:nth-last-child(2)`]: {
      gridColumn: "2 / 5",
      gridRow: "2 / 5",
    },
    [`${stack} &:nth-last-child(n+3)`]: {
      gridColumn: "3 / 4",
      gridRow: "3 / 6",
    },
  },
});
