import { drawerMenu, drawerSide } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

interface IProps {
  drawerId: string;
  className?: string;
}

const DrawerSide = (props: PropsWithChildren<IProps>) => {
  const { children, className } = props;

  return (
    <aside className={clsx(drawerSide, className)}>
      <ul className={clsx(drawerMenu)}>{children}</ul>
    </aside>
  );
};

export default DrawerSide;
