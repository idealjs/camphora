import { drawer, Ia, IaData } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface IProps {
  drawerId: string;
  className?: string;
}

const Drawer = (props: PropsWithChildren<IProps>) => {
  const { children, drawerId, className } = props;

  return (
    <div className={clsx(Ia, drawer, className)}>
      <input
        type="checkbox"
        className={IaData}
        name="user data"
        id={drawerId}
      />
      {children}
    </div>
  );
};

export default Drawer;

export { default as DrawerContent } from "./DrawerContent";
export { default as DrawerMenu } from "./DrawerMenu";
export { default as DrawerSide } from "./DrawerSide";
export { default as DrawerToggle } from "./DrawerToggle";
