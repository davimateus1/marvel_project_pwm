import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { ComicsRequest } from "../../services";
import { CharacterContainer, Container, InfosContainer, Text } from "./styles";
import Tilt from "react-tilt";
import { Fade } from "react-reveal";

import { Loading } from "../../components/Loading";

export const ComicsPage = () => {
  const [comicsData, setComicsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getComics = async () => {
    const comics = await ComicsRequest();

    if (comics) {
      setComicsData(comics);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Marvel: Quadrinhos";
    getComics();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {loading ? (
          <Loading type="spinningBubbles" color="black" />
        ) : (
          comicsData.map((comic: any, index: number): any => (
            <Fade left key={index}>
              <Tilt options={{ max: 8, speed: 800, scale: 1.01 }}>
                <CharacterContainer
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                >
                  <Text>{comic.title}</Text>
                  <InfosContainer>
                    <p>
                      Histórias:{" "}
                      {comic.stories.available === 0
                        ? "confidencial"
                        : comic.stories.available}
                    </p>
                    <p>
                      Variantes:{" "}
                      {comic.variants.length === 0
                        ? "confidencial"
                        : comic.variants.length}
                    </p>
                    <p>
                      Quantidade de Páginas:{" "}
                      {comic.pageCount === 0 ? "confidencial" : comic.pageCount}
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
