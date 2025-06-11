import { style } from "@vanilla-extract/css";

export const glassFilter = style({});

export const glassBackgroundLayer = style({
  gridRow: "1",
  gridColumn: "1",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px) saturate(130%)",
  filter: `url(#${glassFilter})`,
  zIndex: 1,
  borderRadius: "inherit",
});

export const glassBorderLayer = style({
  gridRow: "1",
  gridColumn: "1",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  zIndex: 2,
  borderRadius: "inherit",
});

export const glassContentLayer = style({
  gridRow: "1",
  gridColumn: "1",
  zIndex: 3,
  borderRadius: "inherit",
});

export const glassContainer = style({
  display: "grid",
  gridTemplateRows: "1fr",
  gridTemplateColumns: "1fr",
});
