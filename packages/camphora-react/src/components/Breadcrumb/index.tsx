import { breadcrumb } from "@idealjs/camphora-styled";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface IProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const Breadcrumb = (props: PropsWithChildren<IProps>) => {
  const { children, className, ...rest } = props;

  return (
    <nav className={clsx(breadcrumb, className)} aria-label="breadcrumb" {...rest}>
      <ol>{children}</ol>
    </nav>
  );
};

export default Breadcrumb;
