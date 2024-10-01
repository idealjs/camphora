import { menu } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface IProps {
  className?: string;
  style?: React.CSSProperties;
}

const Menu = (props: PropsWithChildren<IProps>) => {
  const { className, children, style } = props;

  return (
    <ul className={clsx(className, menu)} style={style}>
      {children}
    </ul>
  );
};

export default Menu;

export { default as MenuItem } from "./MenuItem";
