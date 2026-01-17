import { Avatar, Preview } from "@idealjs/camphora-react";
import {
  avatarCircle,
  avatarFallback,
  avatarLg,
  avatarMd,
  avatarSm,
  avatarSquare,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

const page = () => {
  return (
    <div style={{ overflowY: "auto", padding: 24 }}>
      <h3>Size Variants</h3>
      <Preview>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Avatar className={clsx(avatarSm, avatarCircle, avatarFallback)} fallback="SM" />
          <Avatar className={clsx(avatarMd, avatarCircle, avatarFallback)} fallback="MD" />
          <Avatar className={clsx(avatarLg, avatarCircle, avatarFallback)} fallback="LG" />
        </div>
      </Preview>

      <h3 style={{ marginTop: 24 }}>Shape Variants</h3>
      <Preview>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Avatar className={clsx(avatarMd, avatarCircle, avatarFallback)} fallback="C" />
          <Avatar className={clsx(avatarMd, avatarSquare, avatarFallback)} fallback="S" />
        </div>
      </Preview>

      <h3 style={{ marginTop: 24 }}>Fallback Examples</h3>
      <Preview>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Avatar className={clsx(avatarMd, avatarCircle, avatarFallback)} fallback="JD" />
          <Avatar className={clsx(avatarMd, avatarSquare, avatarFallback)} fallback="AB" />
          <Avatar className={clsx(avatarMd, avatarCircle)} fallback="?" />
        </div>
      </Preview>
    </div>
  );
};

export default page;
