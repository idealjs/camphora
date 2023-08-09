import {
  button,
  buttonGhost,
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
        <div className={clsx(popoverContent, popoverTop, popoverEnd)}>
          hello popover
        </div>
      </div>
    </div>
  );
};

export default Popover;
