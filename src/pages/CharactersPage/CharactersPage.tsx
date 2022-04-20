import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { CharactersRequest } from "../../services";
import { CharacterContainer, Container, InfosContainer, Text } from "./styles";
import Tilt from "react-tilt";
import { Fade } from "react-reveal";

import { Loading } from "../../components/Loading";

export const CharactersPage = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCharacters = async () => {
    const characters = await CharactersRequest();

    if (characters) {
      console.log(characters);
      setCharactersData(characters);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Marvel: Personagens";
    getCharacters();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {loading ? (
          <Loading type="spinningBubbles" color="#ec1d24" />
        ) : (
          charactersData.map((character: any, index: number) => (
            <Fade left key={index}>
              <Tilt options={{ max: 8, speed: 800, scale: 1.01 }}>
                <CharacterContainer
                  image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                >
                  <Text>{character.name}</Text>
                  <InfosContainer>
                    <p>
                      Séries:{" "}
                      {character.series.available === 0
                        ? "confidencial"
                        : character.series.available}
                    </p>
                    <p>
                      Histórias:{" "}
                      {character.stories.available === 0
                        ? "confidencial"
                        : character.stories.available}
                    </p>
                    <p>
                      Eventos:{" "}
                      {character.events.available === 0
                        ? "confidencial"
                        : character.events.available}
                    </p>
                    <p>
                      Quadrinhos:{" "}
                      {character.comics.available === 0
                        ? "confidencial"
                        : character.comics.available}
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
