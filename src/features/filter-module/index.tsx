import cn from "classnames";
import { Filter } from "shared/ui/filter";
import {
  FILTER_GAME_TYPE_NAME,
  FILTER_GAME_TYPE_VALUES,
  FILTER_PLATFORM_NAME,
  FILTER_PLATFORM_VALUES,
} from "./constants";
import { FilterModuleProps } from "./types";
import styles from "./styles.module.scss";

export const FilterModule = ({
  className,
  onGameTypeChange,
  onPlatformChange,
}: FilterModuleProps) => (
  <div className={cn(styles.wrapper, className)}>
    {onGameTypeChange && (
      <Filter
        name={FILTER_GAME_TYPE_NAME}
        items={FILTER_GAME_TYPE_VALUES}
        onSelect={(value) => onGameTypeChange(value)}
      />
    )}
    {onPlatformChange && (
      <Filter
        name={FILTER_PLATFORM_NAME}
        items={FILTER_PLATFORM_VALUES}
        onSelect={(value) => onPlatformChange(value)}
      />
    )}
  </div>
);
