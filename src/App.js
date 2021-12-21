import React from "react";
import { isMobile } from "react-device-detect";
import Provider from "Provider/Provider";
import Router from "./routes/router";
import { NotSupported } from "components";

function App() {
  return <Provider>{isMobile ? <NotSupported /> : <Router />}</Provider>;
}

export default App;
