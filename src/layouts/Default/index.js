import React, { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import * as S from "./styles";

import { Navigation } from "./components";
import { OpenMonitor } from "components";
import routes from "constants/routes";
import { useQueue } from "modules/queue";
import { useSnackbar } from "notistack";

function Default({ children, pageTitle }) {
  const { enqueueSnackbar } = useSnackbar();
  const { setQueue, queue } = useQueue();
  const location = useLocation();

  const showOpenMonitor = useMemo(() => {
    return (
      location.pathname === routes.match ||
      location.pathname === routes.apprenticeship.run ||
      location.search.includes("openM=true")
    );
  }, [location]);

  useEffect(() => {
    if (
      !queue.running &&
      !!queue.queue.length &&
      !location.pathname.includes(routes.apprenticeship.details)
    ) {
      queue.updateLast().then((_) => {
        queue.run().then((_) => {
          setQueue(queue);
          enqueueSnackbar("Ensaio finalizado", { variant: "success" });
        });
      });
    }
  }, [
    queue.queue.length,
    queue.running,
    location,
    enqueueSnackbar,
    setQueue,
    queue,
  ]);

  return (
    <>
      {pageTitle && (
        <Helmet>
          <title>ARbot | {pageTitle}</title>
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
