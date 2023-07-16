import { lightTheme } from "@idealjs/camphora-styled";
import React, { Fragment, PropsWithChildren } from "react";

const Root = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <Fragment>
      <div className={lightTheme}>{children}</div>
    </Fragment>
  );
};

export default Root;
