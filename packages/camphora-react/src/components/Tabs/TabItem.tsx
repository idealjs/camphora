import { inputData, tab } from "@idealjs/camphora-styled";
import clsx from "clsx";
import {
  Fragment,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type PropsWithChildren,
} from "react";

interface IProps {
  id: string;
  label?: string;
  value: string;
  checked?: boolean;
  defaultChecked?: boolean;
  groupName: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLLabelElement>;
  onKeyDown?: KeyboardEventHandler<HTMLLabelElement>;
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
    onKeyDown,
  } = props;

  return (
    <Fragment>
      <label
        htmlFor={id}
        className={clsx(tab, className)}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
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
