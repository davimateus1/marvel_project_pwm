import { CardsOP } from "../../components/CardsOP";
import { Fade } from "react-reveal";
import { CardsSpace, Container, TitlePage } from "./styles";
import { useEffect } from "react";

export const OptionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marvel: Destinos";
  });

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
