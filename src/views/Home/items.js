import routes from "constants/routes";

import goalIcon from "assets/icon/goal.png";
import aboutIcon from "assets/icon/about.png";
import studentIcon from "assets/icon/student.png";
import tutorialIcon from "assets/icon/tutorial.png";
import experimentsIcon from "assets/icon/experiments.png";
import watchdIcon from "assets/icon/watch.png";

const items = [
  {
    id: "1",
    title: "Jogue algumas partidas ;)",
    icon: goalIcon,
    link: routes.match,
    page: "match",
  },
  {
    id: "2",
    title: "Gerencie seus experimentos",
    icon: experimentsIcon,
    link: routes.apprenticeship.experiments,
    page: "experiments",
  },
  {
    id: "3",
    title: "Consulte alguns materiais aqui",
    icon: studentIcon,
    link: routes.study.material,
    page: "material",
  },
  {
    id: "4",
    title: "Dúvida de como usar? aqui temos alguns tutoriais",
    icon: tutorialIcon,
    link: routes.tutorial,
    page: "tutorial",
  },
  {
    id: "5",
    title: "Reveja jogos já realizados por aqui",
    icon: watchdIcon,
    link: routes.watch,
    page: "watch",
  },
  {
    id: "6",
    title: "Conheça um pouco do projeto",
    icon: aboutIcon,
    link: routes.about,
    page: "about",
  },
];

export default items;
