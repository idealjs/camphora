import { Preview, SwapOn, SwapOff, SwapRsc } from "@idealjs/camphora-react";
import { button } from "@idealjs/camphora-styled";
import clsx from "clsx";

const page = () => {
  return (
    <div style={{ overflowY: "auto" }}>
      <Preview style={{ height: "200px" }}>
        <SwapRsc>
          <SwapOn className={clsx(button)}>ON</SwapOn>
          <SwapOff className={clsx(button)}>OFF</SwapOff>
        </SwapRsc>
      </Preview>
    </div>
  );
};

export default page;
