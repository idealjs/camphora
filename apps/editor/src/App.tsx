import {
  full,
  lightTheme,
  relative,
  runtimeComponent,
  runtimeContainer,
  screen,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

import { appStyle } from "./App.css";
import Layout from "./features/Layout";
import Menubar from "./features/Menubar";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
      className={clsx(screen, relative, appStyle, lightTheme)}
    >
      <Menubar />
      <div className={clsx(full, runtimeContainer)}>
        {/* <Welcome className={runtimeComponent} /> */}
        <Layout className={runtimeComponent} />
      </div>
    </div>
  );
};

export default App;
