import { derive } from "@idealjs/sapling";

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

  const Comp = derive(() => {
    switch (panel.val?.page) {
      case PageType.ViewEditor:
        return ViewEditor;
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
        return Comp.val ? <Comp.val /> : null;
      }}
    </div>
  );
};

export default Panel;
