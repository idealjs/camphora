import { responsiveDrawerToggle } from "@idealjs/camphora-styled";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface IProps {
  drawerId: string;
  className?: string;
  responsive?: boolean;
}

const DrawerToggle = (props: PropsWithChildren<IProps>) => {
  const { children, className, drawerId, responsive = false } = props;

  return (
    <label
      htmlFor={drawerId}
      className={clsx({ [responsiveDrawerToggle]: responsive }, className)}
    >
      {children}
    </label>
  );
};

export default DrawerToggle;
