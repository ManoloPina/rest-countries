import React from "react";
import { usePagination } from "hooks";
//Styles
import * as S from "./styles";
//Types
import { ICountry } from "types/Countries";

interface Props {
  country: ICountry;
}

const Card: React.FC<Props> = React.memo(({ country }) => {
  return (
    <S.CardContainer>
      <S.FlagImage src={country.flags.png} />
      <S.Name>{country.name.common}</S.Name>
    </S.CardContainer>
  );
});

export { Card };
