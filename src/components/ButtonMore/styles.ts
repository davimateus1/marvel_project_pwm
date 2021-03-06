import styled from "styled-components";

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  min-height: 60px;
  font-family: Bangers, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  background: #4fd1c5;
  background: linear-gradient(
    90deg,
    rgba(236, 29, 36, 1) 0%,
    rgba(236, 29, 36, 0.8) 100%
  );
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(236, 29, 36, 0.45);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;

  ::before {
    content: "";
    border-radius: 1000px;
    min-width: calc(300px + 12px);
    min-height: calc(60px + 12px);
    border: 6px solid white;
    box-shadow: 0 0 60px rgba(236, 29, 36, 0.7);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.5s ease-in-out 0s;
  }

  color: white;

  :hover::before{
    opacity: 1;
  }
`;
