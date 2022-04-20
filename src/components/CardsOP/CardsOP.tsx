import { CardsOptions } from "../../assets/data";
import { CardContainer, Text } from "./styles";
import Tilt from "react-tilt";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export const CardsOP = () => {
  return (
    <>
      {CardsOptions.map((card) => (
        <Fade top>
          <Tilt options={{ max: 8, speed: 800, scale: 1.01 }}>
            <Link to={card.link} style={{ textDecoration: "none" }}>
              <CardContainer
                image={card.image}
                key={card.title}
                color={card.color}
              >
                <Text color={card.color}>{card.title}</Text>
              </CardContainer>
            </Link>
          </Tilt>
        </Fade>
      ))}
    </>
  );
};
