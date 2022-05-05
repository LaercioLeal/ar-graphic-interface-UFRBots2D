import React, { useMemo } from "react";

import * as S from "./styles";

function Heading({ title, sizeMB }) {
  const tagSize = useMemo(() => {
    return sizeMB >= 900 ? `${(sizeMB / 1000).toFixed(2)} GB` : `${sizeMB} MB`;
  }, [sizeMB]);

  return (
    <S.Container>
      {title && (
        <>
          <S.Top>
            <S.Title>{title}</S.Title>
            <S.Title memory>Total {tagSize}</S.Title>
          </S.Top>
          <S.Obs>
            *Atenção ao acumular muitos arquivos de logs, apague-os
            periodicamente! Acesse o diretório "/log"
          </S.Obs>
        </>
      )}
    </S.Container>
  );
}

export default Heading;
