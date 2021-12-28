import logo from "../assets/Logo.svg";
import Button from "./Button";

const NavbarDesktop = () => {
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
          <Button className="sign-in">Sign in</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
