import { Container, Links, Logo } from "./styles";
import Marvel from "../../assets/img/Marvel.png";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Logo src={Marvel} alt="Marvel" onClick={backToHome} />
      <Links>
        <li>Personagens</li>
        <li>Quadrinhos</li>
        <li>Filmes</li>
      </Links>
    </Container>
  );
};
