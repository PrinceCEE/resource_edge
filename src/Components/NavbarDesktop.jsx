import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import Button from "./Button";

const NavbarDesktop = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div>
        <ul>
          <li>
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </li>
          <li>
            <a href="#">features</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
        </ul>
        <div>
          <Button className="sign-up">Sign up</Button>
          <Button
            className="sign-in"
            handleClick={() => {
              navigate("/login");
            }}
          >
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
