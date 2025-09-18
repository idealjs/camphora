import { swapOn } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

const SwapOn = (props: PropsWithChildren<IProps>) => {
  const { children, className } = props;
  return <span className={clsx(swapOn, className)}>{children}</span>;
};

export default SwapOn;
