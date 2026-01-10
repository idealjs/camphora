import { style } from "@vanilla-extract/css";

export const swap = style({
  display: "inline-flex",
  alignItems: "center",
  position: "relative",
});

export const swapOn = style({
  display: "none",
  selectors: {
    // 当父容器下的 input 被选中时显示 swapOn
    [`${swap} input:checked ~ &`]: {
      display: "inline-flex",
      alignItems: "center",
    },
  },
});

export const swapOff = style({
  display: "inline-flex",
  alignItems: "center",
  selectors: {
    // 当父容器下的 input 被选中时隐藏 swapOff
    [`${swap} input:checked ~ &`]: {
      display: "none",
    },
  },
});

export const swapRotate = style({
  selectors: {
    // 给需要旋转效果的元素添加变换（用户可以组合使用）
    [`${swap} &`]: {
      transition: "transform 0.3s ease",
    },
    [`${swap} input:checked ~ &`]: {
      transform: "rotate(180deg)",
    },
  },
});
