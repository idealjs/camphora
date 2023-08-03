import {
<<<<<<< HEAD
  button,
  buttonAccent,
  buttonGhost,
  buttonNeutral,
  buttonPrimary,
  buttonSecondary,
=======
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
>>>>>>> 91c9c05 (feat: add button components)
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { type CSSProperties } from "react";

const buttonSpacing = 4; // 设置按钮之间的垂直间距（以像素为单位）
const style: CSSProperties = {
  margin: buttonSpacing
}
const Button = () => {
<<<<<<< HEAD

  return (
    <div>
      <div className={clsx(button, buttonNeutral)} style={style}>
        neutral
      </div>
      <div className={clsx(button, buttonGhost)} style={style}>
        Ghost
      </div>
      <div className={clsx(button, buttonPrimary)} style={style}>
        primary
      </div>
      <div className={clsx(button, buttonSecondary)} style={style}>
        secondary
      </div>
      <div className={clsx(button, buttonAccent)} style={style}>
        accent
=======
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
>>>>>>> 91c9c05 (feat: add button components)
      </div>
    </div>
  );
};

export default Button;
