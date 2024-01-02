import {
  card,
  cardShadow,
  focusAction,
  focusReaction,
} from "@idealjs/camphora-styled";
import { createState } from "@idealjs/sapling";
import clsx from "clsx";

import { popover, popoverBottom, popoverContent } from "../../popover.css";
import { showMenu } from "../store/layout";
import MenuItem, { IMenuItem } from "./MenuItem";
import { menu, menuCard, menuLabel } from "./style.css";

interface IProps {
  menuItem: IMenuItem;
}

const Menu = (props: IProps) => {
  const { menuItem } = props;
  const ref = createState<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      tabIndex={0}
      className={() => clsx(menu, popover, focusAction)}
      onBlur={() => {
        showMenu.val = null;
      }}
    >
      <div
        className={menuLabel}
        onClick={() => {
          console.log("Test test Menu");
          if (showMenu.val == ref.val) {
            ref.val?.blur();
            showMenu.val = null;
            return;
          }
          showMenu.val = ref.val;
        }}
        onMouseEnter={() => {
          if (showMenu.val != null) {
            ref.val?.focus();
            showMenu.val = ref.val;
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
