import { useState } from "react";
import cn from "classnames";
import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import { Icons } from "shared/icons";
import { SearchModuleProps } from "./types";
import styles from "./styles.module.scss";

export const SearchModule = ({ onSearch, className }: SearchModuleProps) => {
  const [value, setValue] = useState("");

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.content}>
        <Input
          className={styles.input}
          label="Search"
          value={value}
          onChange={setValue}
          placeholder="Search"
          icon={<Icons.SearchIcon />}
        />
        <Button
          className={styles.button}
          onClick={() => onSearch(value.trim())}
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
};
