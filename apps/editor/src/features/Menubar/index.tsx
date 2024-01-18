import { menu, menuVertical } from "@idealjs/camphora-styled";
import { PanelNode } from "@idealjs/layout-manager";
import clsx from "clsx";

import { PageType } from "../../components/Panel";
import { newFileDialogRef } from "../NewFileModal";
import { addPanel } from "../store/layout";
import Menu from "./Menu";
import { IMenuItem } from "./MenuItem";
import { menuBar } from "./style.css";

const menuItems: IMenuItem[] = [
  {
    label: "File",
    subMenus: [
      {
        label: "New File",
        onClick(event) {
          newFileDialogRef.current?.showModal();
        },
      },
      {
        label: "Open Recent",
        subMenus: [{ label: "abc" }, { label: "123" }, { label: "xxx" }],
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
        label: "Open Layout",
        subMenus: [
          {
            label: "Open View",
          },
          {
            label: "Open Editor",
            onClick(event) {
              addPanel(
                new PanelNode({
                  page: PageType.ViewEditor,
                })
              );
            },
          },
        ],
      },
    ],
  },
];

const Menubar = () => {
  return (
    <ul className={clsx(menu, menuVertical, menuBar)}>
      {menuItems.map((menuItem) => {
        return <Menu key={menuItem.label} menuItem={menuItem} />;
      })}
    </ul>
  );
};

export default Menubar;
