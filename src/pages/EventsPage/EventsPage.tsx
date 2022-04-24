import { useCallback, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { EventsRequest, route4 } from "../../services";
import { CharacterContainer, Container, InfosContainer, Text } from "./styles";
import Tilt from "react-tilt";
import { Fade } from "react-reveal";

import { Loading } from "../../components/Loading";
import { Button } from "../../components/ButtonMore/styles";
import axios from "axios";

type Event = {
  image: string;
  title: string;
  characters: { available: number };
  creators: { available: number };
  series: { available: number };
  stories: { available: number };
};

export const EventsPage = () => {
  const [eventsData, setEventsData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  const getEvents = async () => {
    const events = await EventsRequest();

    if (events) {
      setEventsData(events);
      setLoading(false);
    }
  };

  const moreOptions = useCallback(async () => {
    try {
      setLoadingButton(true);
      const offset = eventsData.length;
      const response = await axios.get(route4, {
        params: {
          offset,
        },
      });

      setEventsData([...eventsData, ...response.data.data.results]);
      setLoadingButton(false);
    } catch (err) {
      console.log(err);
    }
  }, [eventsData]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marvel: Eventos";
    getEvents();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {loading ? (
          <Loading type="spinningBubbles" color="black" />
        ) : (
          eventsData.map((event: any, index: number): any => (
            <Fade left key={index}>
              <Tilt options={{ max: 8, speed: 800, scale: 1.01 }}>
                <CharacterContainer
                  image={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                >
                  <Text>{event.title}</Text>
                  <InfosContainer>
                    <p>
                      Personagens:{" "}
                      {event.characters.available === 0
                        ? "Em andamento"
                        : event.characters.available}
                    </p>
                    <p>Quantidade de criadores: {event.creators.available}</p>
                    <p>
                      Séries:{" "}
                      {event.series.available === 0
                        ? "confidencial"
                        : event.series.available}
                    </p>
                    <p>
                      Histórias:{" "}
                      {event.stories.available === 0
                        ? "confidencial"
                        : event.stories.available}
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
