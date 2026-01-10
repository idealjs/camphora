import { button } from "@idealjs/camphora-styled";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = (props: PropsWithChildren<IProps>) => {
  const { children, className, ...rest } = props;

  return (
    <button className={clsx(button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
