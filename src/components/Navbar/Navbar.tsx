import { Container, Links, Logo } from "./styles";
import Marvel from "../../assets/img/Marvel.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Fade } from "react-reveal";

export const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const backToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Logo src={Marvel} alt="Marvel" onClick={backToHome} />
      <div onClick={() => setOpen(!open)}>
        <Fade left>
          {open ? (
            <Links onClick={() => setOpen(!open)}>
              <li>
                <BsFillArrowLeftCircleFill />
              </li>
              <li>Opções</li>
            </Links>
          ) : (
            <Links>
              <li onClick={() => setOpen(!open)}>
                <BsFillArrowRightCircleFill />
              </li>
              <Link to="/characters">
                <li>Personagens</li>
              </Link>
              <Link to="/">
                <li>Filmes</li>
              </Link>
              <Link to="/">
                <li>Criadores</li>
              </Link>
              <Link to="/">
                <li>Quadrinhos</li>
              </Link>
              <Link to="/">
                <li>Eventos</li>
              </Link>
              <Link to="/">
                <li>Séries</li>
              </Link>
            </Links>
          )}
        </Fade>
      </div>
    </Container>
  );
};
