import { memo, useState } from "react";
import cn from "classnames";
import { Icons } from "shared/icons";
import { SelectorProps } from "./types";
import styles from "./styles.module.scss";

export const Selector = memo(
  ({
    className,
    items,
    isOpen,
    onClick,
    onSelect,
    defaultOpen = false,
    defaultActiveIndex = 0,
  }: SelectorProps) => {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    const [isLocalOpen, setIsLocalOpen] = useState(defaultOpen);

    const isListOpen = isOpen ?? isLocalOpen;

    const handleContentClick = () => {
      setIsLocalOpen((prev) => !prev);
      onClick?.();
    };

    const handleSelect = (value: string, index: number) => {
      setIsLocalOpen(false);
      setActiveIndex(index);
      onSelect(value);
    };

    if (items.length === 0) return null;

    return (
      <div
        className={cn(styles.wrapper, className, {
          [styles.open]: isListOpen,
        })}
      >
        <button
          type="button"
          className={styles.content}
          onClick={handleContentClick}
        >
          <span>{items[activeIndex].text}</span>
          <Icons.ArrowBottom
            className={cn(styles.arrow, {
              [styles.open]: isListOpen,
            })}
          />
        </button>
        {isListOpen && (
          <ul
            className={cn(styles.list, {
              [styles.open]: isListOpen,
            })}
          >
            {items.map((item, index) => (
              <li
                key={item.value}
                className={cn(styles.item, {
                  [styles.active]: activeIndex === index,
                })}
              >
                <button
                  type="button"
                  onClick={() => handleSelect(item.value, index)}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);
