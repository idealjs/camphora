import {
  button,
  buttonPrimary,
  card,
  cardShadow,
  menu,
  menuItem,
} from "@idealjs/camphora-styled";
import { createRef } from "@idealjs/sapling";
import clsx from "clsx";

import { modal, modalCard } from "./style.css";

export const newFileDialogRef = createRef<HTMLDialogElement>(null);

export const NewFileDialog = () => {
  return (
    <dialog
      ref={newFileDialogRef}
      className={clsx(modal, modalCard, card, cardShadow)}
    >
      <form method="dialog">
        <ul className={clsx(menu, card)}>
          <li className={clsx(menuItem)}>
            <button type="submit" className={clsx(buttonPrimary)}>
              Component
            </button>
          </li>
          <li className={clsx(menuItem)}>
            <button type="submit" className={clsx(buttonPrimary)}>
              Style
            </button>
          </li>
        </ul>
      </form>
    </dialog>
  );
};

export default NewFileDialog;
