import React from "react";

import * as S from "./styles";
import backIcon from "assets/icon/back.png";
import { useHistory } from "react-router-dom";

export default function Heading({ page, title, icon, back }) {
  const history = useHistory();
  return (
    <S.Container>
      {back && (
        <S.Back
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.9 }}
          onClick={() => {
            history.goBack();
          }}
        >
          <S.Image src={backIcon} size={40} />
        </S.Back>
      )}
      <S.Image
        src={icon}
        animate={{ rotate: 360, delay: 1 }}
        layoutId={`icon-page-${page}`}
        transition={{ duration: 1 }}
      />
      <S.Title
        animate={{ x: 25 }}
        transition={{ type: "spring", stiffness: 50, delay: 1 }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </S.Container>
  );
}
