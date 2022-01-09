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
    title: "Jogue uma partida ;)",
    icon: goalIcon,
    link: routes.match,
  },
  {
    id: "2",
    title: "Gerencie seus experimentos",
    icon: experimentsIcon,
    link: routes.apprenticeship.experiments,
  },
  {
    id: "3",
    title: "Tá querendo estudar um pouco? Consulte uns materiais aqui",
    icon: studentIcon,
    link: routes.study.material,
  },
  {
    id: "4",
    title:
      "Quer aprender melhor como usar a interface? aqui temos alguns tutoriais",
    icon: tutorialIcon,
    link: routes.tutorial,
  },
  {
    id: "5",
    title: "Venha rever os grandes momentos dos jogos já realizados por aqui",
    icon: watchdIcon,
    link: routes.watch,
  },
  {
    id: "6",
    title: "Conheça um pouco do projeto",
    icon: aboutIcon,
    link: routes.about,
  },
];

export default items;
