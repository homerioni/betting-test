import { useEffect } from "react";
import { useAppSelector } from "store";
import { themeSelector } from "shared/store/theme/selectors";
import { ThemeType } from "shared/store/theme/types";
import { ThemeProviderProps } from "./types";

const themeClasses: ThemeType[] = ["theme-dark", "theme-light"];

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useAppSelector(themeSelector);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(...themeClasses);
    root.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
};
