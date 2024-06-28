import {
  button,
  buttonGhost,
  input,
  menu,
  menuItem,
  paper,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

import Drawer from "@/components/Drawer";
import DrawerContent from "@/components/Drawer/DrawerContent";
import { DrawerSide } from "@/components/Drawer/DrawerSide";
import SearchInput from "@/components/SearchInput";

import Navbar from "../Navbar";

interface IProps {}

const LayoutDrawer = (props: PropsWithChildren<IProps>) => {
  const { children } = props;
  return (
    <Drawer drawerId="main-drawer">
      <DrawerContent>
        <Navbar drawerId="main-drawer" />
        {children}
      </DrawerContent>
      <DrawerSide drawerId="main-drawer">
        <ul
          className={clsx(menu, paper)}
          style={{
            minHeight: "100%",
            padding: "12px 16px 0px 16px",
          }}
        >
          <li>
            <SearchInput />
          </li>
          <li style={{ height: "8px" }}></li>
          <li>
            <Link
              href={"/tutorial/quickstart"}
              className={clsx(menuItem, button, buttonGhost)}
            >
              quick start
            </Link>
          </li>
          <li>
            <Link
              href={"/docs/components"}
              className={clsx(menuItem, button, buttonGhost)}
            >
              components
            </Link>
          </li>
        </ul>
      </DrawerSide>
    </Drawer>
  );
};

export default LayoutDrawer;
