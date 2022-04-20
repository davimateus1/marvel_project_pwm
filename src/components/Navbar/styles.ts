import styled from "styled-components";

export const Container = styled.div`
  font-family: Poppins, sans-serif;
  color: #ec1d24;
  background-color: #060d15;
  width: 100vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 7%;
  margin-left: 2rem;
  cursor: pointer;
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  font-weight: 400;
  margin-right: 2rem;
  li {
    cursor: pointer;
    margin-left: 2rem;
    transition: all 0.5s;
    border-bottom: 2px solid transparent;
  }
  li:hover {
    color: #e8aa3b;
    border-bottom: 2px solid #772720;
  }
`;
