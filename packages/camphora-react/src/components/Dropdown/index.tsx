import { dropdown, dropdownEnd, dropdownOpen } from "@idealjs/camphora-styled";
import clsx from "clsx";
import type { CSSProperties, PropsWithChildren } from "react";

import DropdownContent from "./DropdownContent";

interface IProps {
  className?: string;
  end?: boolean;
  open?: boolean;
  style?: CSSProperties;
}

const Dropdown = (props: PropsWithChildren<IProps>) => {
  const { children, className, end, open, style } = props;
  const rootClass = clsx(
    dropdown,
    { [dropdownEnd]: end, [dropdownOpen]: open },
    className,
  );

  return (
    <div className={rootClass} style={style}>
      {children}
    </div>
  );
};

export default Dropdown;
export { DropdownContent };
