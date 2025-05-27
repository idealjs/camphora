import { Drawer, DrawerContent, DrawerSide } from "@idealjs/camphora-react";
import { menuItem, overlay } from "@idealjs/camphora-styled";
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
      <DrawerSide drawerId="main-drawer" responsive={responsive}>
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
        {/* 
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
          repudiandae quasi tempore dolore. Omnis cumque id modi dolor veniam,
          hic voluptate odio. Ut, laudantium quod optio soluta hic velit?
        </div> */}
      </DrawerSide>
    </Drawer>
  );
};

export default LayoutDrawer;
