import {
  button,
  buttonAccent,
  buttonGhost,
  buttonNeutral,
  buttonPrimary,
  buttonSecondary,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { type CSSProperties } from "react";

const buttonSpacing = 4; // 设置按钮之间的垂直间距（以像素为单位）
const style: CSSProperties = {
  margin: buttonSpacing
}
const Button = () => {

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
      </div>
    </div>
  );
};

export default Button;