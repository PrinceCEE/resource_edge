import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import menuIcon from "../assets/menu.svg";
import personIcon from "../assets/person_icon.png";
import Button from "./Button";
import NavbarMobile from "./NavbarMobile";
import Dropdown from "./Dropdown";
import employeeLogo from "../assets/Employee_logo.svg";
import talentManageLogo from "../assets/Talent-manager_logo.svg";

const Navbar = ({ isDashboard }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [useAs, setUseAs] = useState([
    {
      name: "talent manager",
      src: talentManageLogo,
    },
    {
      name: "employee",
      src: employeeLogo,
    },
  ]);

  return (
    <nav>
      {isDashboard ? (
        <div className="nav-db">
          <div>
            <div className="menu-container">
              <img src={menuIcon} />
            </div>
            <div>
              <a href="/">
                <img src={logo} />
              </a>
            </div>
            <div className="vertical-line"></div>
            <h2>TM Dashboard</h2>
          </div>
          <div
            className="person-icon-container"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            <img src={personIcon} alt="person icon" />
          </div>
          <Dropdown
            data={useAs}
            showDropdown={isDropdownOpen}
            setUseAs={setUseAs}
          />
        </div>
      ) : (
        <>
          <NavbarMobile />
          <div className="nav-auth">
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
        </>
      )}
    </nav>
  );
};

export default Navbar;
