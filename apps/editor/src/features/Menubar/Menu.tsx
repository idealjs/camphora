import { card, cardShadow, menu } from "@idealjs/camphora-styled";
import { createRef } from "@idealjs/sapling";
import clsx from "clsx";

import { popover, popoverBottom, popoverContent } from "../../popover.css";
import MenuItem, { IMenuItem } from "./MenuItem";
import { menuCard, menuLabel, subMenus } from "./style.css";

interface IProps {
  menuItem: IMenuItem;
}

export const showMenu = createRef<HTMLLIElement | null>(null);

const Menu = (props: IProps) => {
  const { menuItem } = props;
  const ref = createRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      tabIndex={0}
      className={() =>
        clsx(menu, popover, {
          showSubMenus: showMenu.current == ref.current,
        })
      }
      onBlur={() => {
        showMenu.current = null;
      }}
    >
      <div
        className={menuLabel}
        onClick={() => {
          if (showMenu.current === ref.current) {
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
      <ul
        className={clsx(
          menu,
          menuCard,
          subMenus,
          card,
          cardShadow,
          popoverContent,
          popoverBottom
        )}
      >
        {menuItem.subMenus != null
          ? menuItem.subMenus.map((menu) => {
              return <MenuItem key={menu.label} item={menu} />;
            })
          : null}
      </ul>
    </li>
  );
};

export default Menu;
