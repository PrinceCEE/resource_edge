import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import successLogo from "../../../assets/success_logo.svg";
import AuthCard from "./AuthCard";

const SuccessCard = ({ text, reRoute }) => {
  const navigate = useNavigate();

  useEffect(() => {
    reRoute &&
      setTimeout(() => {
        navigate("/reset_password");
      }, 1000);
  });

  return (
    <AuthCard>
      <div>
        <h2>Reset Password</h2>
      </div>
      <div className="success-logo-container">
        <img src={successLogo} alt="success" />
      </div>
      <p>{text}</p>
      <hr />
      <div>
        <a href="/login">Back to login</a>
      </div>
    </AuthCard>
  );
};

export default SuccessCard;
