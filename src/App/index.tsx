import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//Styles
import * as S from "./styles";
import { theme } from "components/layout/theme";
//Components
import { ThemeProvider } from "@mui/material";
//Components
import { Home } from "pages/Home";
import { Detailed } from "pages/Detailed";
import { Header } from "components/layout/Header";
//Types
import { ROUTES } from "constants";

const queryClient = new QueryClient();

const App: React.FC = ({}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <S.AppContainer>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.DETAILED} element={<Detailed />} />
          </Routes>
        </S.AppContainer>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
