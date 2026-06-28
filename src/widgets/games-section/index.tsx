import { useMemo, useState } from "react";
import { useAppSelector } from "store";
import {
  gameListSelector,
  isGameListLoadingSelector,
} from "entities/api/game-list/selectors";
import { FilterModule } from "features/filter-module";
import { SearchModule } from "features/search-module";
import { GameList } from "features/game-list";
import ParagmaticIconSrc from "shared/images/paragmatic.svg";
import { filterGames } from "./lib/filter-games";
import styles from "./styles.module.scss";

export const GamesSection = () => {
  const games = useAppSelector(gameListSelector);
  const isLoading = useAppSelector(isGameListLoadingSelector);
  const [gameType, setGameType] = useState("");
  const [search, setSearch] = useState("");

  const filteredGames = useMemo(
    () => filterGames(games, { gameType, search }),
    [games, gameType, search]
  );

  return (
    <section>
      <div className={styles.toolbar}>
        <FilterModule
          className={styles.filter}
          onGameTypeChange={setGameType}
        />
        <SearchModule className={styles.search} onSearch={setSearch} />
      </div>
      <GameList
        games={filteredGames}
        providerName={"Pragmatic play"}
        providerIconSrc={ParagmaticIconSrc}
        isLoading={isLoading}
      />
    </section>
  );
};
