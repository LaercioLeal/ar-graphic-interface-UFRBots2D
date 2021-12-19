import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import * as S from "./styles";

import { Header, Navigation } from "./components";

function Default({ children, pageTitle }) {
  return (
    <>
      {pageTitle && (
        <Helmet>
          <title>LARBot | {pageTitle}</title>
        </Helmet>
      )}

      <S.Container>
        <Header />
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
