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
  align-items: center;

  @media (max-width: 1024px) {
    height: auto;
    background-image: none;
    background-color: #060d15;
  }
`;

export const CardsSpace = styled.div`
  display: flex;
  max-width: 90%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const TitlePage = styled.h1`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: black;
  font-size: 4.5rem;
  margin-top: 5rem;

  @media (max-width: 1024px) {
    margin-top: 10px;
    text-align: center;
  }
`;
