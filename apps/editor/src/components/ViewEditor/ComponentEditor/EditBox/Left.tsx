import { absolute } from "@idealjs/camphora-styled";
import { DND_EVENT, IDragData } from "@idealjs/dnd-core";
import { createRef, derive, useEffect } from "@idealjs/sapling";
import clsx from "clsx";

import dnd from "../../../../dnd";
import { components } from "../..";
import { helpLine, helpPoint } from "../style.css";

interface IProps {
  componentId: string;
}

const Left = (props: IProps) => {
  const { componentId } = props;

  const ref = createRef<HTMLDivElement>(null);
  const component = derive(() => {
    return components.val.find((component) => component.id === componentId);
  });

  let width = component.val?.rect.width;
  let left = component.val?.rect.left;

  const onDragStart = () => {
    width = component.val?.rect.width;
    left = component.val?.rect.left;
  };
  const onDragEnd = () => {
    width = component.val?.rect.width;
    left = component.val?.rect.left;
  };
  const onDrag = (data: IDragData) => {
    if (component.val && width != null && left != null) {
      component.val.rect.width = width - data.offset.x;
      component.val.rect.left = left + data.offset.x;
    }
  };

  useEffect(() => {
    if (ref.current != null) {
      dnd
        .draggable(ref.current)
        .addListener(DND_EVENT.DRAG_START, onDragStart)
        .addListener(DND_EVENT.DRAG_END, onDragEnd)
        .addListener(DND_EVENT.DRAG, onDrag);
    }
  });

  return (
    <div
      ref={ref}
      className={clsx(absolute, helpLine)}
      style={() => ({
        width: "2px",
        height: `${component.val?.rect.height}px`,
        top: "0px",
        left: "0px",
        backgroundColor: "black",
        cursor: "ew-resize",
      })}
    ></div>
  );
};

export default Left;
