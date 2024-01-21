import { button, buttonGhost, navbar } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface IProps {}

const Navbar = (props: PropsWithChildren<IProps>) => {
  const { children } = props;

  return <nav className={navbar}>{children}</nav>;
};

export default Navbar;