import {
  button,
  buttonGhost,
  clickReaction,
  clickReactionInput,
  popover,
  popoverBottom,
  popoverContent,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const id = "popoverBottom";

const contentStyle = {
  background: "#ffffff", // 添加背景颜色
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // 添加阴影效果
  padding: "10px", // 添加内边距
  borderRadius: "5px", // 添加圆角
}

const Popover = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={popover} >
        <label
          htmlFor={id}
          className={clsx(clickReaction, button, buttonGhost)}
        >
          <input id={id} type="checkbox" className={clickReactionInput} />
          open
        </label>
        <div className={clsx(popoverContent, popoverBottom)} style={contentStyle}>hello popover</div>
      </div>
    </div>
  );
};

export default Popover;
