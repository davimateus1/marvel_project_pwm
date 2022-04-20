import {
  Container,
  Divider,
  Links,
  Name,
  Person,
  PersonsContainer,
} from "./styles";
import { Fade } from "react-reveal";
import { Persons } from "../../assets/data";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <Container>
      <PersonsContainer>
        {Persons.map((person, index) => (
          <Fade key={person.name}>
            <Person key={person.name}>
              <Name>{person.name}</Name>
              <Links>
                <a href={person.instagram} target="_blank" rel="noreferrer">
                  <AiFillInstagram />
                </a>
                <a href={person.linkedin} target="_blank" rel="noreferrer">
                  <AiFillLinkedin />
                </a>
                <a href={person.github} target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
              </Links>
            </Person>
            {index < 2 ? <Divider /> : ""}
          </Fade>
        ))}
      </PersonsContainer>
    </Container>
  );
};
