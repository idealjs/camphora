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
        if (workspace.val.opfsRoot == null) {
          return (
            <div
              onClick={async () => {
                console.log("test test", workspace.val);
                const val = await navigator.storage.getDirectory();
                console.log("test test", val);

                workspace.val.opfsRoot = val;
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
