import {
  button,
  buttonGhost,
  tooltip,
  tooltipArrow,
  tooltipLeft,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const Tooltip = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={clsx(tooltip, tooltipLeft, tooltipArrow)} data-tip="hello tooltip">
        <button className={clsx(button, buttonGhost)}>Hover me</button>
      </div>
    </div>
  );
};

export default Tooltip;

