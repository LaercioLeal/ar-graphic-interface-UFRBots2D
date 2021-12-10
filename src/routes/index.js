import { lazy } from "react";

// import { LayoutPublic } from 'layouts'

const views = {
  Home: lazy(() => import("views/Home")),
};

const routes = [
  {
    path: "/inicio",
    component: views.Home,
    pageTitle: "Início",
  },
];

export default routes;
