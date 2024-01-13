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

const TopRight = (props: IProps) => {
  const { componentId } = props;

  const ref = createRef<HTMLDivElement>(null);
  const component = derive(() => {
    return components.val.find((component) => component.id === componentId);
  });

  let height = component.val?.rect.height;
  let width = component.val?.rect.width;
  let top = component.val?.rect.top;

  const onDragStart = () => {
    height = component.val?.rect.height;
    width = component.val?.rect.width;
    top = component.val?.rect.top;
  };
  const onDragEnd = () => {
    height = component.val?.rect.height;
    width = component.val?.rect.width;
    top = component.val?.rect.top;
  };
  const onDrag = (data: IDragData) => {
    if (component.val && height != null && width != null && top != null) {
      component.val.rect.height = height - data.offset.y;
      component.val.rect.width = width + data.offset.x;
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
      className={clsx(absolute, helpPoint)}
      style={() => ({
        width: "8px",
        height: "8px",
        top: "0px",
        left:
          component?.val?.rect != null
            ? `${component.val.rect.width}px`
            : "0px",
        backgroundColor: "black",
        cursor: "ne-resize",
      })}
    ></div>
  );
};

export default TopRight;
