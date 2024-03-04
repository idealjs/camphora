import {
  clickAction,
  clickActionInput,
  clickReaction,
  full,
  runtimeComponent,
  runtimeContainer,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { ReactNode } from "react";

import { drawerAnimate, overlayAnimate } from "@/styles/drawer.css";
import Container from "@/typesetting/Container";

import LabelOverlay from "./LabelOverlay";

interface IProps {
  drawerId: string;
  sideDrawer: ReactNode;
  overlay?: ReactNode;
  className?: string;
}

const Drawer = (props: IProps) => {
  const { drawerId, sideDrawer, overlay, className } = props;

  return (
    <Container className={clsx(full)}>
      <div className={clsx(clickAction, className)}>
        <input id={drawerId} type="checkbox" className={clickActionInput} />
        <div className={clsx(clickReaction)}>
          <Container
            position="absolute"
            className={clsx(full, runtimeContainer)}
          >
            {overlay ?? (
              <LabelOverlay
                className={clsx(runtimeComponent, overlayAnimate)}
                htmlFor={drawerId}
              />
            )}
          </Container>
          <Container
            position="absolute"
            className={clsx(full, runtimeContainer, drawerAnimate)}
          >
            {sideDrawer}
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Drawer;
