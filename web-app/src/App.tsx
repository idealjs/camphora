import { clickReaction, clickReactionInput } from "@idealjs/camphora-action";
import {
  drawer,
  drawerContent,
  drawerMenu,
  drawerOverlay,
  drawerSide,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className={clsx(clickReaction, drawer)}>
        <input id="test" type="checkbox" className={clickReactionInput} />
        <div className={drawerContent}>
          <label htmlFor="test" className={clsx("select-none")}>
            open
          </label>
        </div>
        <div className={clsx(drawerSide)}>
          <label htmlFor="test" className={drawerOverlay}></label>
          <div className={drawerMenu}>menu</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
