import { Wrap, ButtonStyle } from "./styles";
import Typing from "react-typing-animation";
import { Link } from "react-router-dom";

type ButtonProps = {
  titleText: string;
  redirect: string;
};

export const Button = ({ titleText, redirect }: ButtonProps) => {
  return (
    <Typing speed={350}>
      <Wrap>
        <Link to={redirect}>
          <ButtonStyle>{titleText}</ButtonStyle>
        </Link>
      </Wrap>
    </Typing>
  );
};
