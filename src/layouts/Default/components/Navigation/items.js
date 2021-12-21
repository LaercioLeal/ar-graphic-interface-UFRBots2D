import routes from "constants/routes";

const items = [
  {
    path: routes.home,
    label: "Início",
  },
  {
    path: routes.match,
    label: "Partida",
  },
  {
    path: routes.apprenticeship.experiments,
    label: "Experimentos",
  },
  {
    path: routes.study.material,
    label: "Material de Apoio",
  },
  {
    path: routes.tutorial,
    label: "Tutorial",
  },
  {
    path: routes.watch,
    label: "Assistir",
  },
  {
    path: routes.about,
    label: "Sobre",
  },
];

export default items;
