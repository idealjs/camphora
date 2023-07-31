import {
  accentButton,
  button,
  buttonGhost,
  errorButton,
  infoButton,
  neutralButton,
  primaryButton,
  secondaryButton,
  successButton,
  warningButton,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const Button = () => {
  const buttonSpacing = 8; // 设置按钮之间的垂直间距（以像素为单位）

  return (
    <div>
      <div className={clsx(button, neutralButton)} style={{ marginRight: buttonSpacing }}>
        neutral
      </div>
      <div className={clsx(button, buttonGhost)} style={{ marginRight: buttonSpacing }}>
        Ghost
      </div>
      <div className={clsx(button, primaryButton)} style={{ marginRight: buttonSpacing }}>
        primary
      </div>
      <div className={clsx(button, infoButton)} style={{ marginRight: buttonSpacing }}>
        info
      </div>
      <div className={clsx(button, successButton)} style={{ marginRight: buttonSpacing }}>
        success
      </div>
      <div className={clsx(button, warningButton)} style={{ marginRight: buttonSpacing }}>
        warning
      </div>
      <div className={clsx(button, errorButton)} style={{ marginRight: buttonSpacing }}>
        error
      </div>
      <div className={clsx(button, secondaryButton)} style={{ marginRight: buttonSpacing }}>
        secondary
      </div>
      <div className={clsx(button, accentButton)} style={{ marginRight: buttonSpacing }}>
      accent
      </div>
    </div>
  );
};

export default Button;
