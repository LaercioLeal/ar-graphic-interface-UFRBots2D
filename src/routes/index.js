import { lazy } from "react";

import routesPath from "constants/routes";

const views = {
  Home: lazy(() => import("views/Home")),
};

const routes = [
  {
    path: routesPath.home,
    component: views.Home,
    pageTitle: "Início",
  },
];

export default routes;
