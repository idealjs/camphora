import {
  Drawer,
  DrawerContent,
  DrawerMenu,
  DrawerSide,
} from "@idealjs/camphora-react";
import {
  card,
  cardMd,
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
import { cardSprinkles } from "@idealjs/camphora-styled/utils";

interface IProps {
  responsive?: boolean;
}

const LayoutDrawer = (props: PropsWithChildren<IProps>) => {
  const { children, responsive } = props;

  return (
    <Drawer drawerId="main-drawer">
      <DrawerContent className={customDrawerContent} reverse={true}>
        {children}
        <Navbar drawerId="main-drawer" responsive={responsive} />
      </DrawerContent>
      <label htmlFor={"main-drawer"} className={overlay} />
      <DrawerSide
        drawerId="main-drawer"
        responsive={responsive}
        className={clsx(card, cardMd, cardPrimary)}
      >
        <DrawerMenu>
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
          <li>
            <Link
              href={"/components/tabs"}
              className={clsx(menuItem, menuItemPrimary)}
            >
              tabs
            </Link>
          </li>
          <li>
            <Link
              href={"/components/stack"}
              className={clsx(menuItem, menuItemPrimary)}
            >
              stack
            </Link>
          </li>
          <li>
            <Link
              href={"/components/glass"}
              className={clsx(menuItem, menuItemPrimary)}
            >
              glass
            </Link>
          </li>
          <li>
            <Link
              href={"/components/dropdown"}
              className={clsx(menuItem, menuItemPrimary)}
            >
              dropdown
            </Link>
          </li>
          <li>
            <Link
              href={"/components/swap"}
              className={clsx(menuItem, menuItemPrimary)}
            >
              swap
            </Link>
          </li>
        </DrawerMenu>
      </DrawerSide>
    </Drawer>
  );
};

export default LayoutDrawer;
