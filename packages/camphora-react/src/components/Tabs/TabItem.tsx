import { tab } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { Fragment, PropsWithChildren } from "react";

interface IProps {
  id: string;
  label?: string;
  value: string;
  checked?: boolean;
  defaultChecked?: boolean;
  groupName: string;
  className?: string;
}

const TabItem = (props: PropsWithChildren<IProps>) => {
  const {
    children,
    id,
    value,
    groupName,
    className,
    label,
    checked,
    defaultChecked,
  } = props;

  return (
    <Fragment>
      <label htmlFor={id} className={className}>
        {children}
      </label>
      <input
        id={id}
        className={clsx(tab)}
        type="radio"
        value={value}
        name={groupName}
        checked={checked}
        defaultChecked={defaultChecked}
        aria-label={label ?? value}
      />
    </Fragment>
  );
};

export default TabItem;
