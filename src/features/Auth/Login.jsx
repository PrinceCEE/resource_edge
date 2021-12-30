import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";
import authLogo from "../../assets/auth_logo.svg";
import Input from "./Components/Input";
import Button from "../../Components/Button";
import AuthCard from "./Components/AuthCard";
import check from "../../assets/check_login.png";
import edit from "../../assets/edit-filled.png";
import watch from "../../assets/watch.png";

const Login = () => {
  const navigate = useNavigate();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [addPassword, setAddPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="auth-screen">
      <div>
        <a href="/">
          <img src={authLogo} alt="Resource Edge" />
        </a>
      </div>
      <AuthCard>
        <div>
          <h2>Log in</h2>
          <p>Access your resource edge account</p>
        </div>
        {addPassword && (
          <div className="user-details">
            <div>
              <div>
                <h4>Ositadinma Nwangwu</h4>
                <p>{email}</p>
              </div>
              <div>
                <img src={edit} alt="edit" />
              </div>
            </div>
          </div>
        )}
        <div>
          {!addPassword && (
            <Input
              placeholder="Enter email"
              label="Email Address"
              src={check}
              displayIcon={isEmailValid}
              handleChange={(e) => {
                if (
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    e.target.value
                  )
                ) {
                  setIsEmailValid(true);
                  setEmail(e.target.value);
                } else {
                  setIsEmailValid(false);
                  return;
                }
              }}
            />
          )}
          {addPassword && (
            <Input
              placeholder="Enter password"
              label="Password"
              isPassword
              src={watch}
              displayIcon
              handleChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          )}
          <Button
            className={!isEmailValid && "disabled"}
            isDisabled={!isEmailValid}
            handleClick={() => {
              password.length === 0 && setAddPassword(true);
              if (password.length > 0) {
                navigate("/dashboard");
              }
            }}
          >
            Continue
          </Button>
          <hr />
          <div>
            <a href="/change_password">Forgot password?</a>
          </div>
        </div>
      </AuthCard>
    </div>
  );
};

export default Login;
