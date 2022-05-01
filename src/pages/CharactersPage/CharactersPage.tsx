import { useCallback, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { CharactersRequest, route1 } from "../../services";
import {
  CharacterContainer,
  Container,
  InfosContainer,
  InputContainer,
  Text,
} from "./styles";
import Tilt from "react-tilt";
import { Fade, Zoom } from "react-reveal";

import { Loading } from "../../components/Loading";
import axios from "axios";
import { Button } from "../../components/ButtonMore/styles";
import { FaSearch, FaRobot } from "react-icons/fa";

type Character = {
  image: string;
  name: string;
  series: { available: number };
  stories: { available: number };
  events: { available: number };
  comics: { available: number };
};

export const CharactersPage = () => {
  const [charactersData, setCharactersData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marvel: Personagens";
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const characters = await CharactersRequest();

    if (characters) {
      setCharactersData(characters);
      setLoading(false);
    }
  };

  const moreOptions = useCallback(async () => {
    try {
      setLoadingButton(true);
      const offset = charactersData.length;
      const response = await axios.get(route1, {
        params: {
          offset,
        },
      });

      setCharactersData([...charactersData, ...response.data.data.results]);
      setLoadingButton(false);
    } catch (err) {
      console.log("erro", err);
    }
  }, [charactersData]);

  const searchCharacter = useCallback(async () => {
    try {
      setLoadingSearch(true);
      const response = await axios.get(route1, {
        params: {
          name: search,
        },
      });
      setCharactersData([...response.data.data.results, ...charactersData]);
      setLoadingSearch(false);
      setSearch("");
    } catch (err) {
      console.log(err);
    }
  }, [search, charactersData]);

  const onClick = () => {
    if (search.trim() === "") {
      return setError(true);
    } else {
      setError(false);
      searchCharacter();
    }
  };

  return (
    <>
      <Navbar />
      <InputContainer>
        {loading ? (
          <Loading
            type="spinningBubbles"
            color="black"
            width={30}
            height={30}
          />
        ) : (
          <Zoom>
            <label>
              <FaRobot />
              <input
                type="search"
                placeholder={error ? "Preencha o campo!" : "Nome do personagem"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {loadingSearch ? (
                <Loading
                  type="spinningBubbles"
                  color="white"
                  width={20}
                  height={20}
                />
              ) : (
                <FaSearch onClick={onClick} />
              )}
            </label>
          </Zoom>
        )}
      </InputContainer>
      <Container>
        {loading ? (
          <Loading type="spinningBubbles" color="black" />
        ) : (
          charactersData.map((character: any, index: number): any => (
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
