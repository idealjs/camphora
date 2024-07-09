import { preview } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { CSSProperties, PropsWithChildren } from "react";

interface IProps {
  className?: string;
  style?: CSSProperties;
}

const Preview = (props: PropsWithChildren<IProps>) => {
  const { className, children, style } = props;
  return (
    <div className={clsx(preview, className)} style={style}>
      {children}
    </div>
  );
};

export default Preview;
