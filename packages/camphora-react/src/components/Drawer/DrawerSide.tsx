import { drawerSide, responsiveDrawerSide } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

interface IProps {
  drawerId: string;
  className?: string;
  responsive?: boolean;
}

const DrawerSide = (props: PropsWithChildren<IProps>) => {
  const { children, className, responsive = false } = props;

  return (
    <aside
      className={clsx(
        drawerSide,
        { [responsiveDrawerSide]: responsive },
        className
      )}
    >
      {children}
    </aside>
  );
};

export default DrawerSide;
