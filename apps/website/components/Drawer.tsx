import {
  button,
  buttonGhost,
  clickReaction,
  clickReactionInput,
  drawer,
  drawerContent,
  drawerMenu,
  drawerOverlay,
  drawerSide,
  navbar,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { PropsWithChildren, ReactNode } from "react";

import Overlay from "./DrawerOverlay";

interface IProps {
  drawerId: string;
  overlay?: ReactNode;
  sideDrawer: ReactNode;
}

const Drawer = (props: PropsWithChildren<IProps>) => {
  const { children, drawerId, sideDrawer, overlay } = props;

  return (
    <div className={clsx(drawer, clickReaction)}>
      <input id={drawerId} type="checkbox" className={clickReactionInput} />
      {children}
      <div className={clsx(drawerSide)}>
        {overlay ?? <Overlay htmlFor={drawerId} />}
        <div
          className={drawerMenu}
          style={{ background: "white", width: "300px" }}
        >
          {sideDrawer}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
