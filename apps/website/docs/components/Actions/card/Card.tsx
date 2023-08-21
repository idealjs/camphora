import {
  button,
  buttonPrimary,
  card,
  cardContentCenter,
  cardShadow,
  cardTitleCenter,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { type CSSProperties } from "react";

const cardStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const otherStyle: CSSProperties = {
  width: 400
}

const Card = () => {
  return (
    <div style={cardStyle}>
      <div className={clsx(card, cardShadow)} style={otherStyle}>
        <div className={clsx(cardTitleCenter)}>cardTitle!</div>
        <div className={clsx(cardContentCenter)}>Chinese culture is vast and profound! I love it very much.</div>
        <button className={clsx(button, buttonPrimary)}>button</button>
      </div>
    </div>
  );
};

export default Card;

