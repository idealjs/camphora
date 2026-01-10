"use client";

import { inputData, swap } from "@idealjs/camphora-styled";
import clsx from "clsx";
import type React from "react";
import type { PropsWithChildren } from "react";

import SwapOff from "./SwapOff";
import SwapOn from "./SwapOn";
import SwapRsc from "./SwapRsc";

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Swap = (props: PropsWithChildren<IProps>) => {
  const { children, className, style, id, checked, defaultChecked, onChange } =
    props;

  return (
    <label className={clsx(swap, className)} style={style}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={(e) => onChange?.(e.target.checked)}
        className={inputData}
      />
      {children}
    </label>
  );
};

export default Swap;
export { SwapOff, SwapOn, SwapRsc };
