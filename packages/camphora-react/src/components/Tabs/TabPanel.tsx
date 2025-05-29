import { tabPanel } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface IProps {}

const TabPanel = (props: PropsWithChildren<IProps>) => {
  const { children } = props;

  return <div className={clsx(tabPanel)}>{children}</div>;
};

export default TabPanel;
