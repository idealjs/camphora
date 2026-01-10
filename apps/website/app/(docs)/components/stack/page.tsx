import { Preview } from "@idealjs/camphora-react";
import {
  card,
  cardPrimary,
  cardShadow,
  stack,
  stackItem,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

const StackPage = () => {
  return (
    <div style={{ overflowY: "auto" }}>
      <Preview style={{ height: "300px" }}>
        <div className={stack} style={{ width: "300px" }}>
          <div className={clsx(stackItem, card, cardPrimary, cardShadow)}>
            1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium error deserunt
          </div>
          <div className={clsx(stackItem, card, cardPrimary, cardShadow)}>
            2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium error deserunt
          </div>
          <div className={clsx(stackItem, card, cardPrimary, cardShadow)}>
            3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium error deserunt
          </div>
          <div className={clsx(stackItem, card, cardPrimary, cardShadow)}>
            3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium error deserunt
          </div>
          <div className={clsx(stackItem, card, cardPrimary, cardShadow)}>
            3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium error deserunt
          </div>
          <div className={clsx(stackItem, card, cardPrimary, cardShadow)}>
            3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium error deserunt
          </div>
        </div>
      </Preview>
    </div>
  );
};

export default StackPage;
