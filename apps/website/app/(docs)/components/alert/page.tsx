import { Alert, Preview } from "@idealjs/camphora-react";
import { alertVariants } from "@idealjs/camphora-styled";
import React from "react";

export default function Page() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1>Alert</h1>

      <Preview>
        <div style={{ display: "grid", gap: 8 }}>
          <Alert className={alertVariants.info}>
            Info alert — this is an informational message.
          </Alert>
          <Alert className={alertVariants.success}>
            Success alert — operation completed.
          </Alert>
          <Alert className={alertVariants.warning}>
            Warning alert — check this out.
          </Alert>
          <Alert className={alertVariants.error}>
            Error alert — something went wrong.
          </Alert>
        </div>
      </Preview>

      <h2>Dismissible</h2>
      <Preview>
        <Alert className={alertVariants.info} dismissible>
          Dismissible info alert — click × to close.
        </Alert>
      </Preview>
    </div>
  );
}
