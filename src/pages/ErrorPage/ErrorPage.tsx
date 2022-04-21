import { Container, Image, TextContainer, Title } from "./styles";
import Manopla from "../../assets/img/Manopla.png";
import Tilt from "react-tilt";
import { Zoom } from "react-reveal";
import { Button } from "../../components/Button";
import { useEffect } from "react";

export const ErrorPage = () => {
  useEffect(() => {
    document.title = "Marvel: Inicio";
  });
  return (
    <Container>
      <Image src={Manopla} alt="IronMan" />
      <TextContainer>
        <Tilt options={{ max: 8, speed: 800, scale: 1.03 }}>
          <Zoom top>
            <Title>
              Erro 404: Página não encontrada
            </Title>
          </Zoom>
        </Tilt>
        <Button titleText="Voltar ao início" redirect="/" />
      </TextContainer>
    </Container>
  );
};
