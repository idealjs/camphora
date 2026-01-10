import { tabs } from "@idealjs/camphora-styled";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

const Tabs = (props: PropsWithChildren<IProps>) => {
  const { children, className } = props;
  return <div className={clsx(tabs, className)}>{children}</div>;
};

export default Tabs;

export { default as TabItem } from "./TabItem";
export { default as TabPanel } from "./TabPanel";
