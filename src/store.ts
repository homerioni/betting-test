import { combineReducers } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { entitiesReducers } from "./entities/reducer";
import { sharedReducers } from "./shared/reducer";

export const mainReducer = combineReducers({
  entities: entitiesReducers,
  shared: sharedReducers,
});

export const store = configureStore({
  reducer: mainReducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
