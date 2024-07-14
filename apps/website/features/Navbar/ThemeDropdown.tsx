import {
  button,
  buttonGhost,
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
        className={clsx(dropdownContent, menu, cardXs, cardShadow)}
      >
        <li>
          <div className={clsx(menuItem)}>dark</div>
        </li>
        <li>
          <div className={clsx(menuItem)}>light</div>
        </li>
      </ul>
    </div>
  );
};

export default ThemeDropdown;
