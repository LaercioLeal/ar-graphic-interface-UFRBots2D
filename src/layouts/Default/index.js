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
    console.log(location);
    return (
      location.pathname === routes.match ||
      location.pathname === routes.apprenticeship.run ||
      location.search.includes("pageExp=3")
    );
  }, [location]);

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
        {showOpenMonitor && <OpenMonitor />}
      </S.Container>
    </>
  );
}

Default.propTypes = {
  pageTitle: PropTypes.string,
};

export default Default;
