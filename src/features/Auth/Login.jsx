import { useNavigate } from "react-router-dom";
import "./Auth.css";
import authLogo from "../../assets/auth_logo.svg";
import Input from "./Components/Input";
import Button from "../../Components/Button";
import AuthCard from "./Components/AuthCard";

const Login = () => {
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
          <h2>Log in</h2>
          <p>Access your resource edge account</p>
        </div>
        <div>
          <Input placeholder="Enter email" label="Email Address" />
          <Button
            className="login"
            handleClick={() => {
              navigate("/dashboard");
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
