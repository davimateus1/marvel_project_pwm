import { Container, Image, TextContainer, Title } from "./styles";
import IronMan from "../../assets/img/IronMan.png";
import Typing from "react-typing-animation";
import Tilt from "react-tilt";
import { Zoom } from "react-reveal";

export const Homepage = () => {
  return (
    <Container>
      <TextContainer>
        <Tilt options={{ max: 8, speed: 700, scale: 1.03 }}>
          <Zoom>
            <Typing speed={200}>
              <Title>
                Bem vindo ao universo <span>MARVEL</span>
              </Title>
            </Typing>
            <Typing.Delay ms={1000} />
          </Zoom>
        </Tilt>
        <Typing speed={350}>
          <button>Comece a explorar!</button>
        </Typing>
      </TextContainer>
      <Image src={IronMan} alt="IronMan" />
    </Container>
  );
};
