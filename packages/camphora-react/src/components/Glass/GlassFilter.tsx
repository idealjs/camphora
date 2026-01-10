import { glassFilter } from "@idealjs/camphora-styled";

const GlassFilter = () => {
  return (
    <svg style={{ display: "none" }} aria-hidden="true">
      <title>Glass filter (decorative)</title>
      <filter id={glassFilter} x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.015 0.015"
          numOctaves="3"
          seed="92"
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation="5" result="blurred" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="blurred"
          scale="10"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feColorMatrix type="saturate" values="1.5" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="1.5" />
        </feComponentTransfer>
      </filter>
    </svg>
  );
};

export default GlassFilter;
