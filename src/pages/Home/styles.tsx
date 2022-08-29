import styled from "styled-components";
import { Container, Typography, Box } from "@mui/material";

export const HomeContainer = styled(Container).attrs({ disableGutters: true })`
  && {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`;

export const Title = styled(Typography).attrs({ variant: "h3" })`
  && {
  }
`;

export const CountryListContainer = styled(Box)`
  && {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;
