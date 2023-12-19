import { button } from "@idealjs/camphora-styled";
import clsx from "clsx";
import { forwardRef, PropsWithChildren } from "react";

interface IProps {
  htmlFor: string;
  className?: string;
}

// eslint-disable-next-line react/display-name
const LabelButton = forwardRef<HTMLLabelElement, PropsWithChildren<IProps>>(
  (props, ref) => {
    const { children, htmlFor, className } = props;
    return (
      <label ref={ref} htmlFor={htmlFor} className={clsx(button, className)}>
        {children}
      </label>
    );
  }
);

export default LabelButton;
