import { createProxy } from "@idealjs/sapling";

export const workspace = createProxy<{
  opfsRoot: FileSystemDirectoryHandle | null;
}>({
  opfsRoot: null,
});
