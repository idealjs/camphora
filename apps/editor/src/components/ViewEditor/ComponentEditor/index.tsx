import {
  editComponent,
  editContainer,
  relative,
} from "@idealjs/camphora-styled";
import { createRef, derive } from "@idealjs/sapling";
import clsx from "clsx";

import { components } from "..";
import EditBox from "./EditBox";

interface IRect {
  height: number;
  width: number;
  top: number;
  left: number;
}

interface IProps {
  componentId: string;
}

const ComponentEditor = (props: IProps) => {
  console.log("Test test ComponentEditor");
  const { componentId } = props;
  const ref = createRef<HTMLDivElement>(null);
  const component = derive(() => {
    return components.val.find((component) => component.id === componentId);
  });

  console.log(
    "test test child key",
    componentId,
    component.val?.children?.map((v) => v)
  );

  return (
    <div ref={ref} tabIndex={0} className={() => clsx(editContainer, relative)}>
      <EditBox componentId={componentId} />
      <div
        className={editComponent}
        style={() => ({
          height: `${component.val?.rect.height}px`,
          width: `${component.val?.rect.width}px`,
          top: `${component.val?.rect.top}px`,
          left: `${component.val?.rect.left}px`,
          backgroundColor: `${component.val?.backgroundColor}`,
        })}
      >
        <div>
          {() => {
            return (component.val?.children ?? []).map((child) => {
              return <ComponentEditor key={child} componentId={child} />;
            });
          }}
        </div>
      </div>
    </div>
  );
};

export default ComponentEditor;
