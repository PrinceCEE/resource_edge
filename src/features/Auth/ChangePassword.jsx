import { useNavigate } from "react-router-dom";
import "./Auth.css";
import authLogo from "../../assets/auth_logo.svg";
import Input from "./Components/Input";
import Button from "../../Components/Button";
import AuthCard from "./Components/AuthCard";

const ChangePassword = () => {
  const navigate = useNavigate();

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
          <p>To enable us reset your password, enter your email below</p>
        </div>
        <div>
          <Input placeholder="Enter email" label="Email Address" />
          <Button
            handleClick={() => {
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
    </div>
  );
};

export default ChangePassword;
