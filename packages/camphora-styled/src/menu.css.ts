import { style } from "@vanilla-extract/css";

export const menu = style({
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  selectors: {
    ["ul&"]: {
      listStyleType: "none",
      margin: "0px",
    },
  },
});

export const menuItem = style({
  selectors: {
    [`${menu} &`]: {
      display: "grid",
      gridAutoFlow: "column",
      alignItems: "center",
      gap: "8px",
      gridAutoColumns: "minmax(auto, max-content) auto max-content",
    },
  },
});
