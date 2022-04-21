import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { SeriesRequest } from "../../services";
import { CharacterContainer, Container, InfosContainer, Text } from "./styles";
import Tilt from "react-tilt";
import { Fade } from "react-reveal";

import { Loading } from "../../components/Loading";

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

  const getSeries = async () => {
    const series = await SeriesRequest();

    if (series) {
      setSeriesData(series);
      setLoading(false);
    }
  };

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
      </Container>
      <Footer />
    </>
  );
};
