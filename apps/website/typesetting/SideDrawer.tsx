import clsx from "clsx";
import React from "react";

import { sideDrawer } from "@/styles/drawer.css";
interface IProps {
  className?: string;
}

const SideDrawer = (props: IProps) => {
  const { className } = props;
  return <div className={clsx(sideDrawer, className)}>SideDrawer</div>;
};

export default SideDrawer;
