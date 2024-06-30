import "server-only";

import { cache } from "react";

const serverContext = <T>(defaultValue: T) => {
  const context = cache(() => ({ current: defaultValue }));
  return context;
};

export default serverContext;

export const getServerContext = <T>(
  context: () => {
    current: T;
  }
) => {
  return context().current;
};

export const setServerContext = <T>(
  context: () => {
    current: T;
  },
  value: T
) => {
  context().current = value;
};
