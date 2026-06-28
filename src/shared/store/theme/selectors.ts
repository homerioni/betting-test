import { AppState } from "store";

export const selectThemeState = (state: AppState) => state.shared.theme;

export const themeSelector = (state: AppState) => selectThemeState(state).theme;
