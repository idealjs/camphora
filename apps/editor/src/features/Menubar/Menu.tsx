import {
  card,
  cardShadow,
  focusAction,
  focusReaction,
} from "@idealjs/camphora-styled";
import { createRef } from "@idealjs/sapling";
import clsx from "clsx";

import { popover, popoverBottom, popoverContent } from "../../popover.css";
import MenuItem, { IMenuItem } from "./MenuItem";
import { menu, menuCard, menuLabel } from "./style.css";

interface IProps {
  menuItem: IMenuItem;
}

export const showMenu = createRef<HTMLDivElement | null>(null);

const Menu = (props: IProps) => {
  const { menuItem } = props;
  const ref = createRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      tabIndex={0}
      className={() => clsx(menu, popover, focusAction)}
      onBlur={() => {
        showMenu.current = null;
      }}
    >
      <div
        className={menuLabel}
        onClick={() => {
          if (showMenu.current == ref.current) {
            ref.current?.blur();
            showMenu.current = null;
            return;
          }
          showMenu.current = ref.current;
        }}
        onMouseEnter={() => {
          if (showMenu.current != null) {
            ref.current?.focus();
            showMenu.current = ref.current;
          }
        }}
      >
        {menuItem.label}
      </div>
      <div
        className={clsx(
          menuCard,
          card,
          cardShadow,
          popoverContent,
          popoverBottom,
          focusReaction
        )}
      >
        {menuItem.subMenus != null
          ? menuItem.subMenus.map((menu) => {
              return <MenuItem key={menu.label} item={menu} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Menu;
