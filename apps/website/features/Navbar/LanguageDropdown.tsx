import {
  button,
  buttonGhost,
  card,
  cardPrimary,
  cardShadow,
  cardXs,
  dropdown,
  dropdownContent,
  dropdownEnd,
  menu,
  menuItem,
  menuItemPrimary,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

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
        className={clsx(
          dropdownContent,
          menu,
          card,
          cardPrimary,
          cardXs,
          cardShadow,
        )}
      >
        <li>
          <div className={clsx(menuItem, menuItemPrimary)}>english</div>
        </li>
        <li>
          <div className={clsx(menuItem, menuItemPrimary)}>中文</div>
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
