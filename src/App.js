import React from "react";
import Provider from "Provider/Provider";
import Router from "./routes/router";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
