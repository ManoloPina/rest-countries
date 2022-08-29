import { Container } from "@mui/material";
import styled from "styled-components";

export const AppContainer = styled(Container).attrs({
  maxWidth: "lg",
})`
  && {
    height: 100%;
    padding-top: 6rem;
  }
`;
