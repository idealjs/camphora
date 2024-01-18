import { overlay } from "@idealjs/camphora-styled";

import { workspace } from "../store/workspace";

interface IProps {
  className?: string;
}

const Welcome = (props: IProps) => {
  const { className } = props;
  return (
    <div className={className}>
      {() => {
        if (workspace.opfsRoot == null) {
          return (
            <div
              onClick={async () => {
                const val = await navigator.storage.getDirectory();
                workspace.opfsRoot = val;
              }}
              className={overlay}
            >
              no opfsRoot
            </div>
          );
        }
        return <div>has opfsRoot</div>;
      }}
    </div>
  );
};

export default Welcome;
