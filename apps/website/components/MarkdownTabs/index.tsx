import {
  card,
  cardLg,
  cardMd,
  cardPrimary,
  cardShadow,
  paper,
  paperSecondary,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import { nanoid } from "nanoid";
import React, { PropsWithChildren } from "react";

import { setDefaultValue, setGroupName } from "./context";
import { tabs } from "./tabs.css";

interface IProps {
  defaultValue?: string;
  groupName?: string;
}

const Tabs = (props: PropsWithChildren<IProps>) => {
  const { children, groupName, defaultValue } = props;
  setGroupName(groupName ?? nanoid());
  defaultValue != null && setDefaultValue(defaultValue);

  return (
    <div
      className={clsx(tabs, card, cardLg, cardPrimary, cardShadow)}
      style={{ margin: "16px" }}
    >
      {children}
    </div>
  );
};

export default Tabs;
