import { menu, menuItem, paper, vars } from "@idealjs/camphora-styled";
import { assignInlineVars } from "@vanilla-extract/dynamic";
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
        <div className={paper} style={{ height: "100%" }}>
          <ul
            className={clsx(menu)}
            style={assignInlineVars({
              [vars.shadow.menu]: "0",
            })}
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
              <Link href={"/docs/components"} className={clsx(menuItem)}>
                components
              </Link>
            </li>
          </ul>
        </div>
      </DrawerSide>
    </Drawer>
  );
};

export default LayoutDrawer;
