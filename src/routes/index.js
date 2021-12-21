import { lazy } from "react";

import routesPath from "constants/routes";

const views = {
  Home: lazy(() => import("views/Home")),
  Match: lazy(() => import("views/Match")),
  Experiments: lazy(() => import("views/Apprenticeship/Experiments")),
  Material: lazy(() => import("views/Study/Material")),
  Tutorial: lazy(() => import("views/Tutorial")),
  Watch: lazy(() => import("views/Watch")),
  About: lazy(() => import("views/About")),
};

const routes = [
  {
    path: routesPath.home,
    component: views.Home,
    pageTitle: "Início",
  },
  {
    path: routesPath.match,
    component: views.Match,
    pageTitle: "Partida",
  },
  {
    path: routesPath.apprenticeship.experiments,
    component: views.Experiments,
    pageTitle: "Experimentos",
  },
  {
    path: routesPath.study.material,
    component: views.Material,
    pageTitle: "Material",
  },
  {
    path: routesPath.tutorial,
    component: views.Tutorial,
    pageTitle: "Tutorial",
  },
  {
    path: routesPath.watch,
    component: views.Watch,
    pageTitle: "Assistir",
  },
  {
    path: routesPath.about,
    component: views.About,
    pageTitle: "Sobre",
  },
];

export default routes;
