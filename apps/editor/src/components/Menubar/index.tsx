import { menu, menuVertical } from "@idealjs/camphora-styled";
import { PanelNode } from "@idealjs/layout-manager";
import clsx from "clsx";

import { newFileDialogRef } from "../../features/NewFileModal";
import { addPanel } from "../../features/store/layout";
import { PAGE_TYPE } from "../Panel";
import Menu from "./Menu";
import { IMenuItem } from "./MenuItem";
import { menuBar } from "./style.css";



interface IProps {
  menuItems: IMenuItem[];
}

const Menubar = (props: IProps) => {
  const { menuItems } = props;
  return (
    <ul className={clsx(menu, menuVertical, menuBar)}>
      {menuItems.map((menuItem) => {
        return <Menu key={menuItem.label} menuItem={menuItem} />;
      })}
    </ul>
  );
};

export default Menubar;
