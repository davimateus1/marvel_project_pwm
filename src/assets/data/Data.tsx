import Series from "../img/Series.png";
import Characters from "../img/Characters.png";
import Comics from "../img/Comics.png";
import Creators from "../img/Creators.png";
import Events from "../img/Events.png";
import Stories from "../img/Stories.png";

type PersonsProps = {
  name: string;
  linkedin: string;
  github: string;
  instagram: string;
};

type CardsOptionsProps = {
  image: string;
  title: string;
  color: string;
  link: string;
};

export const Persons: PersonsProps[] = [
  {
    name: "Davi Mateus",
    linkedin: "https://www.linkedin.com/in/davimateusg/",
    github: "https://github.com/davimateus1",
    instagram: "https://www.instagram.com/davimateus1/",
  },
  {
    name: "Ronny Lima",
    linkedin: "https://www.linkedin.com/in/ronny-lima-ribeiro-da-silva/",
    github: "https://github.com/ronnylrsd",
    instagram: "https://www.instagram.com/ronny.ribeiro1604/",
  },
  {
    name: "João Vitor M.",
    linkedin: "https://www.linkedin.com/in/joão-vitor-machado-b23a7820b/",
    github: "https://github.com/joovitor12",
    instagram: "https://www.instagram.com/jv__machado/",
  },
];

export const CardsOptions: CardsOptionsProps[] = [
  {
    image: Characters,
    title: "Personagens",
    color: "rgba(90, 180, 7, 0.7)",
    link: "/characters",
  },
  {
    image: Stories,
    title: "Histórias",
    color: "rgba(236, 29, 36, 0.7)",
    link: "/stories",
  },
  {
    image: Creators,
    title: "Criadores",
    color: "rgba(1, 106, 251, 0.7)",
    link: "/creators",
  },
  {
    image: Comics,
    title: "Quadrinhos",
    color: "rgba(255, 255, 0, 0.7)",
    link: "/comics",
  },
  {
    image: Events,
    title: "Eventos",
    color: "rgba(253, 122, 34, 0.7)",
    link: "/events",
  },
  {
    image: Series,
    title: "Séries",
    color: "rgba(255, 255, 255, 0.7)",
    link: "/series",
  },
];
