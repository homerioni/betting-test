import { AppState } from "store";

export const selectorGameListState = (state: AppState) =>
  state.entities.gameList;

export const gameListSelector = (state: AppState) =>
  selectorGameListState(state).result;

export const isGameListLoadingSelector = (state: AppState) =>
  selectorGameListState(state).isLoading;

export const gameListErrorSelector = (state: AppState) =>
  selectorGameListState(state).error_message;
