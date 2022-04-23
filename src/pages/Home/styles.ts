import StarkTower from "../../assets/img/StarkTower.webp";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  font-family: Bangers, sans-serif;
  background-image: url(${StarkTower});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: none;
    background-color: #060d15;
  }
`;

export const Title = styled.h1`
  cursor: default;
  color: #ec1d24;
  padding: 0.5rem;
  border-radius: 20px;
  font-weight: bold;
  background-color: rgba(6, 13, 21, 0.6);
  border: 1px solid #060d15;
  width: 25rem;
  min-height: 17rem;
  height: auto;
  font-size: 5rem;
  text-align: center;
  span {
    font-size: 4rem;
    font-weight: 900;
    background-color: #ec1d24;
    color: white;
    padding: 0.8rem;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 95%;
    font-size: 3rem;
    color: white;
    justify-content: center;
    align-items: center;
    background-color: rgba(1, 1, 1, 0.5);
    border: 1px solid #060d15;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    span {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: white;
      font-weight: 900;
      background-color: transparent;
      color: red;
      padding: 0.8rem;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const effect = keyframes`
  0%   {top:20px; bottom:40px};
  25%  {top:0px; bottom:20px};
  50%  {top:40px; bottom:0px};
  75%  {top:0px; bottom:40px};
  100% {top:20px; bottom:0px};
`;

export const Image = styled.img`
  position: relative;
  display: flex;
  width: 35%;
  filter: drop-shadow(5px 5px 5px #ec1d24);
  animation: ${effect} 5s linear infinite;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
