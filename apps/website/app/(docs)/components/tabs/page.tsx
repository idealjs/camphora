"use client";

import {
  card,
  cardMd,
  cardPrimary,
  Preview,
  TabItem,
  TabPanel,
  Tabs,
} from "@idealjs/camphora-react";
import clsx from "clsx";
import React from "react";

const page = () => {
  return (
    <div>
      <Preview style={{ height: "300px" }}>
        <Tabs
          className={clsx(card, cardPrimary, cardMd)}
          onChange={(e) => {
            console.log("test test", e);
          }}
        >
          <TabItem
            id="test1"
            value="test1"
            groupName="group1"
            defaultChecked={true}
          >
            <TabPanel>test1</TabPanel>
          </TabItem>
          <TabItem id="test2" value="test2" groupName="group1">
            <TabPanel>test2</TabPanel>
          </TabItem>
          <TabItem id="test3" value="test3" groupName="group1">
            <TabPanel>test3</TabPanel>
          </TabItem>
        </Tabs>
      </Preview>
    </div>
  );
};

export default page;
