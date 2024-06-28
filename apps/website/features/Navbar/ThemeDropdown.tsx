import {
  button,
  buttonGhost,
  card,
  cardSeondary,
  cardShadow,
  cardXs,
  dropdown,
  dropdownContent,
  dropdownEnd,
  menu,
  menuItem,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

import { selectedButtonStyle } from "./style.css";

const ThemeDropdown = () => {
  return (
    <div className={clsx(dropdown, dropdownEnd)}>
      <button
        tabIndex={0}
        className={clsx(button, buttonGhost, selectedButtonStyle)}
      >
        theme
      </button>
      <ul
        tabIndex={0}
        className={clsx(
          dropdownContent,
          card,
          cardXs,
          cardSeondary,
          cardShadow,
          menu
        )}
      >
        <li>
          <div className={clsx(menuItem, button, buttonGhost)}>dark</div>
        </li>
        <li>
          <div className={clsx(menuItem, button, buttonGhost)}>light</div>
        </li>
      </ul>
    </div>
  );
};

export default ThemeDropdown;
