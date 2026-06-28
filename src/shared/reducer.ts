import { combineReducers } from "redux";
import { themeReducer } from "./store/theme/slice";

export const sharedReducers = combineReducers({
  theme: themeReducer,
});
