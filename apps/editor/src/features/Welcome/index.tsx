import {
  button,
  buttonPrimary,
  card,
  cardShadow,
  modal,
  overlay,
} from "@idealjs/camphora-styled";
import { createRef, useEffect } from "@idealjs/sapling";
import clsx from "clsx";
import debounce from "lodash.debounce";

import { modalCard } from "../NewFileModal/style.css";
import { workspace } from "../store/workspace";

interface IProps {
  className?: string;
}

const Welcome = (props: IProps) => {
  const { className } = props;
  const ref = createRef<HTMLDialogElement>(null);
  useEffect(
    debounce(() => {
      if (ref.current != null) {
        ref.current.showModal();
      }
    })
  );
  return (
    <div className={className}>
      {() => {
        if (workspace.opfsRoot == null) {
          return (
            <dialog
              ref={ref}
              className={clsx(modal, modalCard, card, cardShadow)}
            >
              <div>Welcome, Please Create Your Workspace</div>
              <button
                className={clsx(button, buttonPrimary)}
                onClick={async () => {
                  const val = await navigator.storage.getDirectory();
                  workspace.opfsRoot = val;
                }}
              >
                create workspace
              </button>
              <div>
                <span style={{ marginRight: "8px" }}>Project Powerd by</span>
                <a href="https://github.com/idealjs/sapling">
                  @idealjs/sapling
                </a>
              </div>
            </dialog>
          );
        }
        return <div>has opfsRoot</div>;
      }}
    </div>
  );
};

export default Welcome;
