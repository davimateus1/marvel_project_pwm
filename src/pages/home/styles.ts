import StarkTower from "../../assets/img/StarkTower.jpg";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  font-family: Bangers, sans-serif;
  background-image: url(${StarkTower});
  background-size: cover;
  background-repeat: no-repeat;
  height: 75vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h1`
  color: #ec1d24;
  padding: 0.5rem;
  border-radius: 20px;
  font-weight: bold;
  background-color: rgba(6, 13, 21, 0.6);
  border: 1px solid #060D15;
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
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const effect = keyframes`
  0%   {top:10px; bottom:20px};
  25%  {top:0px; bottom:10px};
  50%  {top:20px; bottom:0px};
  75%  {top:0px; bottom:20px};
  100% {top:10px; bottom:0px};
`;

export const Image = styled.img`
  position: relative;
  display: flex;
  width: 30%;
  filter: drop-shadow(5px 5px 5px #ec1d24);
  animation: ${effect} 7s linear infinite;
`;
