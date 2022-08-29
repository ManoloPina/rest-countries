import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//Styles
import * as S from "./styles";
import { theme } from "components/layout/theme";
//Components
import { ThemeProvider } from "@mui/material";
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
            <Route index element={<h1>Home</h1>} />
            <Route
              path={ROUTES.DETAILED}
              element={<h1 style={{ color: "white" }}>Detailed Country</h1>}
            />
          </Routes>
        </S.AppContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
