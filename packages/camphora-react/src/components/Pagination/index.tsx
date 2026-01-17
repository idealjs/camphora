import { pagination } from "@idealjs/camphora-styled";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface IProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const Pagination = (props: PropsWithChildren<IProps>) => {
  const { children, className, ...rest } = props;

  return (
    <nav className={clsx(pagination, className)} aria-label="pagination" {...rest}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Pagination;
