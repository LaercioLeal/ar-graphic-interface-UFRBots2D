import React from "react";

import * as S from "./styles";
import backIcon from "assets/icon/back.png";
import { useHistory } from "react-router-dom";

export default function Heading({
  page,
  title,
  subtitle,
  icon,
  back,
  children,
}) {
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
      <S.Info>
        <S.Title
          animate={{ x: 25 }}
          transition={{ type: "spring", stiffness: 50, delay: 1 }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <S.Subtitle
          animate={{ x: 25 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      </S.Info>
      <S.ChildrenContainer>{children}</S.ChildrenContainer>
    </S.Container>
  );
}
