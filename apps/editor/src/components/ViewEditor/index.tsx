import { full } from "@idealjs/camphora-styled";
import { createProxy } from "@idealjs/sapling";

import ComponentEditor from "./ComponentEditor";

interface IRect {
  height: number;
  width: number;
  top: number;
  left: number;
}

interface IComponent {
  id: string;
  position: string;
  rect: IRect;
  children?: string[];
  backgroundColor?: string;
}

export const components = createProxy<{ val: IComponent[] }>({
  val: [
    {
      id: "a",
      position: "relative",
      rect: {
        height: 300,
        width: 300,
        top: 0,
        left: 0,
      },
      backgroundColor: "blue",
      children: ["b"],
    },
    {
      id: "b",
      position: "relative",
      rect: {
        height: 200,
        width: 200,
        top: 0,
        left: 0,
      },
      backgroundColor: "green",
      children: ["c"],
    },
    {
      id: "c",
      position: "relative",
      rect: {
        height: 100,
        width: 100,
        top: 20,
        left: 20,
      },
      backgroundColor: "red",
    },
  ],
});

const ViewEditor = () => {
  return (
    <div className={full} style={{ marginTop: "24px" }}>
      <ComponentEditor componentId={"a"} />
    </div>
  );
};

export default ViewEditor;
