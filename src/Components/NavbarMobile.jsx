import { useNavigate } from "react-router-dom";
import menuIcon from "../assets/menu.svg";
import menuMobile from "../assets/menu_mobile.svg";
import closeIcon from "../assets/close.svg";
import logoMobile from "../assets/logo_mobile.svg";
import personIcon from "../assets/person_icon.png";
import Button from "./Button";
import { useState } from "react";

const NavbarMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="nav-mobile">
      <div className="header">
        <div>
          <a href="/">
            <img src={logoMobile} alt="Logo" />
          </a>
        </div>
        <div
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <img src={isNavOpen ? closeIcon : menuMobile} alt="Menu" />
        </div>
      </div>
      <div className={isNavOpen ? "nav-open" : "nav-close"}>
        <div>
          <p>
            <a href="#">features</a>
          </p>
          <p>
            <a href="#">about</a>
          </p>
        </div>
        <div>
          <Button
            className="sign-in"
            handleClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </Button>
          <Button className="sign-up">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
