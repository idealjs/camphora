import { inputData, tab } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { Fragment, type PropsWithChildren } from "react";

interface IProps {
  id: string;
  label?: string;
  value: string;
  checked?: boolean;
  defaultChecked?: boolean;
  groupName: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
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
    onClick,
  } = props;

  return (
    <Fragment>
      <label htmlFor={id} className={clsx(tab, className)} onClick={onClick}>
        {label ?? value}
        <input
          id={id}
          type="radio"
          value={value}
          name={groupName}
          checked={checked}
          className={inputData}
          defaultChecked={defaultChecked}
          aria-label={label ?? value}
        />
      </label>
      {children}
    </Fragment>
  );
};

export default TabItem;
