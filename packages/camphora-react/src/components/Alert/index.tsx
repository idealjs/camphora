import {
  alert,
  alertContent,
  alertIcon,
  alertVariants,
  closeButton,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import type { HTMLAttributes, PropsWithChildren } from "react";
import React from "react";

interface AlertProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  /** If true, show a dismiss button. Component is stateless; call `onClose` to control visibility. */
  dismissible?: boolean;
  /** Optional visibility control. If provided and false, the component renders null. */
  visible?: boolean;
  /** Called when the dismiss button is clicked. External owner should update `visible`. */
  onClose?: () => void;
}

const Alert = (props: AlertProps) => {
  const {
    children,
    className,
    dismissible = false,
    visible = true,
    onClose,
    ...rest
  } = props;

  if (!visible) return null;

  return (
    <div role="alert" className={clsx(alert, className)} {...rest}>
      <div className={alertIcon} aria-hidden></div>
      <div className={alertContent}>{children}</div>
      {dismissible ? (
        <button
          type="button"
          className={closeButton}
          aria-label="Close alert"
          onClick={onClose}
        >
          ×
        </button>
      ) : null}
    </div>
  );
};

export default Alert;
