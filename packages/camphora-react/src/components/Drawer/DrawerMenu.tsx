import { drawerMenu, menu } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface IProps {
  className?: string;
  style?: React.CSSProperties;
}

const DrawerMenu = (props: PropsWithChildren<IProps>) => {
  const { className, children, style } = props;

  return (
    <ul className={clsx(className, drawerMenu)} style={style}>
      {children}
    </ul>
  );
};

export default DrawerMenu;
