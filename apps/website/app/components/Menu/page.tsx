import React from "react";

import Preview from "../Preview";
import Menu from ".";
import MenuItem from "./MenuItem";

const page = () => {
  return (
    <div>
      <Preview style={{ height: "300px" }}>
        <Menu style={{ width: "124px" }}>
          <MenuItem>
            Trees
            <Menu style={{ width: "124px" }}>
              <MenuItem>🌳 Deciduous</MenuItem>
              <MenuItem>🌲 Evergreen</MenuItem>
              <MenuItem>🌴 Palm</MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem>
            Vegetables
            <Menu style={{ width: "124px" }}>
              <MenuItem>🍆 Eggplant</MenuItem>
              <MenuItem>🥔 Potato</MenuItem>
              <MenuItem>🥕 Carrot</MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem>
            Fruits
            <Menu style={{ width: "124px" }}>
              <MenuItem>🍇 Grapes</MenuItem>
              <MenuItem>🍊 Tangerine</MenuItem>
              <MenuItem>🍋 Lemon</MenuItem>
            </Menu>
          </MenuItem>
        </Menu>
      </Preview>
    </div>
  );
};

export default page;
