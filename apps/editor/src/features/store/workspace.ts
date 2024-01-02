import { createState } from "@idealjs/sapling";

export const workspace = createState<{
  opfsRoot: FileSystemDirectoryHandle | null;
}>({
  opfsRoot: null,
});
