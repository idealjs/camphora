import { style } from "@vanilla-extract/css";

export const cardShadow = style({});

export const card = style({
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "16px",
  position: "relative",
  selectors: {
    [`&${cardShadow}`]: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
});

export const cardTitleRight = style({});

export const cardTitleLeft = style({});

export const cardTitleCenter = style({});

export const cardTitle = style({
  selectors: {
    [`${card} > &`]: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "8px",
      width: "100%",
    },
    [`&${cardTitleRight}`]: {
      textAlign: "right",
    },
    [`&${cardTitleLeft}`]: {
      textAlign: "left",
    },
    [`&${cardTitleCenter}`]: {
      textAlign: "center",
    },
  },
});

export const cardContentLeft = style({});

export const cardContentRight = style({});

export const cardContentCenter = style({});

export const cardContent = style({
  selectors: {
    [`${card} > &`]: {
      width: "100%",
    },
    [`&${cardContentRight}`]: {
      textAlign: "right",
    },
    [`&${cardContentLeft}`]: {
      textAlign: "left",
    },
    [`&${cardContentCenter}`]: {
      textAlign: "center",
    },
  },
});

export const cardImage = style({
  selectors: {
    [`${card} > &`]: {
      width: "100%",
      maxHeight: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "16px",
    },
  },
});
