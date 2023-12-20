import {
  clickReaction,
  clickReactionInput,
  drawer,
  drawerMenu,
  drawerSide,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { ReactNode } from "react";

import Overlay from "./DrawerOverlay";

interface IProps {
  drawerId: string;
  sideDrawer: ReactNode;
  drawerContent: ReactNode;
  overlay?: ReactNode;
  className?: string;
}

const Drawer = (props: IProps) => {
  const { drawerId, sideDrawer, drawerContent, overlay, className } = props;

  return (
    <div className={clsx(drawer, clickReaction, className)}>
      <input id={drawerId} type="checkbox" className={clickReactionInput} />
      {drawerContent}
      <div className={clsx(drawerSide)}>
        {overlay ?? <Overlay htmlFor={drawerId} />}
        <div className={drawerMenu}>{sideDrawer}</div>
      </div>
    </div>
  );
};

export default Drawer;
