import { useCallback, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { route3, SeriesRequest } from "../../services";
import { CharacterContainer, Container, InfosContainer, Text } from "./styles";
import Tilt from "react-tilt";
import { Fade } from "react-reveal";

import { Loading } from "../../components/Loading";
import { Button } from "../../components/ButtonMore/styles";
import axios from "axios";

type Serie = {
  image: string;
  title: string;
  endYear: number;
  creators: { available: number };
  type: string;
};

export const SeriesPage = () => {
  const [seriesData, setSeriesData] = useState<Serie[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  const getSeries = async () => {
    const series = await SeriesRequest();

    if (series) {
      setSeriesData(series);
      setLoading(false);
    }
  };

  const moreOptions = useCallback(async () => {
    try {
      setLoadingButton(true);
      const offset = seriesData.length;
      const response = await axios.get(route3, {
        params: {
          offset,
        },
      });

      setSeriesData([...seriesData, ...response.data.data.results]);
      setLoadingButton(false);
    } catch (err) {
      console.log(err);
    }
  }, [seriesData]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marvel: Séries";
    getSeries();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {loading ? (
          <Loading type="spinningBubbles" color="black" />
        ) : (
          seriesData.map((serie: any, index: number): any => (
            <Fade left key={index}>
              <Tilt options={{ max: 8, speed: 800, scale: 1.01 }}>
                <CharacterContainer
                  image={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                >
                  <Text>{serie.title}</Text>
                  <InfosContainer>
                    <p>
                      Ultima publicação:{" "}
                      {serie.endYear === 2099 ? "Em andamento" : serie.endYear}
                    </p>
                    <p>Quantidade de criadores: {serie.creators.available}</p>
                    <p>Tipo: {!serie.type ? "confidencial" : serie.type}</p>
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
