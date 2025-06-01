import { tabs } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
  defaultValue?: string;
  value?: string;
  onChange?: React.FormEventHandler<HTMLFormElement>;
}

const Tabs = (props: PropsWithChildren<IProps>) => {
  const { children, className, onChange } = props;
  return (
    <form
      className={clsx(tabs, className)}
      onChange={onChange}
      style={{
        gridAutoColumns: "1fr",
      }}
    >
      {children}
    </form>
  );
};

export default Tabs;

export { default as TabItem } from "./TabItem";
export { default as TabPanel } from "./TabPanel";
