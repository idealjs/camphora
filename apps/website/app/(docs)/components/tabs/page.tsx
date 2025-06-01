"use client";

import {
  card,
  cardLg,
  cardMd,
  cardPrimary,
  cardSecondary,
  Preview,
  TabItem,
  TabPanel,
  Tabs,
  tabSlider,
} from "@idealjs/camphora-react";
import clsx from "clsx";
import React from "react";
import { customTab } from "./custom.css";

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
          <div className={clsx(tabSlider, card, cardSecondary)}></div>
          <TabItem
            id="test1"
            value="test1"
            groupName="group1"
            defaultChecked={true}
            className={customTab}
          >
            <TabPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sit nemo vero recusandae vel rerum nesciunt facere hic? Ab
              repudiandae incidunt consequatur autem dicta modi ducimus
              doloribus blanditiis repellendus voluptas.
            </TabPanel>
          </TabItem>
          <TabItem
            id="test2"
            value="test2"
            groupName="group1"
            className={customTab}
          >
            <TabPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sit nemo vero recusandae vel rerum nesciunt facere hic? Ab
              repudiandae incidunt consequatur autem dicta modi ducimus
              doloribus blanditiis repellendus voluptas.
            </TabPanel>
          </TabItem>
          <TabItem
            id="test3"
            value="test3"
            groupName="group1"
            className={customTab}
          >
            <TabPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sit nemo vero recusandae vel rerum nesciunt facere hic? Ab
              repudiandae incidunt consequatur autem dicta modi ducimus
              doloribus blanditiis repellendus voluptas.
            </TabPanel>
          </TabItem>
        </Tabs>
      </Preview>
      <Preview style={{ height: "300px" }}>
        <Tabs
          className={clsx(card, cardPrimary, cardLg)}
          onChange={(e) => {
            console.log("test test", e);
          }}
        >
          <div className={clsx(tabSlider, card, cardSecondary)}></div>
          <TabItem
            id="test11"
            value="loooooong test1"
            groupName="group1"
            defaultChecked={true}
            className={customTab}
          >
            <TabPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sit nemo vero recusandae vel rerum nesciunt facere hic? Ab
              repudiandae incidunt consequatur autem dicta modi ducimus
              doloribus blanditiis repellendus voluptas.
            </TabPanel>
          </TabItem>
          <TabItem
            id="test22"
            value="test2"
            groupName="group1"
            className={customTab}
          >
            <TabPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sit nemo vero recusandae vel rerum nesciunt facere hic? Ab
              repudiandae incidunt consequatur autem dicta modi ducimus
              doloribus blanditiis repellendus voluptas.
            </TabPanel>
          </TabItem>
          <TabItem
            id="test33"
            value="test3"
            groupName="group1"
            className={customTab}
          >
            <TabPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sit nemo vero recusandae vel rerum nesciunt facere hic? Ab
              repudiandae incidunt consequatur autem dicta modi ducimus
              doloribus blanditiis repellendus voluptas.
            </TabPanel>
          </TabItem>
        </Tabs>
      </Preview>
    </div>
  );
};

export default page;
