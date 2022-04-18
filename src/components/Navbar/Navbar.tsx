import { Container, Links, Logo } from "./styles";
import Marvel from "../../assets/img/Marvel.png";

export const Navbar = () => {
  return (
    <Container>
      <Logo src={Marvel} alt="Marvel" />
      <Links>
        <li>Personagens</li>
        <li>Quadrinhos</li>
        <li>Filmes</li>
      </Links>
    </Container>
  );
};
