import { useEffect } from "react";
import { useAppDispatch } from "store";
import { getGameList } from "entities/api/game-list/thunks";
import { resetGameList } from "entities/api/game-list/slice";
import { GamesSection } from "widgets/games-section";

export const GamesPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGameList());

    return () => {
      dispatch(resetGameList());
    };
  }, [dispatch]);

  return <GamesSection />;
};
