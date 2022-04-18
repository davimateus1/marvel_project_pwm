import { Container, Image, Title } from "./styles";
import IronMan from "../../assets/img/IronMan.png";

export const Homepage = () => {
  return (
    <Container>
      <Title>
        Bem vindo ao universo <span>MARVEL</span>
      </Title>
      <Image src={IronMan} alt="IronMan" />
    </Container>
  );
};
