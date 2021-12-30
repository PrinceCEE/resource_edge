import { useState } from "react";
import watchFilled from "../../../assets/watch-filled.png";

const Input = ({
  label,
  isPassword,
  placeholder,
  displayIcon,
  handleChange,
  value,
  src,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-container">
      <label>{label}</label>
      <div>
        <input
          type={isPassword ? (showPassword ? "text" : "password") : "text"}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
        {displayIcon && src && (
          <span
            className="toggle-pwd"
            onClick={() => isPassword && setShowPassword(!showPassword)}
          >
            <img src={showPassword ? watchFilled : src} alt="images" />
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
