import { createTheme } from "@vanilla-extract/css";

import {
  defaultPalette,
  defaultSize,
  paletteVars,
  sizeVars,
} from "../themeContracts.css";

export const darkThemeSize = createTheme(sizeVars, defaultSize);

export const darkThemePalette = createTheme(paletteVars, defaultPalette);
