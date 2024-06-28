import { expect } from "vitest";

const __dirname = new URL(".", import.meta.url).pathname.replace("/@fs", "");

expect.addSnapshotSerializer({
  test: (val) => {
    console.log("test test", val);
    return typeof val === "string" && val.includes(__dirname);
  },
  print: (val) => {
    return (val as string).replace(__dirname, ".");
  },
});
