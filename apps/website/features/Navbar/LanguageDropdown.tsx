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

const LanguageDropdown = () => {
  return (
    <div className={clsx(dropdown, dropdownEnd)}>
      <button
        tabIndex={0}
        className={clsx(button, buttonGhost, selectedButtonStyle)}
      >
        language
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
          <div className={clsx(menuItem, button, buttonGhost)}>english</div>
        </li>
        <li>
          <div className={clsx(menuItem, button, buttonGhost)}>中文</div>
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
