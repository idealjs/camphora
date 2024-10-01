import { drawerMenu, drawerSide } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

interface IProps {
  drawerId: string;
  overlay?: ReactNode;
}

export const DrawerSide = (props: PropsWithChildren<IProps>) => {
  const { children } = props;

  return (
    <aside className={clsx(drawerSide)}>
      <ul className={clsx(drawerMenu)}>{children}</ul>
    </aside>
  );
};
