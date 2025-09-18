import { drawerContent, drawerContentReverse } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
  reverse?: boolean;
}

const DrawerContent = (props: PropsWithChildren<IProps>) => {
  const { children, className, reverse } = props;

  return (
    <div
      className={clsx(
        { [drawerContentReverse]: reverse },
        drawerContent,
        className
      )}
    >
      {children}
    </div>
  );
};

export default DrawerContent;
