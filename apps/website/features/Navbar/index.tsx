import {
  button,
  buttonGhost,
  card,
  cardSeondary,
  cardShadow,
  cardXs,
  dropdown,
  dropdownContent,
  menu,
  menuItem,
  navbar,
  paper,
  paperShadow,
} from "@idealjs/camphora-styled";
import clsx from "clsx";
import Link from "next/link";

import LanguageDropdown from "./LanguageDropdown";
import ThemeDropdown from "./ThemeDropdown";
import VersionButton from "./VersionButton";

interface IProps {
  drawerId: string;
}

const Navbar = (props: IProps) => {
  const { drawerId } = props;
  return (
    <nav className={clsx(navbar, paper, paperShadow)}>
      <div style={{ display: "flex", flex: 1, gap: "8px" }}>
        <label htmlFor={drawerId} className={clsx(button, buttonGhost)}>
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
        </label>
        <Link href={"/"} className={clsx(button, buttonGhost)}>
          <h3 style={{ margin: 0 }}>🌳Camphora</h3>
        </Link>
        <div className={dropdown}>
          <VersionButton />
          <ul
            tabIndex={0}
            className={clsx(
              dropdownContent,
              card,
              cardXs,
              cardSeondary,
              cardShadow,
              menu
            )}
          >
            <li>
              <Link
                href={"/docs/changelog"}
                className={clsx(menuItem, button, buttonGhost)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.81836 6.72729V14H13.0911"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M24.005 12L24.0038 24.0088L32.4832 32.4882"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Changelog
              </Link>
            </li>
            <li>
              <Link
                href={"/docs/roadmap"}
                className={clsx(menuItem, button, buttonGhost)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 12L4 6V36L17 42L31 36L44 42V12L31 6L17 12Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M31 6V36"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M17 12V42"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.5 9L17 12L31 6L37.5 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.5 39L17 42L31 36L37.5 39"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Roadmap
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", gap: "4px" }}>
        <ThemeDropdown />
        <LanguageDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
