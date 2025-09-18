import { dropdownContent } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { CSSProperties, PropsWithChildren } from "react";

interface IProps {
  className?: string;
  style?: CSSProperties;
}

const DropdownContent = (props: PropsWithChildren<IProps>) => {
  const { children, className, style } = props;
  return (
    <ul className={clsx(dropdownContent, className)} style={style}>
      {children}
    </ul>
  );
};

export default DropdownContent;