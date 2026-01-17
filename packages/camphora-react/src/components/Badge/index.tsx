import { badge } from "@idealjs/camphora-styled";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const Badge = (props: PropsWithChildren<IProps>) => {
  const { children, className, ...rest } = props;

  return (
    <span className={clsx(badge, className)} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
