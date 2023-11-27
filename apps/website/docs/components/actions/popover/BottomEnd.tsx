import {
  button,
  buttonGhost,
  card,
  clickReaction,
  clickReactionInput,
  popover,
  popoverBottom,
  popoverContent,
  popoverEnd,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const id = "popoverBottomEnd";



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
        <div
          className={clsx(popoverContent, popoverBottom, popoverEnd)}
          
        >
          <div className={clsx(card)}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            cupiditate dolor unde corporis qui sunt sequi iste molestiae nam
            deleniti, maxime quidem distinctio quas aut illum quisquam harum
            officiis. Beatae?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
