import {
  card,
  cardPrimary,
  Menu,
  MenuItem,
  menuItemPrimary,
  Preview,
} from "@idealjs/camphora-react";
import clsx from "clsx";
import React from "react";

const page = () => {
  return (
    <div>
      <Preview style={{ height: "300px" }}>
        <Menu style={{ width: "124px" }} className={clsx(card, cardPrimary)}>
          <MenuItem className={menuItemPrimary}>
            Trees
            <Menu
              style={{ width: "124px" }}
              className={clsx(card, cardPrimary)}
            >
              <MenuItem className={menuItemPrimary}>🌳 Deciduous</MenuItem>
              <MenuItem className={menuItemPrimary}>🌲 Evergreen</MenuItem>
              <MenuItem className={menuItemPrimary}>🌴 Palm</MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem className={menuItemPrimary}>
            Vegetables
            <Menu
              style={{ width: "124px" }}
              className={clsx(card, cardPrimary)}
            >
              <MenuItem className={menuItemPrimary}>🍆 Eggplant</MenuItem>
              <MenuItem className={menuItemPrimary}>🥔 Potato</MenuItem>
              <MenuItem className={menuItemPrimary}>🥕 Carrot</MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem className={menuItemPrimary}>
            Fruits
            <Menu
              style={{ width: "124px" }}
              className={clsx(card, cardPrimary)}
            >
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
