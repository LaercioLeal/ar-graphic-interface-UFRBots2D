import routesPath from "constants/routes";

import Home from "views/Home";
import Match from "views/Match";
import Experiments from "views/Apprenticeship/Experiments";
import Details from "views/Apprenticeship/Details";
import Material from "views/Study/Material";
import Quiz from "views/Study/Quiz";
import Code from "views/Study/Code";
import Tutorial from "views/Tutorial";
import Watch from "views/Watch";
import About from "views/About";

const views = {
  Home,
  Match,
  Experiments,
  Details,
  Material,
  Quiz,
  Code,
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
    path: routesPath.apprenticeship.details,
    component: views.Details,
    pageTitle: "Detalhes",
  },
  {
    path: routesPath.study.material,
    component: views.Material,
    pageTitle: "Material",
  },
  {
    path: routesPath.study.quiz,
    component: views.Quiz,
    pageTitle: "Quiz",
  },
  {
    path: routesPath.study.code,
    component: views.Code,
    pageTitle: "Code",
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
