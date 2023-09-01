import {
  button,
  buttonGhost,
  card,
  cardContent,
  clickReaction,
  clickReactionInput,
  popover,
  popoverContent,
  popoverRight,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const id = "popoverRight";

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
        <div className={clsx(popoverContent, popoverRight)}>
          <div className={clsx(card, cardContent)}>这是一个弹出框！这是一个弹出框！这是一个弹出框！这是一个弹出框！</div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
