import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./store";


let theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // Shades of blue
      dark: '#1565C0',
      light: '#64B5F6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF9800', // Shades of orange
      dark: '#F57C00',
      light: '#FFB74D',
      contrastText: '#000000',
    },
    typography: {
      allVariants: {
        fontFamily: `"HK Grotesk", sans-serif`,
      },
    },
    text: {
      fontFamily: `"HK Grotesk", sans-serif`,
    },
  },
});

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));

const NotFound = () => {
  return (
    <Typography variant="h3" align="center">
      Sorry the page can't be loaded!
      <Typography variant="h5">
        Contact the site's administrator or support for assistance.
      </Typography>
    </Typography>
  );
};

if (window.self === window.top) {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
} else {
  root.render(<NotFound />);
}
