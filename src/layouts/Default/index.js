import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import * as S from "./styles";

function Default({ children, pageTitle }) {
  return (
    <>
      {pageTitle && (
        <Helmet>
          <title>{pageTitle} | LAR</title>
        </Helmet>
      )}

      <S.Container>
        <S.Main>{children}</S.Main>
      </S.Container>
    </>
  );
}

Default.propTypes = {
  pageTitle: PropTypes.string,
};

export default Default;
