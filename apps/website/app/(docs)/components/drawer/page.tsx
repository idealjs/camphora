import {
  Drawer,
  DrawerContent,
  DrawerSide,
  DrawerToggle,
  Preview,
} from "@idealjs/camphora-react";
import {
  button,
  buttonGhost,
  card,
  cardMd,
  cardPrimary,
  cardSprinkles,
  colorTokenVars,
  navbar,
  overlay,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

const page = () => {
  return (
    <div style={{ overflowY: "auto" }}>
      <Preview style={{ height: "300px" }}>
        <Drawer drawerId="1-drawer">
          <DrawerContent>
            <nav
              className={clsx(navbar, cardSprinkles({ borderRadius: "xs" }))}
              style={{ backgroundColor: colorTokenVars.common[100] }}
            >
              <div
                style={{ display: "flex", flex: 1, gap: "8px", minHeight: 48 }}
              >
                <DrawerToggle
                  drawerId={"1-drawer"}
                  className={clsx(button, buttonGhost)}
                  responsive={true}
                >
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Menu</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </DrawerToggle>
              </div>
            </nav>
            <div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
                repudiandae quasi tempore dolore. Omnis cumque id modi dolor
                veniam, hic voluptate odio. Ut, laudantium quod optio soluta hic
                velit?
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
                repudiandae quasi tempore dolore. Omnis cumque id modi dolor
                veniam, hic voluptate odio. Ut, laudantium quod optio soluta hic
                velit?
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
                repudiandae quasi tempore dolore. Omnis cumque id modi dolor
                veniam, hic voluptate odio. Ut, laudantium quod optio soluta hic
                velit?
              </div>
            </div>
          </DrawerContent>
          <label
            htmlFor={"1-drawer"}
            className={overlay}
            aria-label="Close drawer"
          />
          <DrawerSide
            drawerId="1-drawer"
            responsive={true}
            className={clsx(card, cardMd, cardPrimary)}
          >
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
              repudiandae quasi tempore dolore. Omnis cumque id modi dolor
              veniam, hic voluptate odio. Ut, laudantium quod optio soluta hic
              velit?
            </div>
          </DrawerSide>
        </Drawer>
      </Preview>

      <Preview style={{ height: "300px" }}>
        <Drawer drawerId="2-drawer">
          <DrawerContent>
            <nav
              className={clsx(navbar, cardSprinkles({ borderRadius: "xs" }))}
              style={{ backgroundColor: colorTokenVars.common[100] }}
            >
              <div
                style={{ display: "flex", flex: 1, gap: "8px", minHeight: 48 }}
              >
                <DrawerToggle
                  drawerId={"2-drawer"}
                  className={clsx(button, buttonGhost)}
                  responsive={false}
                >
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Menu</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </DrawerToggle>
              </div>
            </nav>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
              repudiandae quasi tempore dolore. Omnis cumque id modi dolor
              veniam, hic voluptate odio. Ut, laudantium quod optio soluta hic
              velit?
            </div>
          </DrawerContent>
          <label
            htmlFor={"2-drawer"}
            className={overlay}
            aria-label="Close drawer"
          />
          <DrawerSide
            drawerId="2-drawer"
            responsive={false}
            className={clsx(card, cardMd, cardPrimary)}
          >
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
              repudiandae quasi tempore dolore. Omnis cumque id modi dolor
              veniam, hic voluptate odio. Ut, laudantium quod optio soluta hic
              velit?
            </div>
          </DrawerSide>
        </Drawer>
      </Preview>
    </div>
  );
};

export default page;
