import {
  button,
  buttonGhost,
  card,
  cardContent,
  popover,
  popoverBottom,
  popoverContent,
  popoverFocus,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const popoverWidthSty = {
  width: "max-content",
  maxWidth: 300,
};

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
      <div tabIndex={0} className={clsx(popover, popoverFocus)}>
        <label className={clsx(button, buttonGhost)}>click</label>
        <div
          className={clsx(popoverContent, popoverBottom)}
          style={popoverWidthSty}
        >
          <div className={clsx(card, cardContent)}>
            这是一个弹出框！这是一个弹出框！这是一个弹出框！这是一个弹出框！
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
