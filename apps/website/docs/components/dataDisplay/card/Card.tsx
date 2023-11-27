import { card, cardShadow } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React, { type CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Card = () => {
  return (
    <div style={wrapper}>
      <div className={clsx(card, cardShadow)}>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          qui veritatis. Quas commodi sit soluta debitis saepe consequatur qui
          atque quam alias fugiat, tempora in quae ipsum quisquam quidem
          voluptates.
        </div>
      </div>
    </div>
  );
};

export default Card;
