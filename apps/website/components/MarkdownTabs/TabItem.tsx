import clsx from "clsx";
import { Fragment, type PropsWithChildren } from "react";

import { getDefaultValue, getGroupName } from "./context";
import { inputData, tab, tabPanel, tabPrimary } from "@idealjs/camphora-styled";

interface IProps {
  label?: string;
  value: string;
}

const TabItem = (props: PropsWithChildren<IProps>) => {
  const { children, value, label } = props;
  const groupName = getGroupName();
  const defaultValue = getDefaultValue();

  return (
    <Fragment>
      <label htmlFor={value} className={clsx(tab, tabPrimary)}>
        {label ?? value}
        <input
          id={value}
          className={clsx(inputData)}
          type="radio"
          name={groupName}
          defaultChecked={value === defaultValue}
          aria-label={label ?? value}
        />
      </label>
      <div className={clsx(tabPanel)}>{children}</div>
    </Fragment>
  );
};

export default TabItem;
