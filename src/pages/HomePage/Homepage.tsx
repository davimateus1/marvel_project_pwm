import { Container, Image, TextContainer, Title } from "./styles";
import IronMan from "../../assets/img/IronMan.png";
import Tilt from "react-tilt";
import { Zoom } from "react-reveal";
import { Button } from "../../components/Button";
import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marvel: Inicio";
  });

  return (
    <Container>
      <TextContainer>
        <Tilt options={{ max: 8, speed: 800, scale: 1.03 }}>
          <Zoom top>
            <Title>
              Bem vindo ao universo <span>MARVEL</span>
            </Title>
          </Zoom>
        </Tilt>
        <Button titleText="Explore o mundo marvel" redirect="/options" />
      </TextContainer>
      <Image src={IronMan} alt="IronMan" />
    </Container>
  );
};

