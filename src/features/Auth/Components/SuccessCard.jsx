import successLogo from "../../../assets/success_logo.svg";
import AuthCard from "./AuthCard";

const SuccessCard = () => {
  <AuthCard>
    <div>
      <h2>Reset Password</h2>
    </div>
    <div>
      <img src={successLogo} alt="success" />
    </div>
    <p>A recovery email has been sent to your email address.</p>
    <hr />
    <div>
      <a href="/login">Back to login</a>
    </div>
  </AuthCard>;
};

export default SuccessCard;
