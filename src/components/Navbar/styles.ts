import styled from "styled-components";

export const Container = styled.div`
  font-family: Poppins, sans-serif;
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
  @media (max-width: 1024px) {
    width: 7rem;
  }
`;

export const Links = styled.ul`
  flex-direction: row;
  list-style: none;
  display: flex;
  font-weight: 400;
  margin-right: 2rem;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: #ec1d24;
    font-size: 1.2rem;
  }
  li {
    color: #ec1d24;
    cursor: pointer;
    transition: all 0.5s;
    border-bottom: 2px solid transparent;
  }
  li:hover {
    color: #e8aa3b;
    border-bottom: 2px solid #772720;
  }
`;
