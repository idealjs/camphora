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
import Menubar from "./components/Menubar";
import { menuItems } from "./configs";
import Layout from "./features/Layout";
import NewFileDialog from "./features/NewFileModal";
import Welcome from "./features/Welcome";

const App = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      console.log("test test");
    }
  });
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
      <Menubar menuItems={menuItems} />
      <div className={clsx(full, runtimeContainer)}>
        <Welcome className={runtimeComponent} />
        <Layout className={runtimeComponent} />
      </div>
      <NewFileDialog />
    </div>
  );
};

export default App;
