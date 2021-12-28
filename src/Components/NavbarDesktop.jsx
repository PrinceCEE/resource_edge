import logo from "../assets/Logo.svg";
import Button from "./Button";

const NavbarDesktop = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt="Logo" />
        </li>
        <li>features</li>
        <li>about</li>
      </ul>
      <div>
        <Button>sign up</Button>
        <Button>sign in</Button>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
