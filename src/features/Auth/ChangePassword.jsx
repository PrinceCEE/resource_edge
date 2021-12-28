import "./Auth.css";
import authLogo from "../../assets/auth_logo.svg";
import Input from "./Components/Input";
import Button from "../../Components/Button";
import AuthCard from "./Components/AuthCard";

const ChangePassword = () => {
  return (
    <div>
      <div>
        <img src={authLogo} alt="Resource Edge" />
      </div>
      <AuthCard>
        <div>
          <div>
            <h2>Reset Password</h2>
            <p>To enable us reset your password, enter your email below</p>
          </div>
          <div>
            <Input placeholder="Enter email" label="Email Address" />
            <Button>Send Recovery Link</Button>
          </div>
        </div>
        <a href="/login">Back to login</a>
      </AuthCard>
    </div>
  );
};

export default ChangePassword;
