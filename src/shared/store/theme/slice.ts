import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState, ThemeType } from "./types";

export const initialState: ThemeState = {
  theme: "theme-dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (_, { payload }: PayloadAction<ThemeType>) => ({
      theme: payload,
    }),
  },
});

export const { setTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
