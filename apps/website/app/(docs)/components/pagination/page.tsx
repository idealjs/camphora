import { Pagination, Preview } from "@idealjs/camphora-react";
import {
  paginationActive,
  paginationButton,
  paginationDisabled,
  paginationItem,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

const page = () => {
  return (
    <div style={{ overflowY: "auto", padding: 24 }}>
      <h3>Pagination</h3>
      <Preview>
        <Pagination>
          <li className={paginationItem}>
            <button type="button" className={clsx(paginationButton, paginationDisabled)}>Previous</button>
          </li>
          <li className={paginationItem}>
            <button type="button" className={clsx(paginationButton, paginationActive)}>1</button>
          </li>
          <li className={paginationItem}>
            <button type="button" className={paginationButton}>2</button>
          </li>
          <li className={paginationItem}>
            <button type="button" className={paginationButton}>3</button>
          </li>
          <li className={paginationItem}>
            <button type="button" className={paginationButton}>Next</button>
          </li>
        </Pagination>
      </Preview>
    </div>
  );
};

export default page;
