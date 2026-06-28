import cn from "classnames";
import { getImageUrl } from "entities/lib";
import { GameCard } from "shared/ui/game-card";
import { useGamesLazy } from "./hooks";
import { GameListProps } from "./types";
import styles from "./styles.module.scss";

export const GameList = ({
  className,
  games,
  providerName,
  providerIconSrc,
  isLoading,
}: GameListProps) => {
  const { visibleGames, setLoaderElement, hasMoreData } = useGamesLazy(games);

  if (isLoading) {
    return <p>UI Загрузки</p>;
  }

  return (
    <div className={cn(styles.wrapper, className)}>
      {providerName && providerIconSrc && (
        <div className={styles.header}>
          <div className={styles.icon}>
            <img src={providerIconSrc} alt={providerName} />
          </div>
          <h2 className={styles.title}>{providerName}</h2>
        </div>
      )}
      {games.length > 0 ? (
        <div className={styles.list}>
          {visibleGames.map((game) => (
            <GameCard
              key={game.gameID}
              className={styles.game}
              image={getImageUrl(game.gameID)}
              name={game.gameName}
            />
          ))}
          {hasMoreData && (
            <div ref={setLoaderElement} className={styles.loader} aria-hidden />
          )}
        </div>
      ) : (
        <p className={styles.empty}>Не нашлось игр по вашему запросу</p>
      )}
    </div>
  );
};
