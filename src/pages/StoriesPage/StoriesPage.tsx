import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { StoriesRequest } from "../../services";
import { CharacterContainer, Container, InfosContainer, Text } from "./styles";
import Tilt from "react-tilt";
import { Fade } from "react-reveal";

import { Loading } from "../../components/Loading";

export const StoriesPage = () => {
  const [storiesData, setStoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStories = async () => {
    const stories = await StoriesRequest();

    if (stories) {
      setStoriesData(stories);
      setLoading(false);
    }
  };

  useEffect(() => {
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
          storiesData.map((storie: any, index: number): any => (
            <Fade left key={index}>
              <Tilt options={{ max: 8, speed: 800, scale: 1.01 }}>
                <CharacterContainer>
                  <Text>{storie.title}</Text>
                  <InfosContainer>
                    <p>Tipo: {storie.type}</p>
                    <p>
                      Quadrinhos: {" "}
                      {storie.comics.available === 0
                        ? "confidencial"
                        : storie.comics.available}
                    </p>
                    <p>
                      Criadores: {" "}
                      {storie.creators.available === 0
                        ? "confidencial"
                        : storie.creators.available}
                    </p>
                    <p>
                      Publicada originalmente por: {" "}
                      {storie.comics.available === 0
                        ? "confidencial"
                        : storie.originalIssue.name}
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
