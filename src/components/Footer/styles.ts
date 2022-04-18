import styled from "styled-components";

export const Container = styled.div`
  font-family: Poppins, sans-serif;
  color: #ec1d24;
  background-color: #060d15;
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h1`
  font-weight: 300;
  font-size: 1.2rem;
`;

export const PersonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Person = styled.div`
  display: flex;
  border: 0.5px solid rgba(232, 170, 59, 0.1);
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 0.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    margin: 0.3rem;
    transition: all 0.5s;
  }
  p:hover{
    color: #E8AA3B;
  }
`;

export const Divider = styled.div`
  height: 5rem;
  width: 2px;
  background-color: #858585;
  margin: 0px 10px 0px 10px;
  opacity: 0.2;
`;

export const Links = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    cursor: pointer;
  }
`;
