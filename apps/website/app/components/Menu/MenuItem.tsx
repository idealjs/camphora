import { button, menuItem } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

const MenuItem = (props: PropsWithChildren<IProps>) => {
  const { className, children } = props;
  return <li className={clsx(className, menuItem)}>{children}</li>;
};

export default MenuItem;
