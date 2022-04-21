import Tita from "../../assets/img/Tita.webp";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  font-family: Bangers, sans-serif;
  background-image: url(${Tita});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 825px) {
    flex-direction: column;
    height: 100vh;
    background-color: #060d15;
    background-image: none;
  }
`;

export const Title = styled.h1`
  cursor: default;
  color: black;
  -webkit-text-stroke-width: 0.03px;
  -webkit-text-stroke-color: white;
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

  @media (max-width: 825px) {
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid #060d15;
    width: 95%;
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
  width: 20%;
  border-radius: 40%;
  filter: drop-shadow(5px 5px 5px black);
  animation: ${effect} 5s linear infinite;
  @media (max-width: 825px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
