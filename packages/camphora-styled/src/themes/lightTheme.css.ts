import { createTheme } from "@vanilla-extract/css";

import {
  defaultPalette,
  defaultSize,
  paletteVars,
  sizeVars,
} from "../themeContracts.css";

export const lightThemeSize = createTheme(sizeVars, defaultSize);

export const lightThemePalette = createTheme(paletteVars, defaultPalette);
