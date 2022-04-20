import { Wrap, ButtonStyle } from "./styles";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";

type ButtonProps = {
  titleText: string;
  redirect: string;
};

export const Button = ({ titleText, redirect }: ButtonProps) => {
  return (
    <>
      <Zoom bottom>
        <Wrap>
          <Link to={redirect}>
            <ButtonStyle>{titleText}</ButtonStyle>
          </Link>
        </Wrap>
      </Zoom>
    </>
  );
};
