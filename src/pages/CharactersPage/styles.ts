import styled from "styled-components";

type CharacterContainerProps = {
  image: string;
};

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 5vh;
  background-color: rgba(90, 180, 7, 0.8);

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    border-radius: 20px;
    padding: 0.5rem;
    width: 15rem;
  }

  svg {
    color: #ec1d24;
    font-size: 20px;
    cursor: pointer;
  }

  input {
    font-family: Bangers, sans-serif;
    background-color: #ec1d24;
    border: none;
    color: black;
    padding: 0.4rem;
    border-radius: 10px;
    margin: 0 10px 0 10px;
    transition: all 0.5s;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: black;
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    height: auto;
    min-height: 7vh;
    label {
      margin: 0.5rem;
    }
  }
`;

export const Container = styled.div`
  font-family: Bangers, sans-serif;
  width: 100vw;
  height: 73vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(90, 180, 7, 1);
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
  background-color: rgba(90, 180, 7, 0.5);
`;

export const InfosContainer = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 0.5rem;
  width: 75%;
  top: 8.5rem;
  border: 1px solid black;
  background-color: rgba(90, 180, 7, 0.55);
  p {
    line-height: 0.1px;
    color: black;
    font-size: 1.15rem;
  }
`;
