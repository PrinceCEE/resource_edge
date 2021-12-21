import styles from "./ResetPassword.module.css";
import authLogo from "../../assets/auth_logo.svg";
import Input from "./Components/Input";
import Button from "../../Components/Button";
import AuthCard from "./Components/AuthCard";

const ResetPassword = () => {
  return (
    <div>
      <div>
        <img src={authLogo} alt="Resource Edge" />
      </div>
      <AuthCard>
        <div>
          <div>
            <h2>Reset Password</h2>
            <p>The password should have at least 6 characters</p>
          </div>
          <div>
            <Input
              placeholder="Enter password"
              label="New Password"
              isPassword
            />
            <Button>Reset Password</Button>
          </div>
          <div>
            <Input
              placeholder="Confirm password"
              label="Confirm password"
              isPassword
            />
            <Button>Reset Password</Button>
          </div>
        </div>
        <a href="/login">Back to login</a>
      </AuthCard>
    </div>
  );
};

export default ResetPassword;
