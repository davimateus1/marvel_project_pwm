import { useCallback, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { CreatorsRequest, route5 } from "../../services";
import { CharacterContainer, Container, InfosContainer, Text } from "./styles";
import Tilt from "react-tilt";
import { Fade } from "react-reveal";

import { Loading } from "../../components/Loading";
import axios from "axios";
import { Button } from "../../components/ButtonMore/styles";

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
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marvel: Criadores";
    getCreators();
  }, []);

  const getCreators = async () => {
    const creators = await CreatorsRequest();

    if (creators) {
      setCreatorsData(creators);
      setLoading(false);
    }
  };

  const moreOptions = useCallback(async () => {
    try {
      setLoadingButton(true);
      const offset = creatorsData.length;
      const response = await axios.get(route5, {
        params: {
          offset,
        },
      });

      setCreatorsData([...creatorsData, ...response.data.data.results]);
      setLoadingButton(false);
    } catch (err) {
      console.log(err);
    }
  }, [creatorsData]);

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
        {loading ? (
          ""
        ) : (
          <Button onClick={moreOptions}>
            {loadingButton ? (
              <Loading
                type="spinningBubbles"
                color="white"
                width={30}
                height={30}
              />
            ) : (
              "Ver Mais"
            )}
          </Button>
        )}
      </Container>
      <Footer />
    </>
  );
};
