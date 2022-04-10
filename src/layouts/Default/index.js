import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import * as S from "./styles";

import { Navigation } from "./components";
import { OpenMonitor } from "components";
import routes from "constants/routes";

function Default({ children, pageTitle }) {
  const location = useLocation();

  const showOpenMonitor = useMemo(() => {
    return (
      location.pathname === routes.match ||
      location.pathname === routes.apprenticeship.run ||
      location.search.includes("openM=true")
    );
  }, [location]);

  return (
    <>
      {pageTitle && (
        <Helmet>
          <title>FUTar | {pageTitle}</title>
        </Helmet>
      )}

      <S.Container>
        <Navigation />
        <S.Main>{children}</S.Main>
        <OpenMonitor show={showOpenMonitor} />
      </S.Container>
    </>
  );
}

Default.propTypes = {
  pageTitle: PropTypes.string,
};

export default Default;
