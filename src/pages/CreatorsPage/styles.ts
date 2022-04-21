import styled from "styled-components";

export const Container = styled.div`
  font-family: Bangers, sans-serif;
  width: 100vw;
  height: 78vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(1, 106, 251, 1);
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

export const CharacterContainer = styled.div`
  border-radius: 20px;
  border: 1px solid black;
  margin: 1.3rem;
  background-color: rgba(3, 160, 255, 0.7);
  border-radius: 1px solid black;
  -webkit-box-shadow: inset 0px 0px 34px 9px #000000;
  box-shadow: inset 0px 0px 34px 9px #000000;
  width: 20rem;
  height: 20rem;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Text = styled.h1`
  -webkit-text-stroke-width: 0.03px;
  -webkit-text-stroke-color: white;
  position: relative;
  border-radius: 10px;
  padding: 0.5rem;
  top: 0;
  width: 80%;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: rgba(3, 160, 255, 0.5);
  border: 1px solid black;
`;

export const InfosContainer = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 0.5rem;
  width: 75%;
  height: 13.2rem;
  border: 1px solid black;
  background-color: rgba(3, 160, 255, 0.7);
  p {
    line-height: 1rem;
    color: black;
    font-size: 1.3rem;
  }
`;
