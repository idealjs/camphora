import { createRef, derive, useEffect } from "@idealjs/sapling";
import { JSX } from "@idealjs/sapling/jsx-runtime";

import { panels } from "../features/store/layout";
import FileExplorer from "./FileExplorer";
import ViewEditor from "./ViewEditor";

interface IProps {
  panelId: string;
}

export enum PAGE_TYPE {
  VIEW_EDITOR = "VIEW_EDITOR",
  FILE_EXPLORER = "FILE_EXPLORER",
}

const Panel = (props: IProps) => {
  const { panelId } = props;
  const panel = derive(() => panels.val.find((v) => v.id === panelId));

  const Comp = createRef<() => JSX.Element>();
  useEffect(() => {
    switch (panel.val?.page) {
      case PAGE_TYPE.VIEW_EDITOR:
        Comp.current = ViewEditor;
        break;
      case PAGE_TYPE.FILE_EXPLORER:
        Comp.current = FileExplorer;
        break;
      default:
        break;
    }
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
        return Comp.current ? <Comp.current /> : null;
      }}
    </div>
  );
};

export default Panel;
