import { inputData, swap } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  children?: React.ReactNode;
}

const SwapRsc = (props: PropsWithChildren<IProps>) => {
  const { children, className, style, id, checked, defaultChecked } = props;

  return (
    <label className={clsx(swap, className)} style={style}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        className={inputData}
      />
      {children}
    </label>
  );
};

export default SwapRsc;
