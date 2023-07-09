import { globalStyle, style } from "@vanilla-extract/css";

export const navbar = style({
  display: "flex",
  alignItems: "center",
});

globalStyle(`${navbar} > *`, {
  display: "inline-flex",
  alignItems: "center",
});

export const navStart = style({
  width: "50%",
  justifyContent: "flex-start",
});

export const navEnd = style({
  width: "50%",
  justifyContent: "flex-end",
});

export const navCenter = style({
  flexShrink: 0,
});
