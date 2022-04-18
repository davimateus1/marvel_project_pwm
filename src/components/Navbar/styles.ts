import styled from "styled-components";

export const Container = styled.div`
  font-family: Poppins, sans-serif;
  color: #EC1D24;
  background-color: #060D15;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 10%;
  margin-left: 2rem;
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  font-weight: 400;
  margin-right: 2rem;
  li {
    cursor: pointer;
    margin-left:2rem;
    transition: all 0.5s;
    border-bottom: 1.5px solid transparent;
  }
  li:hover {
    color: #E8AA3B;
    border-bottom: 1.5px solid #772720;
  }
`;
