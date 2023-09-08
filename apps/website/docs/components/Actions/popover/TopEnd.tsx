import {
  button,
  buttonGhost,
  card,
  cardContent,
  clickReaction,
  clickReactionInput,
  popover,
  popoverContent,
  popoverEnd,
  popoverTop,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const id = "popoverTopEnd";

const popoverWidthSty = {
  width: "max-content",
  maxWidth: 300,
}

const Popover = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={popover}>
        <label
          htmlFor={id}
          className={clsx(clickReaction, button, buttonGhost)}
        >
          <input id={id} type="checkbox" className={clickReactionInput} />
          open
        </label>
        <div className={clsx(popoverContent, popoverTop, popoverEnd)} style={popoverWidthSty}>
          <div className={clsx(card, cardContent)}>这是一个弹出框！这是一个弹出框！这是一个弹出框！这是一个弹出框！</div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
