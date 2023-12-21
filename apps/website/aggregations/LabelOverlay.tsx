import { drawerOverlay, overlay } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { forwardRef, PropsWithChildren } from "react";

interface IProps {
  htmlFor: string;
  className?: string;
}

// eslint-disable-next-line react/display-name
const Overlay = forwardRef<HTMLLabelElement, PropsWithChildren<IProps>>(
  (props, ref) => {
    const { children, htmlFor, className } = props;

    return (
      <label ref={ref} htmlFor={htmlFor} className={clsx(overlay, className)}>
        {children}
      </label>
    );
  }
);

export default Overlay;
