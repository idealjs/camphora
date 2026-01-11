import { Dropdown, Preview } from "@idealjs/camphora-react";
import {
  button,
  card,
  cardPrimary,
  cardShadow,
  cardXs,
  dropdownContent,
  menu,
  menuItemPrimary,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

const page = () => {
  return (
    <div style={{ overflowY: "auto" }}>
      <Preview style={{ height: "300px" }}>
        <Dropdown>
          <button type="button" tabIndex={0} className={clsx(button)}>
            Dropdown
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
