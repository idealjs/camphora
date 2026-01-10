import {
  glassBackgroundLayer,
  glassBorderLayer,
  glassContainer,
  glassContentLayer,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

export const GlassContainer = (props: PropsWithChildren<IProps>) => {
  const { children, className } = props;
  return (
    <div className={clsx(glassContainer, className)}>
      <div className={glassBackgroundLayer} />
      <div className={glassBorderLayer} />
      <div className={glassContentLayer}>{children}</div>
    </div>
  );
};

export default GlassContainer;
