import { drawerContent } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

const DrawerContent = (props: PropsWithChildren<IProps>) => {
  const { children, className } = props;

  return <div className={clsx(drawerContent, className)}>{children}</div>;
};

export default DrawerContent;
