import { Menu, MenuItem, Preview } from "@idealjs/camphora-react";
import {
  card,
  cardXs,
  cardPrimary,
  menuItemPrimary,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

const page = () => {
  return (
    <div style={{ overflowY: "auto" }}>
      <Preview style={{ height: "300px" }}>
        <Menu className={clsx(card, cardXs, cardPrimary)}>
          <MenuItem className={menuItemPrimary}>
            Trees
            <Menu className={clsx(card, cardXs, cardPrimary)}>
              <MenuItem className={menuItemPrimary}>🌳 Deciduous</MenuItem>
              <MenuItem className={menuItemPrimary}>🌲 Evergreen</MenuItem>
              <MenuItem className={menuItemPrimary}>🌴 Palm</MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem className={menuItemPrimary}>
            Vegetables
            <Menu className={clsx(card, cardXs, cardPrimary)}>
              <MenuItem className={menuItemPrimary}>🍆 Eggplant</MenuItem>
              <MenuItem className={menuItemPrimary}>🥔 Potato</MenuItem>
              <MenuItem className={menuItemPrimary}>🥕 Carrot</MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem className={menuItemPrimary}>
            Fruits
            <Menu className={clsx(card, cardXs, cardPrimary)}>
              <MenuItem className={menuItemPrimary}>🍇 Grapes</MenuItem>
              <MenuItem className={menuItemPrimary}>🍊 Tangerine</MenuItem>
              <MenuItem className={menuItemPrimary}>🍋 Lemon</MenuItem>
            </Menu>
          </MenuItem>
        </Menu>
      </Preview>
    </div>
  );
};

export default page;
