import {
  absolute,
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

  return (
    <div
      ref={ref}
      tabIndex={0}
      className={() => clsx(editContainer, absolute)}
      style={() => ({
        height: `${component.val?.rect.height}px`,
        width: `${component.val?.rect.width}px`,
        marginTop: `${component.val?.rect.top}px`,
        marginLeft: `${component.val?.rect.left}px`,
      })}
    >
      <div
        className={clsx(editComponent, relative)}
        style={() => ({
          height: `${component.val?.rect.height}px`,
          width: `${component.val?.rect.width}px`,
          // top: `${component.val?.rect.top}px`,
          // left: `${component.val?.rect.left}px`,
          backgroundColor: `${component.val?.backgroundColor}`,
        })}
      >
        {() => {
          return (component.val?.children ?? []).map((child) => {
            return <ComponentEditor key={child} componentId={child} />;
          });
        }}
      </div>
      <EditBox componentId={componentId} />
    </div>
  );
};

export default ComponentEditor;
