import {
  button,
  buttonGhost,
  clickReaction,
  clickReactionInput,
  popover,
  popoverContent,
  popoverLeft,
  popoverRight,
  popoverTop,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const Popover = () => {
  return (
    <div>
      <label
        htmlFor="test"
        className={clsx(
          clickReaction,
          popover,
          button,
          buttonGhost,
          "select-none"
        )}
      >
        <input id="test" type="checkbox" className={clickReactionInput} />
        <div className={clsx(popoverContent, popoverRight, popoverTop)}>
          hello popover
        </div>
        open
      </label>
    </div>
  );
};

export default Popover;
