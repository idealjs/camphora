import {
  button,
  buttonGhost,
  popover,
  popoverContent,
  popoverHover,
  popoverRight,
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
      <div className={clsx(popover, popoverHover)} >
        <button className={clsx(button, buttonGhost)}>hover</button>
        <div className={clsx(popoverContent, popoverRight)}>hello popover</div>
      </div>
    </div>
  );
};

export default Popover;
