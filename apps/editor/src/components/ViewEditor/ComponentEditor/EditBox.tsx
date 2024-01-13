import { absolute } from "@idealjs/camphora-styled";
import { DND_EVENT, IDragData } from "@idealjs/dnd-core";
import { createRef, derive, useEffect } from "@idealjs/sapling";
import clsx from "clsx";

import dnd from "../../../dnd";
import { components } from "..";
import { helpLine, helpPoint } from "./style.css";

interface IProps {
  componentId: string;
}

const EditBox = (props: IProps) => {
  console.log("test test editbox")

  const { componentId } = props;
  const bottomRight = createRef<HTMLDivElement>(null);
  const component = derive(() => {
    return components.val.find((component) => component.id === componentId);
  });

  let height = component.val?.rect.height;
  const onDragStart = (...p: any[]) => {
    height = component.val?.rect.height;
    console.log(p);
  };
  const onDragEnd = (data: IDragData) => {
    console.log("test test onDragEnd");
    if (component.val) {
      height = component.val.rect.height;
    }
  };
  const onDrag = (data: IDragData) => {
    console.log("test test onDrag");
    if (component.val && height != null) {
      component.val.rect.height = height + data.offset.y;
    }
  };

  useEffect(() => {
    console.log("Test test effect", bottomRight.current);
  });

  useEffect(() => {
    if (bottomRight.current != null) {
      dnd
        .draggable(bottomRight.current)
        // .addListener(DND_EVENT.DRAG_START, onDragStart)
        .addListener(DND_EVENT.DRAG_END, onDragEnd)
        .addListener(DND_EVENT.DRAG, onDrag);
    }
  });
  return [
    // top
    <div
      key={"top"}
      className={clsx(absolute, helpLine)}
      style={() => ({
        width: `${component.val?.rect.width}px`,
        height: "2px",
        top: 0,
        left: 0,
        backgroundColor: "black",
        cursor: "ns-resize",
      })}
    ></div>,
    // bottom
    <div
      key={"bottom"}
      className={clsx(absolute, helpLine)}
      style={() => ({
        width: `${component.val?.rect.width}px`,
        height: "2px",
        top: `${component.val?.rect.height}px`,
        left: 0,
        backgroundColor: "black",
        cursor: "ns-resize",
      })}
    ></div>,
    // left
    <div
      key={"left"}
      className={clsx(absolute, helpLine)}
      style={() => ({
        width: "2px",
        height: `${component.val?.rect.height}px`,
        top: 0,
        left: 0,
        backgroundColor: "black",
        cursor: "ew-resize",
      })}
    ></div>,
    // right
    <div
      key={"right"}
      className={clsx(absolute, helpLine)}
      style={() => ({
        width: "2px",
        height: `${component.val?.rect.height}px`,
        top: 0,
        left: `${component.val?.rect.width}px`,
        backgroundColor: "black",
        cursor: "ew-resize",
      })}
    ></div>,
    // top-left
    <div
      key={"top-left"}
      className={clsx(absolute, helpPoint)}
      style={() => ({
        width: "8px",
        height: "8px",
        top: 0,
        left: 0,
        backgroundColor: "black",
        cursor: "se-resize",
      })}
    ></div>,
    // top-right
    <div
      key={"top-right"}
      className={clsx(absolute, helpPoint)}
      style={() => ({
        width: "8px",
        height: "8px",
        top: 0,
        left: `${component.val?.rect.width}px`,
        backgroundColor: "black",
        cursor: "ne-resize",
      })}
    ></div>,
    // bottom-left
    <div
      key={"bottom-left"}
      className={clsx(absolute, helpPoint)}
      style={() => ({
        width: "8px",
        height: "8px",
        top: `${component.val?.rect.height}px`,
        left: 0,
        backgroundColor: "black",
        cursor: "ne-resize",
      })}
    ></div>,
    // bottom-right
    <div
      ref={bottomRight}
      key={"bottom-right"}
      className={clsx(absolute, helpPoint)}
      style={() => ({
        width: "8px",
        height: "8px",
        top: `${component.val?.rect.height}px`,
        left: `${component.val?.rect.width}px`,
        backgroundColor: "black",
        cursor: "se-resize",
        userSelect: "none",
      })}
    ></div>,
  ];
};

export default EditBox;
