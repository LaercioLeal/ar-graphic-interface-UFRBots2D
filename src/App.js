import React from "react";

import { SnackbarProvider } from "notistack";
import ErrorOutlineOutlined from "@material-ui/icons/ErrorOutlineOutlined";
import ReportProblemOutlined from "@material-ui/icons/ReportProblemOutlined";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import CheckCircleOutlineOutlined from "@material-ui/icons/CheckCircleOutlineOutlined";
import Slide from "@material-ui/core/Slide";

import { isMobile } from "react-device-detect";
import Provider from "Provider/Provider";
import Router from "./routes/router";
import { NotSupported } from "components";
import { AnimateSharedLayout } from "framer-motion";

function App() {
  return (
    <SnackbarProvider
      maxSnack={4}
      iconVariant={{
        error: <ErrorOutlineOutlined style={{ marginRight: 8 }} />,
        warning: <ReportProblemOutlined style={{ marginRight: 8 }} />,
        info: <InfoOutlined style={{ marginRight: 8 }} />,
        success: <CheckCircleOutlineOutlined style={{ marginRight: 8 }} />,
      }}
      preventDuplicate
      anchorOrigin={{
        horizontal: isMobile ? "center" : "left",
        vertical: "bottom",
      }}
      TransitionComponent={Slide}
    >
      <Provider>
        <AnimateSharedLayout>
          {isMobile ? <NotSupported /> : <Router />}
        </AnimateSharedLayout>
      </Provider>
    </SnackbarProvider>
  );
}

export default App;
