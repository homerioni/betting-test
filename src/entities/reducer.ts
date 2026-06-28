import { combineReducers } from "redux";
import { gameListReducer } from "./api/game-list/slice";

export const entitiesReducers = combineReducers({
  gameList: gameListReducer,
});
