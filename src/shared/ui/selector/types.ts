export type SelectItem = {
  text: string;
  value: string;
};

export type SelectorProps = {
  className?: string;
  items: SelectItem[];
  onSelect: (value: string) => void;
  onClick?: () => void;
  isOpen?: boolean;
  defaultOpen?: boolean;
  defaultActiveIndex?: number;
};
