import { useEffect, useMemo, useState } from "react";
import { Game } from "entities/api/game-list/types";
import { useScrollLoading } from "entities/hooks";
import { GAME_LIST_PAGE_SIZE, GAME_LIST_SCROLL_OFFSET } from "./constants";

export const useGamesLazy = (games: Game[]) => {
  const [visibleCount, setVisibleCount] = useState(GAME_LIST_PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(GAME_LIST_PAGE_SIZE);
  }, [games]);

  const visibleGames = useMemo(
    () => games.slice(0, visibleCount),
    [games, visibleCount]
  );

  const hasMoreData = visibleCount < games.length;

  const { setElement } = useScrollLoading({
    onDataLoad: () => setVisibleCount((prev) => prev + GAME_LIST_PAGE_SIZE),
    bottomScrollOffset: GAME_LIST_SCROLL_OFFSET,
    hasMoreData,
  });

  return {
    visibleGames,
    setLoaderElement: setElement,
    hasMoreData,
  };
};
