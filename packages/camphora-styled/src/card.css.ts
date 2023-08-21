import { style } from "@vanilla-extract/css";

export const cardHover = style({});

export const card = style({
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  position: "relative",
  selectors: {
    [`&${cardHover}:hover`]: {
      boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
      transition: "box-shadow 0.3s ease-in-out",
    },
  },
});

export const cardTitleLeft = style({
  selectors: {
    [`${card} > &`]: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "8px",
      width: "100%",
    },
  },
});

export const cardTitleRight = style({
  selectors: {
    [`${card} > &`]: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "8px",
      width: "100%",
      textAlign: "right",
    },
  },
});

export const cardTitleCenter = style({
  selectors: {
    [`${card} > &`]: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "8px",
      width: "100%",
      textAlign: "center",
    },
  },
});

export const cardContent = style({
  selectors: {
    [`${card} > &`]: {
      marginBottom: "16px",
      textAlign: "center",
      width: "100%",
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
