import { drawer, drawerPermanent, Ia, IaData } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface IProps {
  drawerId: string;
}

const Drawer = (props: PropsWithChildren<IProps>) => {
  const { children, drawerId } = props;

  return (
    <div className={clsx(Ia, drawer)}>
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
