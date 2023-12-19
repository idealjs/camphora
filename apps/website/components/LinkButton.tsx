import { button } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { forwardRef, PropsWithChildren } from "react";

interface IProps {
  href: string;
  className?: string;
}

// eslint-disable-next-line react/display-name
const LinkButton = forwardRef<HTMLLabelElement, PropsWithChildren<IProps>>(
  (props) => {
    const { children, href, className } = props;

    return (
      <a href={href} className={clsx(button, className)}>
        {children}
      </a>
    );
  }
);

export default LinkButton;
