import cn from "classnames";
import { ButtonProps } from "./types";
import styles from "./styles.module.scss";

export const Button = ({
  children,
  className,
  onClick,
  loading,
  disabled,
}: ButtonProps) => (
  <button
    className={cn(styles.wrapper, className, {
      [styles.loading]: loading,
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
