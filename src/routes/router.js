import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "./index";
import routesPath from "constants/routes";
import { LayoutDefault } from "layouts";
import { ScrollToTop } from "utils";
import { LinearProgress } from "components";

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<LinearProgress onTop />}>
        <Switch>
          {routes.map(
            ({
              component: Component,
              layout: Layout = LayoutDefault,
              pageTitle,
              layoutProps,
              ...route
            }) => {
              return (
                <Route
                  exact
                  key={route.path}
                  {...route}
                  render={(props) => {
                    return (
                      <Layout pageTitle={pageTitle} {...layoutProps}>
                        <Component {...props} />
                      </Layout>
                    );
                  }}
                />
              );
            }
          )}
          <Redirect to={routesPath.home} from="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
