import {
  Container,
  Divider,
  Links,
  Name,
  Person,
  PersonsContainer,
} from "./styles";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export const Footer = () => {
  return (
    <Container>
      <PersonsContainer>
        <Person>
          <Name>Ronny Lima</Name>
          <Links>
            <p><AiFillInstagram/></p>
            <p><AiFillLinkedin/></p>
            <p><AiFillGithub /></p>
          </Links>
        </Person>
        <Divider />
        <Person>
          <Name>Davi Mateus</Name>
          <Links>
            <p><AiFillInstagram/></p>
            <p><AiFillLinkedin/></p>
            <p><AiFillGithub /></p>
          </Links>
        </Person>
        <Divider />
        <Person>
          <Name>João Vitor M.</Name>
          <Links>
            <p><AiFillInstagram/></p>
            <p><AiFillLinkedin/></p>
            <p><AiFillGithub /></p>
          </Links>
        </Person>
      </PersonsContainer>
    </Container>
  );
};
