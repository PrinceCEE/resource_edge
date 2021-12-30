import "./Auth.css";
import authLogo from "../../assets/auth_logo.svg";
import error from "../../assets/error.svg";
import Input from "./Components/Input";
import Button from "../../Components/Button";
import AuthCard from "./Components/AuthCard";
import SuccessCard from "./Components/SuccessCard";
import { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="auth-screen">
      <div>
        <a href="/">
          <img src={authLogo} alt="Resource Edge" />
        </a>
      </div>
      {!isSamePassword && (
        <AuthCard>
          <div>
            <h2>Reset Password</h2>
            <p>The password should have at least 6 characters</p>
          </div>
          <div>
            <Input
              placeholder="Enter password"
              label="New Password"
              isPassword
              handleChange={(e) => {
                setPassword(e.target.value);
                setIsError(false);
              }}
              value={password}
            />
            <Input
              placeholder="Confirm password"
              label="Confirm password"
              isPassword
              handleChange={(e) => {
                setConfirmPassword(e.target.value);
                setIsError(false);
              }}
              value={confirmPassword}
            />
            {isError && (
              <p className="error">
                <span>
                  <img src={error} alt="error" />
                </span>
                <span>Confirm password doesn't match</span>
              </p>
            )}
            <Button
              handleClick={() => {
                if (password.length && confirmPassword.length) {
                  setIsError(password !== confirmPassword);
                  setIsSamePassword(password === confirmPassword);
                }
              }}
            >
              Reset Password
            </Button>
            <hr />
            <div>
              <a href="/login">Back to login</a>
            </div>
          </div>
        </AuthCard>
      )}
      {isSamePassword && (
        <SuccessCard text="Your password has been changed successfully" />
      )}
    </div>
  );
};

export default ResetPassword;
