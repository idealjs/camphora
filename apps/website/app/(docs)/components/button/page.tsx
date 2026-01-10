import { Button, Preview } from "@idealjs/camphora-react";
import {
  buttonAccent,
  buttonGhost,
  buttonLg,
  buttonLink,
  buttonNeutral,
  buttonPrimary,
  buttonSecondary,
  buttonSm,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

const page = () => {
  return (
    <div style={{ overflowY: "auto", padding: 24 }}>
      <h3>Color Variants</h3>
      <Preview>
        <div style={{ display: "flex", gap: 12 }}>
          <Button className={clsx(buttonPrimary)}>Primary</Button>
          <Button className={clsx(buttonSecondary)}>Secondary</Button>
          <Button className={clsx(buttonNeutral)}>Neutral</Button>
          <Button className={clsx(buttonAccent)}>Accent</Button>
          <Button className={clsx(buttonGhost)}>Ghost</Button>
          <Button className={clsx(buttonLink)}>Link</Button>
        </div>
      </Preview>

      <h3 style={{ marginTop: 24 }}>Size Variants</h3>
      <Preview>
        <div style={{ display: "flex", gap: 12 }}>
          <Button>Default</Button>
          <Button className={clsx(buttonSm)}>Small</Button>
          <Button className={clsx(buttonLg)}>Large</Button>
        </div>
      </Preview>
    </div>
  );
};

export default page;
