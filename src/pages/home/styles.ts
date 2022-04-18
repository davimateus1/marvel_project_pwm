import StarkTower from "../../assets/img/StarkTower.jpg";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  font-family: Marvel, sans-serif;
  background-image: url(${StarkTower});
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h1`
  color: #ec1d24;
  padding: 0.5rem;
  border-radius: 20px;
  font-weight: bold;
  background-color: #060d15;
  width: 25rem;
  font-size: 5rem;
  text-align: center;
  span {
    font-size: 4rem;
    font-weight: 900;
    background-color: #ec1d24;
    color: white;
    padding: 0rem;
  }
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
