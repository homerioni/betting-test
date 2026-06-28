import { ChangeEvent } from "react";
import cn from "classnames";
import { InputProps } from "./types";
import styles from "./styles.module.scss";

export const Input = ({
  className,
  label,
  value,
  onChange,
  placeholder,
  icon,
}: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChange(event.target.value, event);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.inputWrapper}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <input
          className={styles.input}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
