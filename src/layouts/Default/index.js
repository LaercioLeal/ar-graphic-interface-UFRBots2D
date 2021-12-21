import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import * as S from "./styles";

import { Navigation } from "./components";

function Default({ children, pageTitle }) {
  return (
    <>
      {pageTitle && (
        <Helmet>
          <title>LARBot | {pageTitle}</title>
        </Helmet>
      )}

      <S.Container>
        <Navigation />
        <S.Main>{children}</S.Main>
      </S.Container>
    </>
  );
}

Default.propTypes = {
  pageTitle: PropTypes.string,
};

export default Default;
