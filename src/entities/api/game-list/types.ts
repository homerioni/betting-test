export type Game = {
  gameID: string;
  gameName: string;
  gameTypeID: string;
  technology: "html5" | "unity";
  platform: string;
  firstSeenAt: string;
};

export type GameListResponse = {
  result: Game[];
  status: number;
  error_message: string;
};

export type GameListError = {
  status: number;
  error_message: string;
};

export type GameListState = {
  result: Game[];
  status: number | null;
  error_message: string | null;
  isLoading: boolean;
};
