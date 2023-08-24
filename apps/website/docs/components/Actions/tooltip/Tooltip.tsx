import {
  button,
  buttonGhost,
  tooltip,
  tooltipTop,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const Tooltip = () => {
  return (
    <div>
      <div className={clsx(tooltip, tooltipTop)} data-tip="hello">
        <button className={clsx(button, buttonGhost)}>Hover me</button>
      </div>
    </div>
  );
};

export default Tooltip;

