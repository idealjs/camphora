import { style } from "@vanilla-extract/css";

export const overlay = style({
  height: "100%",
  width: "100%",
  display: "block",
  background: "black",
  opacity: 0.4,
});

export const screen = style({
  height: "100vh",
  width: "100vw",
});

export const full = style({
  height: "100%",
  width: "100%",
});

export const absolute = style({
  position: "absolute",
});

export const relative = style({
  position: "relative",
});

export const runtimeContainer = style({
  pointerEvents: "none",
});

export const runtimeComponent = style({
  pointerEvents: "auto",
});

export const editContainer = style({
  pointerEvents: "auto",
  width: "fit-content",
  height: "fit-content",
});

export const editComponent = style({
  pointerEvents: "none",
});
