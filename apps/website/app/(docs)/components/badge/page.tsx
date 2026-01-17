import { Badge, Preview } from "@idealjs/camphora-react";
import {
  badgeAccent,
  badgeGhost,
  badgeLg,
  badgeMd,
  badgeOutline,
  badgePrimary,
  badgeSecondary,
  badgeSm,
  badgeSolid,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

const page = () => {
  return (
    <div style={{ overflowY: "auto", padding: 24 }}>
      <h3>Color Variants</h3>
      <Preview>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Badge className={clsx(badgePrimary, badgeSolid)}>Primary</Badge>
          <Badge className={clsx(badgeSecondary, badgeSolid)}>Secondary</Badge>
          <Badge className={clsx(badgeAccent, badgeSolid)}>Accent</Badge>
          <Badge className={clsx(badgePrimary, badgeOutline)}>
            Primary Outline
          </Badge>
          <Badge className={clsx(badgeSecondary, badgeOutline)}>
            Secondary Outline
          </Badge>
          <Badge className={clsx(badgeGhost)}>Ghost</Badge>
        </div>
      </Preview>

      <h3 style={{ marginTop: 24 }}>Size Variants</h3>
      <Preview>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Badge>Default</Badge>
          <Badge className={clsx(badgeSm)}>Small</Badge>
          <Badge className={clsx(badgeMd)}>Medium</Badge>
          <Badge className={clsx(badgeLg)}>Large</Badge>
        </div>
      </Preview>
    </div>
  );
};

export default page;
