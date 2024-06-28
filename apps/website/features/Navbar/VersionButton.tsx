import { button, buttonGhost, dropdown, vars } from "@idealjs/camphora-styled";
import clsx from "clsx";
import getConfig from "next/config";
import React from "react";

import { selectedButtonStyle } from "./style.css";

const { publicRuntimeConfig } = getConfig();
const version = publicRuntimeConfig?.version;

const VersionButton = () => {
  return (
    <div
      tabIndex={0}
      className={clsx(button, buttonGhost, selectedButtonStyle)}
    >
      {version}
    </div>
  );
};

export default VersionButton;
