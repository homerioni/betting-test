import type { Game } from "entities/api/game-list/types";

export type GameListProps = {
  games: Game[];
  providerName?: string;
  providerIconSrc?: string;
  className?: string;
  isLoading?: boolean;
};
