import { Container, Image, TextContainer, Title } from "./styles";
import IronMan from "../../assets/img/IronMan.png";
import Typing from "react-typing-animation";
import Tilt from "react-tilt";
import { Zoom } from "react-reveal";
import { Button } from "../../components/Button";

export const Homepage = () => {
  return (
    <Container>
      <TextContainer>
        <Tilt options={{ max: 8, speed: 800, scale: 1.03 }}>
          <Zoom>
            <Typing speed={200}>
              <Title>
                Bem vindo ao universo <span>MARVEL</span>
              </Title>
            </Typing>
            <Typing.Delay ms={1000} />
          </Zoom>
        </Tilt>
          <Button titleText="Explore o mundo marvel" redirect="/options"/>
      </TextContainer>
      <Image src={IronMan} alt="IronMan" />
    </Container>
  );
};
