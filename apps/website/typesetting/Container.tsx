import { absolute, relative } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface IProps {
  position?: "relative" | "absolute";
  className?: string;
}

const Container = (props: PropsWithChildren<IProps>) => {
  const { children, position = "relative", className } = props;
  return (
    <div
      className={clsx(
        {
          [relative]: position === "relative",
          [absolute]: position === "absolute",
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
