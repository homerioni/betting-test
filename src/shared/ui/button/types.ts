import { ReactNode } from "react";

export type ButtonProps = {
  className?: string;
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};
