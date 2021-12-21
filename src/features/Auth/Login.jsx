import styles from "./Login.module.css";
import authLogo from "../../assets/auth_logo.svg";
import Input from "./Components/Input";
import Button from "../../Components/Button";
import AuthCard from "./Components/AuthCard";

const Login = () => {
  return (
    <div>
      <div>
        <img src={authLogo} alt="Resource Edge" />
      </div>
      <AuthCard>
        <div>
          <div>
            <h2>Log in</h2>
            <p>Access your resource edge account</p>
          </div>
          <div>
            <Input placeholder="Enter email" label="Email Address" />
            <Button>Continue</Button>
          </div>
        </div>
        <a href="/change_password">Forgot password?</a>
      </AuthCard>
    </div>
  );
};

export default Login;
