import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { StoriesRequest } from "../../services";
import { CharacterContainer, Container, InfosContainer, Text } from "./styles";
import Tilt from "react-tilt";
import { Fade } from "react-reveal";

import { Loading } from "../../components/Loading";

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

  const getStories = async () => {
    const stories = await StoriesRequest();

    if (stories) {
      console.log(stories);
      setStoriesData(stories);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marvel: Histórias";
    getStories();
  }, []);

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
      </Container>
      <Footer />
    </>
  );
};
