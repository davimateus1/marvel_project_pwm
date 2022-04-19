import Asgard from "../../assets/img/Asgard.webp";
import styled from "styled-components";

export const Container = styled.div`
  font-family: Bangers, sans-serif;
  background-image: url(${Asgard});
  background-size: cover;
  flex-direction: column;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardsSpace = styled.div`
  display: flex;
  max-width: 90%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const TitlePage = styled.h1`
  -webkit-text-stroke-width: 0.03px;
  -webkit-text-stroke-color: white;
  font-size: 5rem;
  margin-top: 0;
`;
