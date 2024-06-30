import { tab, tabPanel } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { Fragment, PropsWithChildren } from "react";

import { getDefaultValue, getGroupName } from "./context";

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
      <input
        className={clsx(tab)}
        type="radio"
        name={groupName}
        defaultChecked={value == defaultValue}
        aria-label={label ?? value}
      />
      <div className={clsx(tabPanel)}>{children}</div>
    </Fragment>
  );
};

export default TabItem;
