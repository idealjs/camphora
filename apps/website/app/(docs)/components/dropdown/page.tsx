import { Dropdown, Preview } from "@idealjs/camphora-react";
import {
  button,
  buttonGhost,
  card,
  cardPrimary,
  cardShadow,
  cardXs,
  dropdownContent,
  menu,
  menuItemPrimary,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const page = () => {
  return (
    <div style={{ overflowY: "auto" }}>
      <Preview style={{ height: "300px" }}>
        <Dropdown>
          <div tabIndex={0} className={clsx(button)}>
            Dropdown
          </div>
          <ul
            tabIndex={0}
            className={clsx(
              dropdownContent,
              menu,
              card,
              cardPrimary,
              cardXs,
              cardShadow
            )}
          >
            <li className={menuItemPrimary}>Option 1</li>
            <li className={menuItemPrimary}>Option 2</li>
            <li className={menuItemPrimary}>Option 3</li>
          </ul>
        </Dropdown>
      </Preview>
    </div>
  );
};

export default page;
