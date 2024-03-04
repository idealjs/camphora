import {
  createAddPanelAction,
  MASK_PART,
  PanelNode,
} from "@idealjs/layout-manager";

import { IMenuItem } from "./components/Menubar/MenuItem";
import { PAGE_TYPE } from "./components/Panel";
import { newFileDialogRef } from "./features/NewFileModal";
import { addPanel, RootLayout, updateLayout } from "./features/store/layout";

export const menuItems: IMenuItem[] = [
  {
    label: "File",
    subMenus: [
      {
        label: "New File",
        onClick(event) {
          newFileDialogRef.current?.showModal();
        },
      },
    ],
  },
  {
    label: "Edit",
    subMenus: [{ label: "Undo" }, { label: "Redo" }],
  },
  {
    label: "View",
    subMenus: [
      {
        label: "Open Explorer",
        onClick(event) {
          RootLayout.doAction(
            createAddPanelAction({
              panelNode: new PanelNode({
                page: PAGE_TYPE.FILE_EXPLORER,
              }),
              mask: MASK_PART.LEFT,
              target: RootLayout,
            })
          );
          updateLayout();
        },
      },
      {
        label: "Open Editor",
        onClick(event) {
          addPanel(
            new PanelNode({
              page: PAGE_TYPE.VIEW_EDITOR,
            })
          );
        },
      },
    ],
  },
];
