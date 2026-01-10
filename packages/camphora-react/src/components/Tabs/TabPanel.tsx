import { tabPanel } from "@idealjs/camphora-styled";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

const TabPanel = (props: PropsWithChildren<IProps>) => {
  const { children, className } = props;

  return <div className={clsx(tabPanel, className)}>{children}</div>;
};

export default TabPanel;
