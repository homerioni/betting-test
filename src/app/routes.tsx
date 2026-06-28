import { Route, Routes } from "react-router-dom";
import { GamesPage } from "pages/games";
import { ROUTES } from "shared/constants";

export const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.MAIN} element={<GamesPage />} />
  </Routes>
);
