import { Drawer, DrawerContent, DrawerSide } from "@idealjs/camphora-react";
import { card, cardPrimary, menuItem, overlay } from "@idealjs/camphora-styled";
import clsx from "clsx";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

import SearchInput from "@/components/SearchInput";

import Navbar from "../Navbar";

interface IProps {
  responsive?: boolean;
}

const LayoutDrawer = (props: PropsWithChildren<IProps>) => {
  const { children, responsive } = props;

  return (
    <Drawer drawerId="main-drawer">
      <DrawerContent>
        <Navbar drawerId="main-drawer" responsive={responsive} />
        {children}
      </DrawerContent>
      <label htmlFor={"main-drawer"} className={overlay} />
      <DrawerSide
        drawerId="main-drawer"
        responsive={responsive}
        className={clsx(card, cardPrimary)}
      >
        <li>
          <SearchInput />
        </li>
        <li style={{ height: "8px" }}></li>
        <li>
          <Link href={"/tutorials/quickstart"} className={clsx(menuItem)}>
            quick start
          </Link>
        </li>
        <li>
          <Link href={"/components/menu"} className={clsx(menuItem)}>
            menu
          </Link>
          <Link href={"/components/drawer"} className={clsx(menuItem)}>
            drawer
          </Link>
        </li>
      </DrawerSide>
    </Drawer>
  );
};

export default LayoutDrawer;
