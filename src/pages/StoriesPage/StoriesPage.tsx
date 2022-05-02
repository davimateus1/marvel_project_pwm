import { useCallback, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { route6, StoriesRequest } from "../../services";
import { CharacterContainer, Container, InfosContainer, Text } from "./styles";
import Tilt from "react-tilt";
import { Fade } from "react-reveal";

import { Loading } from "../../components/Loading";
import { Button } from "../../components/ButtonMore/styles";
import axios from "axios";

type Story = {
  title: string;
  type: string;
  comics: { available: number };
  creators: { available: number };
  originalIssue: { name: string };
};

export const StoriesPage = () => {
  const [storiesData, setStoriesData] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marvel: Histórias";
    getStories();
  }, []);
  
  const getStories = async () => {
    const stories = await StoriesRequest();

    if (stories) {
      setStoriesData(stories);
      setLoading(false);
    }
  };

  const moreOptions = useCallback(async () => {
    try {
      setLoadingButton(true);
      const offset = storiesData.length;
      const response = await axios.get(route6, {
        params: {
          offset,
        },
      });

      setStoriesData([...storiesData, ...response.data.data.results]);
      setLoadingButton(false);
    } catch (err) {
      console.log(err);
    }
  }, [storiesData]);

  return (
    <>
      <Navbar />
      <Container>
        {loading ? (
          <Loading type="spinningBubbles" color="black" />
        ) : (
          storiesData.map((story, index) => (
            <Fade left key={index}>
              <Tilt options={{ max: 8, speed: 800, scale: 1.01 }}>
                <CharacterContainer>
                  <Text>{story.title}</Text>
                  <InfosContainer>
                    <p>Tipo: {story.type}</p>
                    <p>
                      Quadrinhos:{" "}
                      {story.comics.available === 0
                        ? "confidencial"
                        : story.comics.available}
                    </p>
                    <p>
                      Criadores:{" "}
                      {story.creators.available === 0
                        ? "confidencial"
                        : story.creators.available}
                    </p>
                    <p>
                      Publicada originalmente por:{" "}
                      {!story.originalIssue.name
                        ? "confidencial"
                        : story.originalIssue.name}
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
