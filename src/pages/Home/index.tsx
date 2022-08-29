import React from "react";
import { useCountries } from "hooks";
//Components
import { Card } from "./Card";
import { Skeleton } from "@mui/material";
//Styles
import * as S from "./styles";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  const { countries, isLoading } = useCountries();

  return (
    <S.HomeContainer>
      <S.Title>Home</S.Title>
      {!!countries &&
        countries.length > 0 &&
        countries.map((country) => <Card country={country} />)}
    </S.HomeContainer>
  );
};

export { Home };
