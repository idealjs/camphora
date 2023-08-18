import {
  button,
  buttonPrimary,
  card,
  cardContent,
  cardTitle,
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
      <div className={clsx(card)} style={otherStyle}>
        <div className={clsx(cardTitle)}>cardTitle!</div>
        <div className={clsx(cardContent)}>If a dog chews shoes whose shoes does he choose?</div>
        <button className={clsx(button, buttonPrimary)}>button</button>
      </div>
    </div>
  );
};

export default Card;

