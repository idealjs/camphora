import { card, cardShadow, menu, menuItem } from "@idealjs/camphora-styled";
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
      <ul className={clsx(menu, card)}>
        <li className={menuItem}>Component</li>
        <li className={menuItem}>Style</li>
      </ul>
    </dialog>
  );
};

export default NewFileDialog;
