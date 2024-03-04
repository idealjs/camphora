import {
  createAddPanelAction,
  findNodeByRules,
  getLayouts,
  getPanels,
  getSplitters,
  ILayout,
  IPanel,
  ISplitter,
  LAYOUT_DIRECTION,
  LayoutNode,
  MASK_PART,
  PanelNode,
  panelNodeToJSON,
} from "@idealjs/layout-manager";
import { createProxy } from "@idealjs/sapling";

export const splitters = createProxy<{ val: ISplitter[] }>({ val: [] });
export const layouts = createProxy<{ val: ILayout[] }>({ val: [] });
export const panels = createProxy<{ val: IPanel[] }>({ val: [] });

export const setSplitters = (values: ISplitter[]) => {
  splitters.val = values;
};

export const setLayouts = (values: ILayout[]) => {
  layouts.val = values;
};

export const setPanels = (values: IPanel[]) => {
  panels.val = values;
};

const createLayout = (
  root = new LayoutNode({
    direction: LAYOUT_DIRECTION.ROOT,
  })
) => {
  const updateLayout = (
    rect: {
      height: number;
      width: number;
      left: number;
      top: number;
    } = {
      height: root.height,
      width: root.width,
      left: root.left,
      top: root.top,
    }
  ) => {
    root.shakeTree();
    rect && root.fill(rect);
    const layouts = getLayouts(root);
    const panels = getPanels(root);
    const splitters = getSplitters(root);

    setPanels(panels);
    setLayouts(layouts);
    setSplitters(splitters);
  };
  return {
    updateLayout,
    root,
  };
};

export const { root: RootLayout, updateLayout } = createLayout(
  new LayoutNode({
    direction: LAYOUT_DIRECTION.ROOT,
    layouts: [],
  })
);

const rules = [
  { part: MASK_PART.BOTTOM, max: 2 },
  { part: MASK_PART.RIGHT, max: 2 },
  { part: MASK_PART.TOP, max: 3, limitLevel: 1 },
  { part: MASK_PART.CENTER, max: 3 },
];

export const addPanel = (
  panelNode: PanelNode = new PanelNode(),
  mask = MASK_PART.CENTER
) => {
  const target = findNodeByRules(RootLayout, rules);
  RootLayout.doAction(
    createAddPanelAction({
      panelNode: panelNode,
      mask: target?.rule.part ?? mask,
      target: target?.layoutNode ?? RootLayout,
    })
  );
  updateLayout();
};
