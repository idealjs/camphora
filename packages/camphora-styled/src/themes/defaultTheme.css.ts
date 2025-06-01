import { createTheme } from "@vanilla-extract/css";

import {
  defaultPalette,
  defaultSize,
  paletteVars,
  sizeVars,
} from "../themeContracts.css";

export const defaultThemeSize = createTheme(sizeVars, defaultSize);

export const defaultThemePalette = createTheme(paletteVars, defaultPalette);
