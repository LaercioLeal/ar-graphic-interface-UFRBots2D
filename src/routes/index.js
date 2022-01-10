import routesPath from "constants/routes";

import Home from "views/Home";
import Match from "views/Match";
import Experiments from "views/Apprenticeship/Experiments";
import Material from "views/Study/Material";
import Tutorial from "views/Tutorial";
import Watch from "views/Watch";
import About from "views/About";

const views = {
  Home,
  Match,
  Experiments,
  Material,
  Tutorial,
  Watch,
  About,
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
