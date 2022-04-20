import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { CharactersRequest } from "../../services";
import { CharacterContainer, Container, Text } from "./styles";
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
    getCharacters();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {loading ? (
          <Loading type="spinningBubbles" color="#ec1d24" />
        ) : (
          charactersData.map((character: any) => (
            <Fade left>
              <Tilt options={{ max: 8, speed: 800, scale: 1.01 }}>
                <CharacterContainer
                  key={character?.id}
                  image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                >
                  <Text>{character.name}</Text>
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
