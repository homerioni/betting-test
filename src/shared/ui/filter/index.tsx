import { Selector } from "shared/ui/selector";
import { FilterProps } from "./types";
import styles from "./styles.module.scss";

export const Filter = ({ name, ...selectorProps }: FilterProps) => (
  <div className={styles.wrapper}>
    <p>{name}</p>
    <Selector {...selectorProps} />
  </div>
);
