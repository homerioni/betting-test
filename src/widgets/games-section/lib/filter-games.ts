import type { Game } from "entities/api/game-list/types";

export type FilterGamesParams = {
  gameType: string;
  search: string;
};

const matchesGameType = (game: Game, type: string) => {
  if (!type) return true;

  return game.gameTypeID === type;
};

const matchesSearch = (game: Game, search: string) => {
  if (!search) return true;

  return game.gameName.toLowerCase().includes(search.toLowerCase());
};

export const filterGames = (games: Game[], params: FilterGamesParams) =>
  games.filter(
    (game) =>
      matchesGameType(game, params.gameType) &&
      matchesSearch(game, params.search)
  );
