import {
  button,
  buttonGhost,
  clickReaction,
  clickReactionInput,
  popover,
  popoverContent,
  popoverLeft,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const id = "popoverLeft";

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
      <label
        htmlFor={id}
        className={clsx(clickReaction, popover, button, buttonGhost)}
      >
        <input id={id} type="checkbox" className={clickReactionInput} />
        <div className={clsx(popoverContent, popoverLeft)}>hello popover</div>
        open
      </label>
    </div>
  );
};

export default Popover;
