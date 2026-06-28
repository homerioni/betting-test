import cn from "classnames";
import { GameCardProps } from "./types";
import styles from "./styles.module.scss";

export const GameCard = ({ image, name, className }: GameCardProps) => (
  <div className={cn(styles.wrapper, className)}>
    <div className={styles.image}>
      <img src={image} alt={name} loading="lazy" />
    </div>
    <h3 className={styles.name}>{name}</h3>
  </div>
);
