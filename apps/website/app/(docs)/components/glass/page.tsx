import { GlassContainer, GlassFilter } from "@idealjs/camphora-react";
import { card, cardShadow } from "@idealjs/camphora-styled";
import clsx from "clsx";

const GlassPage = () => {
  return (
    <div
      className="min-h-screen p-8"
      style={{
        background: `url("/glass.png") center/cover`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <GlassFilter />
      <GlassContainer className={clsx(card, cardShadow)}>
        <div className="text-white space-y-4">
          <p>Glass效果组件使用backdrop-filter实现磨砂玻璃效果：</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              通过组合多个CSS滤镜：
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>blur：创建磨砂玻璃的模糊效果</li>
                <li>brightness：调整透明度和亮度</li>
                <li>contrast：增强层次感</li>
                <li>invert：微调暗部细节</li>
              </ul>
            </li>
            <li className="mt-4">
              特点：
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>简单易用，仅需一个组件即可实现</li>
                <li>性能好，使用原生CSS滤镜</li>
                <li>可定制，支持调整模糊度和颜色</li>
              </ul>
            </li>
          </ul>
        </div>
      </GlassContainer>
    </div>
  );
};

export default GlassPage;
