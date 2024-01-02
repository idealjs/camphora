import {
  absolute,
  editComponent,
  editContainer,
  relative,
} from "@idealjs/camphora-styled";
import { createState, derive } from "@idealjs/sapling";
import clsx from "clsx";

import { components } from "..";
import { helpLine, helpPoint } from "./style.css";

interface IRect {
  height: number;
  width: number;
  top: number;
  left: number;
}

interface IComponent {
  position: string;
  rect: IRect;
  children?: IComponent[];
}

interface IProps {
  componentId: string;
}

const hoverComponent = createState<(HTMLDivElement | null)[]>([]);

const selected = createState<HTMLDivElement | null>(null);

const ComponentEditor = (props: IProps) => {
  const { componentId } = props;
  const ref = createState<HTMLDivElement>(null);
  const component = derive(() => {
    return components.val.find((component) => component.id === componentId);
  });

  return (
    <div
      ref={ref}
      tabIndex={0}
      className={() => clsx(editContainer, relative)}
      onClick={() => {
        selected.val = ref.val;
      }}
      onMouseEnter={() => {
        hoverComponent.val = [ref.val, ...hoverComponent.val];
      }}
      onMouseLeave={() => {
        const [_, ...newVal] = hoverComponent.val;
        hoverComponent.val = newVal;
      }}
    >
      {/* top */}
      <div
        className={clsx(absolute, helpLine)}
        style={() => ({
          width: `${component.val?.rect.width}px`,
          height: "2px",
          top: 0,
          left: 0,
          backgroundColor: "black",
          cursor: "ns-resize",
        })}
      ></div>
      {/* bottom */}
      <div
        className={clsx(absolute, helpLine)}
        style={() => ({
          width: `${component.val?.rect.width}px`,
          height: "2px",
          top: `${component.val?.rect.height}px`,
          left: 0,
          backgroundColor: "black",
          cursor: "ns-resize",
        })}
      ></div>
      {/* left */}
      <div
        className={clsx(absolute, helpLine)}
        style={() => ({
          width: "2px",
          height: `${component.val?.rect.height}px`,
          top: 0,
          left: 0,
          backgroundColor: "black",
          cursor: "ew-resize",
        })}
      ></div>
      {/* right */}
      <div
        className={clsx(absolute, helpLine)}
        style={() => ({
          width: "2px",
          height: `${component.val?.rect.height}px`,
          top: 0,
          left: `${component.val?.rect.width}px`,
          backgroundColor: "black",
          cursor: "ew-resize",
        })}
      ></div>
      {/* top-left */}
      <div
        className={clsx(absolute, helpPoint)}
        style={() => ({
          width: "8px",
          height: "8px",
          top: 0,
          left: 0,
          backgroundColor: "black",
          cursor: "se-resize",
        })}
      ></div>
      {/* top-right */}
      <div
        className={clsx(absolute, helpPoint)}
        style={() => ({
          width: "8px",
          height: "8px",
          top: 0,
          left: `${component.val?.rect.width}px`,
          backgroundColor: "black",
          cursor: "ne-resize",
        })}
      ></div>
      {/* bottom-left */}
      <div
        className={clsx(absolute, helpPoint)}
        style={() => ({
          width: "8px",
          height: "8px",
          top: `${component.val?.rect.height}px`,
          left: 0,
          backgroundColor: "black",
          cursor: "ne-resize",
        })}
      ></div>
      {/* bottom-right */}
      <div
        className={clsx(absolute, helpPoint)}
        style={() => ({
          width: "8px",
          height: "8px",
          top: `${component.val?.rect.height}px`,
          left: `${component.val?.rect.width}px`,
          backgroundColor: "black",
          cursor: "se-resize",
        })}
      ></div>

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
          {() =>
            (component.val?.children ?? []).map((child) => {
              return <ComponentEditor key={child} componentId={child} />;
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ComponentEditor;
