import {
  card,
  cardShadow,
  hoverAction,
  hoverReaction,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

import { popover, popoverContent } from "../../popover.css";
import { menuCard, menuItem, menuItemLabel, subMenus } from "./style.css";

export interface IMenuItem {
  label: string;
  subMenus?: IMenuItem[];
  onClick?: (event: MouseEvent) => void;
}

interface IProps {
  item: IMenuItem;
}

const MenuItem = (props: IProps) => {
  const { item } = props;
  return (
    <div className={clsx(menuItem, popover, hoverAction)}>
      <div
        tabIndex={item.subMenus == null ? 0 : undefined}
        className={menuItemLabel}
        onMouseDown={item.onClick}
      >
        {item.label}
      </div>
      {item.subMenus != null ? (
        <div
          className={clsx(
            menuCard,
            subMenus,
            popoverContent,
            card,
            cardShadow,
            hoverReaction
          )}
        >
          {item.subMenus.map((menu) => {
            return <MenuItem key={menu.label} item={menu} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default MenuItem;
