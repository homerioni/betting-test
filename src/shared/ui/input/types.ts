import { ChangeEvent, ReactNode } from "react";

export type InputProps = {
  className?: string;
  value: string;
  onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
};
