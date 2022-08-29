import React from "react";
//Styles
import * as S from "./styles";
//Components
import { AppBar, Container } from "@mui/material";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <S.HeaderContainer>
      <AppBar position="absolute">
        <Container disableGutters>
          <S.Toolbar>
            <S.LogoWrapper>
              <S.Title variant="h5">Where in the world?</S.Title>
            </S.LogoWrapper>
          </S.Toolbar>
        </Container>
      </AppBar>
    </S.HeaderContainer>
  );
};

export { Header };
