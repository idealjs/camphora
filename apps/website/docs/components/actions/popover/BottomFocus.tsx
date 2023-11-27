import {
  button,
  buttonGhost,
  card,
  focusReaction,
  popover,
  popoverBottom,
  popoverContent,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

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
      <div tabIndex={0} className={clsx(popover, focusReaction)}>
        <label className={clsx(button, buttonGhost)}>click</label>
        <div className={clsx(popoverContent, popoverBottom)}>
          <div className={clsx(card)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            cupiditate, dolore harum in optio culpa commodi est ad itaque eum,
            hic perferendis numquam quibusdam laboriosam beatae fuga vero!
            Reprehenderit, fugit?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
