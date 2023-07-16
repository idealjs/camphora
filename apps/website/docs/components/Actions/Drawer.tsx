import {
  button,
  buttonGhost,
  clickReaction,
  clickReactionInput,
  drawer,
  drawerContent,
  drawerMenu,
  drawerOverlay,
  drawerSide,
  navbar,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { Fragment } from "react";

const Drawer = () => (
  <Fragment>
    <div className={clsx(clickReaction, drawer)}>
      <input id="test" type="checkbox" className={clickReactionInput} />
      <div className={drawerContent}>
        <nav className={navbar}>
          <label
            htmlFor="test"
            className={clsx(button, buttonGhost, "select-none")}
          >
            open
          </label>
        </nav>
      </div>
      <div className={clsx(drawerSide)}>
        <label htmlFor="test" className={drawerOverlay}></label>
        <div className={drawerMenu}>menu</div>
      </div>
    </div>
  </Fragment>
);

export default Drawer;
