"use client";

import { Preview, TabItem, TabPanel, Tabs } from "@idealjs/camphora-react";
import {
  card,
  cardLg,
  cardMd,
  cardPrimary,
  cardSecondary,
  tabLg,
  tabSlider,
  tabSm,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import { customTab } from "./custom.css";

const page = () => {
  return (
    <div style={{ overflowY: "auto" }}>
      <Preview style={{ height: "300px" }}>
        <Tabs className={clsx(card, cardPrimary, cardMd, tabSm)}>
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
        <Tabs className={clsx(card, cardPrimary, cardLg)}>
          <div className={clsx(tabSlider, card, cardSecondary)}></div>
          <TabItem
            id="test11"
            value="loooooong test1"
            groupName="group11"
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
            groupName="group11"
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
            groupName="group11"
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
        <Tabs className={clsx(card, cardPrimary, cardLg, tabLg)}>
          <div className={clsx(tabSlider, card, cardSecondary)}></div>
          <TabItem
            id="test111"
            value="loooooong test1"
            groupName="group12"
            defaultChecked={true}
            className={customTab}
          ></TabItem>
          <TabItem
            id="test222"
            value="test2"
            groupName="group12"
            className={customTab}
          ></TabItem>
          <TabItem
            id="test333"
            value="test3"
            groupName="group12"
            className={customTab}
          ></TabItem>
        </Tabs>
      </Preview>
    </div>
  );
};

export default page;
