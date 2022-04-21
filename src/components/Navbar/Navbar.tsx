import { Container, Links, Logo } from "./styles";
import Marvel from "../../assets/img/Marvel.png";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";

export const Navbar = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Logo src={Marvel} alt="Marvel" onClick={backToHome} />
      <Fade left>
        <Links>
          <Link to="/options">
            <li>Menu</li>
          </Link>
        </Links>
      </Fade>
    </Container>
  );
};
