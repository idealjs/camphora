import { swapOff } from "@idealjs/camphora-styled";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

const SwapOff = (props: PropsWithChildren<IProps>) => {
  const { children, className } = props;
  return <span className={clsx(swapOff, className)}>{children}</span>;
};

export default SwapOff;
