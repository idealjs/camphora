import {
  drawerMenu,
  drawerOverlay,
  drawerSide,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

interface IProps {
  drawerId: string;
  overlay?: ReactNode;
}

export const DrawerSide = (props: PropsWithChildren<IProps>) => {
  const { children, drawerId, overlay } = props;

  return (
    <div className={drawerSide}>
      {overlay ?? <label htmlFor={drawerId} className={drawerOverlay} />}
      <aside className={clsx(drawerMenu)}>{children}</aside>
    </div>
  );
};
