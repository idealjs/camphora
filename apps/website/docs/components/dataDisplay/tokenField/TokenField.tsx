import { token, tokenField, vars } from "@idealjs/camphora-styled";
import clsx from "clsx";
import React from "react";

const TokenField = () => {
  return (
    <div className={tokenField}>
      <div
        className={clsx(token)}
        style={{
          color: vars.colors.base.content,
          backgroundColor: vars.colors.base[100],
          borderRadius: "4px",
          margin: "4px",
          padding: "4px",
        }}
      >
        token
      </div>
      <div
        className={clsx(token)}
        style={{
          color: vars.colors.base.content,
          backgroundColor: vars.colors.base[100],
          borderRadius: "4px",
          margin: "4px",
          padding: "4px",
        }}
      >
        token
      </div>
      <div
        className={clsx(token)}
        style={{
          color: vars.colors.base.content,
          backgroundColor: vars.colors.base[100],
          borderRadius: "4px",
          margin: "4px",
          padding: "4px",
        }}
      >
        longgggggggggggggggggggggggggggggggggggggggggToken
      </div>
      <div
        className={clsx(token)}
        style={{
          color: vars.colors.base.content,
          backgroundColor: vars.colors.base[100],
          borderRadius: "4px",
          margin: "4px",
          padding: "4px",
        }}
      >
        token
      </div>
      <div
        className={clsx(token)}
        style={{
          color: vars.colors.base.content,
          backgroundColor: vars.colors.base[100],
          borderRadius: "4px",
          margin: "4px",
          padding: "4px",
        }}
      >
        longgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggToken
      </div>
    </div>
  );
};

export default TokenField;
