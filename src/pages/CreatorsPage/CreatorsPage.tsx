import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { CreatorsRequest } from "../../services";
import { CharacterContainer, Container, InfosContainer, Text } from "./styles";
import Tilt from "react-tilt";
import { Fade } from "react-reveal";

import { Loading } from "../../components/Loading";

type Creator = {
  fullName: string;
  comics: { available: number };
  events: { available: number };
  series: { available: number };
  stories: { available: number };
};

export const CreatorsPage = () => {
  const [creatorsData, setCreatorsData] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(true);

  const getCreators = async () => {
    const creators = await CreatorsRequest();

    if (creators) {
      setCreatorsData(creators);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marvel: Criadores";
    getCreators();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {loading ? (
          <Loading type="spinningBubbles" color="black" />
        ) : (
          creatorsData.map((creator: any, index: number) => (
            <Fade left key={index}>
              <Tilt options={{ max: 8, speed: 800, scale: 1.01 }}>
                <CharacterContainer>
                  <Text>{creator.fullName}</Text>
                  <InfosContainer>
                    <p>
                      Quantidade de quadrinhos criados:{" "}
                      {creator.comics.available}
                    </p>
                    <p>
                      Quantidade de eventos criados: {creator.events.available}
                    </p>
                    <p>
                      Quantidade de séries criados: {creator.series.available}
                    </p>
                    <p>
                      Quantidade de historias criados:{" "}
                      {creator.stories.available}
                    </p>
                  </InfosContainer>
                </CharacterContainer>
              </Tilt>
            </Fade>
          ))
        )}
      </Container>
      <Footer />
    </>
  );
};
