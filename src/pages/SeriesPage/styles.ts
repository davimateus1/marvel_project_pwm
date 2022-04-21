import styled from "styled-components";

type CharacterContainerProps = {
  image: string;
};

export const Container = styled.div`
  font-family: Bangers, sans-serif;
  width: 100vw;
  height: 78vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(136, 136, 148, 1);
  -webkit-box-shadow: inset -1px 0px 16px 14px rgba(0, 0, 0, 0.57);
  box-shadow: inset -1px 0px 16px 14px rgba(0, 0, 0, 0.57);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #060d15;
    border-radius: 10px;
  }
`;

export const CharacterContainer = styled.div<CharacterContainerProps>`
  border-radius: 20px;
  border: 1px solid black;
  margin: 1.3rem;
  background-image: url(${(props) => (props.image ? props.image : "")});
  -webkit-box-shadow: inset 1px -50px 40px 5px #000000;
  box-shadow: inset 1px -50px 40px 5px #000000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 20rem;
  height: 20rem;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Text = styled.h1`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  position: relative;
  border-radius: 10px;
  padding: 0.5rem;
  top: 0;
  width: 80%;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: rgba(136, 136, 148, 0.7);
`;

export const InfosContainer = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 0.5rem;
  width: 75%;
  top: 8.5rem;
  border: 1px solid black;
  background-color: rgba(136, 136, 148, 0.9);
  p {
    line-height: 0.1px;
    color: black;
    font-size: 1.15rem;
  }
`;
