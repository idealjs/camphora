import {
  button,
  buttonGhost,
  card,
  clickReaction,
  clickReactionInput,
  popover,
  popoverContent,
  popoverTop,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const id = "popoverTop";

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
      <div className={popover} >
        <label
          htmlFor={id}
          className={clsx(clickReaction, button, buttonGhost)}
        >
          <input id={id} type="checkbox" className={clickReactionInput} />
          open
        </label>
        <div className={clsx(popoverContent, popoverTop)} >
          <div className={clsx(card)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptate vitae illo, facilis atque omnis rem? Blanditiis porro
            neque veniam sint eaque consequuntur velit asperiores tempora at,
            vel enim alias.</div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
