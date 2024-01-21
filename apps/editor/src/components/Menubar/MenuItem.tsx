import {
  card,
  cardShadow,
  hoverAction,
  hoverReaction,
  menu,
  menuItem,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

import { popover, popoverContent } from "../../popover.css";
import { menuCard, menuItemLabel, subMenus } from "./style.css";

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
    <li className={clsx(menuItem, popover, hoverAction)}>
      <div
        tabIndex={item.subMenus == null ? 0 : undefined}
        className={menuItemLabel}
        onMouseDown={item.onClick}
      >
        {item.label}
      </div>
      {item.subMenus != null ? (
        <ul
          className={clsx(
            menu,
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
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
