import { CardsOP } from "../../components/CardsOP";
import { Fade } from "react-reveal";
import { CardsSpace, Container, TitlePage } from "./styles";

export const OptionsPage = () => {
  return (
    <Container>
      <Fade top>
        <TitlePage>Escolha o seu destino</TitlePage>
      </Fade>
      <CardsSpace>
        <CardsOP />
      </CardsSpace>
    </Container>
  );
};
