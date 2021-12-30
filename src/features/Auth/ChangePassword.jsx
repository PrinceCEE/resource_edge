import "./Auth.css";
import authLogo from "../../assets/auth_logo.svg";
import Input from "./Components/Input";
import Button from "../../Components/Button";
import AuthCard from "./Components/AuthCard";
import SuccessCard from "./Components/SuccessCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [canReceiveEmail, setCanReceiveEmail] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="auth-screen">
      <div>
        <a href="/">
          <img src={authLogo} alt="Resource Edge" />
        </a>
      </div>
      {!canReceiveEmail && (
        <AuthCard>
          <div>
            <h2>Reset Password</h2>
            <p>To enable us reset your password, enter your email below</p>
          </div>
          <div>
            <Input
              value={email}
              placeholder="Enter email"
              label="Email Address"
              handleChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Button
              handleClick={() => {
                if (
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    email
                  )
                ) {
                  setCanReceiveEmail(true);
                }
              }}
            >
              Send Recovery Link
            </Button>
            <hr />
            <div>
              <a
                href="/login"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Back to login
              </a>
            </div>
          </div>
        </AuthCard>
      )}
      {canReceiveEmail && (
        <SuccessCard
          text="A recovery email has been sent to your email address."
          reRoute
        />
      )}
    </div>
  );
};

export default ChangePassword;
