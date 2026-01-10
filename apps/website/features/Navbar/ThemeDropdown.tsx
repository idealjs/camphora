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

const ThemeDropdown = () => {
  return (
    <div className={clsx(dropdown, dropdownEnd)}>
      <button
        type="button"
        tabIndex={0}
        className={clsx(button, buttonGhost, selectedButtonStyle)}
      >
        theme
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
          <div className={clsx(menuItem, menuItemPrimary)}>dark</div>
        </li>
        <li>
          <div className={clsx(menuItem, menuItemPrimary)}>light</div>
        </li>
      </ul>
    </div>
  );
};

export default ThemeDropdown;
