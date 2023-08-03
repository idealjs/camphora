import {
  button,
  buttonAccent,
  buttonGhost,
  buttonNeutral,
  buttonPrimary,
  buttonSecondary,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const buttonSpacing = 8; // 设置按钮之间的垂直间距（以像素为单位）
const Button = () => {

  return (
    <div>
      <div className={clsx(button, buttonNeutral)} style={{ marginRight: buttonSpacing }}>
        neutral
      </div>
      <div className={clsx(button, buttonGhost)} style={{ marginRight: buttonSpacing }}>
        Ghost
      </div>
      <div className={clsx(button, buttonPrimary)} style={{ marginRight: buttonSpacing }}>
        primary
      </div>
      <div className={clsx(button, buttonSecondary)} style={{ marginRight: buttonSpacing }}>
        secondary
      </div>
      <div className={clsx(button, buttonAccent)} style={{ marginRight: buttonSpacing }}>
      accent
      </div>
    </div>
  );
};

export default Button;