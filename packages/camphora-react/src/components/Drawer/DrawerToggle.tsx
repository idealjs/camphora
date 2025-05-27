import clsx from "clsx";
import { PropsWithChildren } from "react";

interface IProps {
  drawerId: string;
  className?: string;
}

const DrawerToggle = (props: PropsWithChildren<IProps>) => {
  const { children, className, drawerId } = props;

  return (
    <label htmlFor={drawerId} className={clsx(className)}>
      {children}
    </label>
  );
};

export default DrawerToggle;
