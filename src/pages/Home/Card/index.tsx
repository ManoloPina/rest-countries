import React from "react";
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
    </S.CardContainer>
  );
});

export { Card };
