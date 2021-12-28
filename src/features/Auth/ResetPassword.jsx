import "./Auth.css";
import authLogo from "../../assets/auth_logo.svg";
import Input from "./Components/Input";
import Button from "../../Components/Button";
import AuthCard from "./Components/AuthCard";

const ResetPassword = () => {
  return (
    <div className="auth-screen">
      <div>
        <a href="/">
          <img src={authLogo} alt="Resource Edge" />
        </a>
      </div>
      <AuthCard>
        <div>
          <h2>Reset Password</h2>
          <p>The password should have at least 6 characters</p>
        </div>
        <div>
          <Input placeholder="Enter password" label="New Password" isPassword />
          <Input
            placeholder="Confirm password"
            label="Confirm password"
            isPassword
          />
          <Button handleClick={() => {}}>Reset Password</Button>
          <hr />
          <div>
            <a href="/login">Back to login</a>
          </div>
        </div>
      </AuthCard>
    </div>
  );
};

export default ResetPassword;
