import routes from "constants/routes";

const items = [
  {
    path: routes.home,
    base: routes.home,
    label: "Início",
  },
  {
    path: routes.match,
    base: routes.match,
    label: "Partida",
  },
  {
    path: routes.apprenticeship.experiments,
    base: routes.apprenticeship.experiments.replace("/experiments", ""),
    label: "Experimentos",
  },
  {
    path: routes.study.material,
    base: routes.study.material.replace("/material", ""),
    label: "Material",
  },
  {
    path: routes.tutorial,
    base: routes.tutorial,
    label: "Tutorial",
  },
  {
    path: routes.watch,
    base: routes.watch,
    label: "Assistir",
  },
  {
    path: routes.about,
    base: routes.about,
    label: "Sobre",
  },
];

export default items;
