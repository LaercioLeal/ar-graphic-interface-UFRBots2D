import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import * as S from "./styles";

import { Navigation } from "./components";
import routes from "constants/routes";

function Default({ children, pageTitle }) {
  const isInHome = useMemo(() => {
    return window.location.pathname === routes.home;
  }, []);

  return (
    <>
      {pageTitle && (
        <Helmet>
          <title>LARBot | {pageTitle}</title>
        </Helmet>
      )}

      <S.Container>
        <Navigation isInHome={isInHome} />
        <S.Main>{children}</S.Main>
      </S.Container>
    </>
  );
}

Default.propTypes = {
  pageTitle: PropTypes.string,
};

export default Default;
