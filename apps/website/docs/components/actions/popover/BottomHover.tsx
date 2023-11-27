import {
  button,
  buttonGhost,
  card,
  hoverReaction,
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
      <div className={clsx(popover, hoverReaction)}>
        <button className={clsx(button, buttonGhost)}>hover</button>
        <div
          className={clsx(popoverContent, popoverBottom)}
          
        >
          <div className={clsx(card)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptate vitae illo, facilis atque omnis rem? Blanditiis porro
            neque veniam sint eaque consequuntur velit asperiores tempora at,
            vel enim alias.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
