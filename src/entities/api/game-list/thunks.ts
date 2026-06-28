import { createAsyncThunk } from "@reduxjs/toolkit";
import { GameListError, GameListResponse } from "./types";
import { BASE_API_URL } from "../constants";

export const getGameList = createAsyncThunk<
  GameListResponse,
  string | undefined,
  { rejectValue: GameListError }
>("gameList/fetch", async (partnerName = "belparyaj", { rejectWithValue }) => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/game/list?partner_name=${partnerName}`
    );
    const data = await response.json();

    if (!response.ok) {
      return rejectWithValue(data as GameListError);
    }

    return data as GameListResponse;
  } catch (error) {
    return rejectWithValue({
      status: 400,
      error_message: "Ошибка сети, проверьте интернет подключение",
    });
  }
});
