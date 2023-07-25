import { button, buttonGhost } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const Button = () => {
  return (
    <div>
      <div className={button}>Button</div>
      <div className={clsx(button, buttonGhost)}>Button</div>
    </div>
  );
};

export default Button;
