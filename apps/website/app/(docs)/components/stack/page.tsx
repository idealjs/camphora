import {
  card,
  cardPrimary,
  cardShadow,
  cardXs,
  stack,
  stackItem,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";
import { Preview } from "@idealjs/camphora-react";

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
