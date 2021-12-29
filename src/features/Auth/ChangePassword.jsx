import { useNavigate } from "react-router-dom";
import "./Auth.css";
import authLogo from "../../assets/auth_logo.svg";
import Input from "./Components/Input";
import Button from "../../Components/Button";
import AuthCard from "./Components/AuthCard";
import SuccessCard from "./Components/SuccessCard";
import { useState } from "react";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [canReceiveEmail, setCanReceiveEmail] = useState(false);

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
                if (
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    e.target.value
                  )
                ) {
                  setEmail(e.target.value);
                }
              }}
            />
            <Button
              handleClick={() => {
                setCanReceiveEmail(true);
                navigate("/reset_password");
              }}
            >
              Send Recovery Link
            </Button>
            <hr />
            <div>
              <a href="/login">Back to login</a>
            </div>
          </div>
        </AuthCard>
      )}
      {canReceiveEmail && <SuccessCard />}
    </div>
  );
};

export default ChangePassword;
