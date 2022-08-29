import React from "react";
import { useCountries, usePagination } from "hooks";
//Components
import { Card } from "./Card";
import { Skeleton } from "@mui/material";
//Styles
import * as S from "./styles";

interface Props {}

const ROWS = 20;

const Home: React.FC<Props> = ({}) => {
  const { countries, isLoading } = useCountries();
  const { currPage, startIndex, endIndex } = usePagination({
    pageSize: ROWS,
    totalItens: countries?.length || 0,
  });

  return (
    <S.HomeContainer>
      {!!countries && countries.length > 0 && !isLoading ? (
        <S.CountryListContainer>
          {countries.slice(startIndex, endIndex).map((country) => (
            <Card key={country.idd.root} country={country} />
          ))}
        </S.CountryListContainer>
      ) : (
        <S.CountryListContainer>
          {[...Array(20)].map((i) => (
            <Skeleton key={i} height="32rem" width="20rem" animation="wave" />
          ))}
        </S.CountryListContainer>
      )}
    </S.HomeContainer>
  );
};

export { Home };
