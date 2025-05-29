import {
  Drawer,
  DrawerContent,
  DrawerSide,
  Menu,
} from "@idealjs/camphora-react";
import {
  card,
  cardPrimary,
  menuItem,
  menuItemPrimary,
  overlay,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

import SearchInput from "@/components/SearchInput";

import Navbar from "../Navbar";
import { customDrawerContent } from "./style.css";

interface IProps {
  responsive?: boolean;
}

const LayoutDrawer = (props: PropsWithChildren<IProps>) => {
  const { children, responsive } = props;

  return (
    <Drawer drawerId="main-drawer">
      <DrawerContent className={customDrawerContent}>
        <Navbar drawerId="main-drawer" responsive={responsive} />
        {children}
      </DrawerContent>
      <label htmlFor={"main-drawer"} className={overlay} />
      <DrawerSide
        drawerId="main-drawer"
        responsive={responsive}
        className={clsx(card, cardPrimary)}
      >
        <Menu>
          <li>
            <SearchInput />
          </li>
          <li>
            <Link
              href={"/tutorials/quickstart"}
              className={clsx(menuItem, menuItemPrimary)}
            >
              quick start
            </Link>
          </li>
          <li>
            <Link
              href={"/components/menu"}
              className={clsx(menuItem, menuItemPrimary)}
            >
              menu
            </Link>
          </li>
          <li>
            <Link
              href={"/components/drawer"}
              className={clsx(menuItem, menuItemPrimary)}
            >
              drawer
            </Link>
          </li>
        </Menu>
      </DrawerSide>
    </Drawer>
  );
};

export default LayoutDrawer;
