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
            <div
              style={{
                height: "40px",
                width: "80px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              testA
            </div>
          </TabItem>
          <TabPanel>test1</TabPanel>
          <TabItem id="test2" value="test2" groupName="group1">
            <div
              style={{
                height: "40px",
                width: "80px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              testB
            </div>
          </TabItem>
          <TabPanel>test2</TabPanel>
          <TabItem id="test3" value="test3" groupName="group1">
            <div
              style={{
                height: "40px",
                width: "80px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              testC
            </div>
          </TabItem>
          <TabPanel>test3</TabPanel>
        </Tabs>
      </Preview>
    </div>
  );
};

export default page;
