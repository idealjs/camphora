import { absolute } from "@idealjs/camphora-styled";
import { DND_EVENT, IDragData } from "@idealjs/dnd-core";
import { createRef, derive, useEffect } from "@idealjs/sapling";
import clsx from "clsx";

import dnd from "../../../../dnd";
import { components } from "../..";
import { helpLine } from "../style.css";

interface IProps {
  componentId: string;
}

const Top = (props: IProps) => {
  const { componentId } = props;
  const ref = createRef<HTMLDivElement>(null);
  const component = derive(() => {
    return components.val.find((component) => component.id === componentId);
  });

  let height = component.val?.rect.height;
  let top = component.val?.rect.top;

  const onDragStart = () => {
    height = component.val?.rect.height;
    top = component.val?.rect.top;
  };
  const onDragEnd = () => {
    height = component.val?.rect.height;
    top = component.val?.rect.top;
  };
  const onDrag = (data: IDragData) => {
    if (component.val && height != null && top != null) {
      component.val.rect.height = height - data.offset.y;
      component.val.rect.top = top + data.offset.y;
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
        width: `${component.val?.rect.width}px`,
        height: "2px",
        top: "0px",
        left: "0px",
        backgroundColor: "black",
        cursor: "ns-resize",
      })}
    ></div>
  );
};

export default Top;
