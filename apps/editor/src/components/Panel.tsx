import {
  createElement,
  createRef,
  derive,
  effect,
  useEffect,
} from "@idealjs/sapling";
import { JSX } from "@idealjs/sapling/jsx-runtime";

import { panels } from "../features/store/layout";
import ViewEditor from "./ViewEditor";

interface IProps {
  panelId: string;
}

export enum PageType {
  ViewEditor = "ViewEditor",
}

const Panel = (props: IProps) => {
  const { panelId } = props;
  const panel = derive(() => panels.val.find((v) => v.id === panelId));

  const Comp = createRef<() => JSX.Element>();
  useEffect(() => {
    switch (panel.val?.page) {
      case PageType.ViewEditor:
        Comp.current = ViewEditor;
        break;
      default:
        break;
    }
  });

  useEffect(() => {
    console.log("test test", Comp.current);
  });

  return (
    <div
      style={() => ({
        height: `${panel.val?.height}px`,
        width: `${panel.val?.width}px`,
        left: `${panel.val?.left}px`,
        top: `${panel.val?.top}px`,
        position: "absolute",
        backgroundColor: "gray",
      })}
    >
      {() => {
        console.log("test test Comp.current");
        return Comp.current ? <Comp.current /> : null;
      }}
    </div>
  );
};

export default Panel;
