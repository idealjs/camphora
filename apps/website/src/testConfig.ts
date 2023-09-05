import { test } from "@playwright/test";

export const configureSnapshot: ConfigFunc = ({ page }, testInfo) => {};

type ConfigFunc = Parameters<typeof test.beforeEach>[0];
