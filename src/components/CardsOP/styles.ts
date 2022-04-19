import styled from "styled-components";

type CardContainerProps = {
  image: string;
  color: string;
};

type TextProps = {
  color: string;
};

export const CardContainer = styled.div<CardContainerProps>`
  cursor: pointer;
  width: 13rem;
  height: 17rem;
  display: flex;
  background-color: red;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : "")};
  border: 1px solid rgba(255, 255, 255, 0.5);
  flex-direction: column;
  -webkit-box-shadow: inset 1px -50px 40px 5px #000000;
  box-shadow: inset 1px -50px 40px 5px #000000;
  background-image: url(${(props) => (props.image ? props.image : "")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 1rem;
`;

export const Text = styled.h1<TextProps>`
  -webkit-text-stroke-width: 0.03px;
  -webkit-text-stroke-color: white;
  position: relative;
  border-radius: 10px;
  padding: 0.5rem;
  top: 6rem;
  font-size: 2.2rem;
  color: ${(props) => (props.color ? props.color : "")};
`;
