import { PanelNode } from "@idealjs/layout-manager";

import { PageType } from "../../components/Panel";
import { addPanel } from "../store/layout";
import Menu from "./Menu";
import { IMenuItem } from "./MenuItem";
import { menuBar } from "./style.css";

const menuItems: IMenuItem[] = [
  {
    label: "File",
    subMenus: [
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
    label: "Layout",
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
    <div className={menuBar}>
      {menuItems.map((menuItem) => {
        return <Menu key={menuItem.label} menuItem={menuItem} />;
      })}
    </div>
  );
};

export default Menubar;
