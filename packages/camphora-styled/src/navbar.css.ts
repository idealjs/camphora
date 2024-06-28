import { style } from "@vanilla-extract/css";

export const navbar = style({
  position: "sticky",
  top: "0px",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const navbarStart = style({
  width: "50%",
  justifyContent: "flex-start",
});

export const navbarEnd = style({
  width: "50%",
  justifyContent: "flex-end",
});

export const navbarCenter = style({
  flexShrink: 0,
});
