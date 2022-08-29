import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { theme } from "components/layout/theme";

export const CardContainer = styled(Box).attrs({ disableGutters: true })`
  && {
    display: grid;
    padding: 0.2rem;
    background-color: ${theme.palette.primary.dark};
    border-radius: 0.4rem;
    width: fit-content;
    overflow: hidden;
    img {
      margin: -0.2rem -0.2rem 0 -0.2rem;
    }
    box-shadow: ${theme.shadows[1]};
  }
`;

export const FlagImage = styled.img`
  && {
    width: 110%;
  }
`;

export const Name = styled(Typography).attrs({ variant: "body1" })`
  && {
    font-weight: bold;
  }
`;
