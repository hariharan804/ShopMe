import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";
import { store } from "./redux/store";
import { theme } from "./theme";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
