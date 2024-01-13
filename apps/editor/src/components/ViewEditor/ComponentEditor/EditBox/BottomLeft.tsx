import { absolute } from "@idealjs/camphora-styled";
import { DND_EVENT, IDragData } from "@idealjs/dnd-core";
import { createRef, derive, useEffect } from "@idealjs/sapling";
import clsx from "clsx";

import dnd from "../../../../dnd";
import { components } from "../..";
import { helpPoint } from "../style.css";

interface IProps {
  componentId: string;
}

const BottomLeft = (props: IProps) => {
  const { componentId } = props;

  const ref = createRef<HTMLDivElement>(null);
  const component = derive(() => {
    return components.val.find((component) => component.id === componentId);
  });

  let height = component.val?.rect.height;
  let width = component.val?.rect.width;
  let left = component.val?.rect.left;

  const onDragStart = () => {
    height = component.val?.rect.height;
    width = component.val?.rect.width;
    left = component.val?.rect.left;
  };
  const onDragEnd = () => {
    height = component.val?.rect.height;
    width = component.val?.rect.width;
    left = component.val?.rect.left;
  };
  const onDrag = (data: IDragData) => {
    if (component.val && height != null && width != null && left != null) {
      component.val.rect.height = height + data.offset.y;
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
      className={clsx(absolute, helpPoint)}
      style={() => ({
        width: "8px",
        height: "8px",
        top:
          component?.val?.rect != null
            ? `${component.val.rect.height}px`
            : "0px",
        left: "0px",
        backgroundColor: "black",
        cursor: "ne-resize",
      })}
    ></div>
  );
};

export default BottomLeft;
