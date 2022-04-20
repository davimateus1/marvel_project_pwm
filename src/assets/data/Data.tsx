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
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "João Vitor M.",
    linkedin: "",
    github: "",
    instagram: "",
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
    title: "Filmes",
    color: "rgba(236, 29, 36, 0.7)",
    link: "/options",
  },
  {
    image: Creators,
    title: "Criadores",
    color: "rgba(30, 30, 30, 0.7)",
    link: "/options",
  },
  {
    image: Comics,
    title: "Quadrinhos",
    color: "rgba(255, 255, 0, 0.7)",
    link: "/options",
  },
  {
    image: Events,
    title: "Eventos",
    color: "rgba(253, 122, 34, 0.7)",
    link: "/options",
  },
  {
    image: Series,
    title: "Séries",
    color: "rgba(255, 255, 255, 0.7)",
    link: "/options",
  },
];
