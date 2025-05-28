import {
  button,
  buttonGhost,
  navbar,
  paper,
  paperShadow,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import Link from "next/link";

import LanguageDropdown from "./LanguageDropdown";
import ThemeDropdown from "./ThemeDropdown";
import VersionDropdown from "./VersionDropdown";
import { DrawerToggle } from "@idealjs/camphora-react";

interface IProps {
  drawerId: string;
  responsive?: boolean;
}

const Navbar = (props: IProps) => {
  const { drawerId, responsive } = props;
  return (
    <nav className={clsx(navbar, paper, paperShadow)}>
      <div style={{ display: "flex", flex: 1, gap: "8px" }}>
        <DrawerToggle
          drawerId={drawerId}
          className={clsx(button, buttonGhost)}
          responsive={responsive}
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </DrawerToggle>
        <Link href={"/"} className={clsx(button, buttonGhost)}>
          <h3 style={{ margin: 0 }}>🌳Camphora</h3>
        </Link>
        <VersionDropdown />
      </div>
      <div style={{ display: "flex", gap: "4px" }}>
        <ThemeDropdown />
        <LanguageDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
