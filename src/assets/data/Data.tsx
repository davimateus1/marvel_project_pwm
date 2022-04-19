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
  },
  {
    image: Stories,
    title: "Filmes",
    color: "rgba(236, 29, 36, 0.7)",
  },
  {
    image: Creators,
    title: "Criadores",
    color: "rgba(30, 30, 30, 0.7)",
  },
  {
    image: Comics,
    title: "Quadrinhos",
    color: "rgba(255, 255, 0, 0.7)",
  },
  {
    image: Events,
    title: "Eventos",
    color: "rgba(253, 122, 34, 0.7)",
  },
  {
    image: Series,
    title: "Séries",
    color: "rgba(255, 255, 255, 0.7)",
  },
];
