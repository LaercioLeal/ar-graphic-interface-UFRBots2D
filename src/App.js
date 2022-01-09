import React from "react";
import { isMobile } from "react-device-detect";
import Provider from "Provider/Provider";
import Router from "./routes/router";
import { NotSupported } from "components";
import { AnimateSharedLayout } from "framer-motion";

function App() {
  return (
    <Provider>
      {isMobile ? (
        <NotSupported />
      ) : (
        <AnimateSharedLayout>
          <Router />
        </AnimateSharedLayout>
      )}
    </Provider>
  );
}

export default App;
