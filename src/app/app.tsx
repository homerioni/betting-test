import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import { ThemeProvider } from "./providers/ThemeProvider";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
