import { LAYOUT_DIRECTION } from "@idealjs/layout-manager";
import { createState, useEffect } from "@idealjs/sapling";

import Panel from "../components/Panel";
import Splitter from "../components/Splitter";
import Tab from "../components/Tab";
import TitleBar from "../components/TitleBar";
import {
  layouts,
  panels,
  RootLayout,
  splitters,
  updateLayout,
} from "./store/layout";

interface IProps {
  className?: string;
}

const Layout = (props: IProps) => {
  const { className } = props;
  const ref = createState<HTMLDivElement>(null);
  const layoutRect = createState<{
    width: number;
    height: number;
    left: number;
    top: number;
  }>();

  const updateLayoutRect = () => {
    if (ref.val != null) {
      const rect = ref.val.getBoundingClientRect();
      if (RootLayout.width !== rect.width || RootLayout.height != rect.height) {
        layoutRect.val = {
          width: rect.width,
          height: rect.height,
          left: 0,
          top: 0,
        };
        updateLayout(layoutRect.val);
      }
    }
    return requestAnimationFrame(updateLayoutRect);
  };

  useEffect(() => {
    const handler = requestAnimationFrame(updateLayoutRect);
    return () => {
      cancelAnimationFrame(handler);
    };
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{ height: "100%", width: "100%", position: "relative" }}
    >
      <div>
        {() => {
          return panels.val.map((panel) => {
            return <Panel key={panel.id} panelId={panel.id} test-key="panel" />;
          });
        }}
      </div>
      <div>
        {() =>
          layouts.val.map((layout) => {
            if (layout.direction === LAYOUT_DIRECTION.TAB) {
              return (
                <TitleBar key={layout.id} layoutId={layout.id}>
                  {layout.children.map((panelId) => {
                    return <Tab key={panelId} panelId={panelId} />;
                  })}
                </TitleBar>
              );
            }
            return null;
          })
        }
      </div>
      <div>
        {() =>
          splitters.val.map((splitter) => {
            return <Splitter key={splitter.id} splitterId={splitter.id} />;
          })
        }
      </div>
    </div>
  );
};

export default Layout;
