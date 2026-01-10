import { input, inputContainer, inputGhost } from "@idealjs/camphora-styled";
import clsx from "clsx";

const SearchInput = () => {
  return (
    <label className={clsx(inputContainer, inputGhost)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        style={{
          height: "16px",
          marginRight: "8px",
        }}
      >
        <title>Search</title>
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
      <input type="text" className={input} placeholder="search..." />
    </label>
  );
};

export default SearchInput;
