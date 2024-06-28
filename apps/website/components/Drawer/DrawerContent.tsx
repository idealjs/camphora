import { drawerContent } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface IProps {}

const DrawerContent = (props: PropsWithChildren<IProps>) => {
  const { children } = props;
  return <div className={clsx(drawerContent)}>{children}</div>;
};

export default DrawerContent;
