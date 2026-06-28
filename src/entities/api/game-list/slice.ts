import { createSlice } from "@reduxjs/toolkit";
import { GameListState } from "./types";
import { getGameList } from "./thunks";

export const initialState: GameListState = {
  result: [],
  status: null,
  error_message: null,
  isLoading: false,
};

export const gameListSlice = createSlice({
  name: "gameList",
  initialState,
  reducers: {
    resetGameList: () => initialState,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getGameList.pending, (state) => {
        state.isLoading = true;
        state.error_message = null;
      })
      .addCase(getGameList.fulfilled, (_, action) => {
        return { isLoading: false, ...action.payload };
      })
      .addCase(getGameList.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.status ?? null;
        state.error_message = action.payload?.error_message ?? null;
      }),
});

export const { resetGameList } = gameListSlice.actions;

export const gameListReducer = gameListSlice.reducer;
