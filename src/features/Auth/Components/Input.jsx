const Input = ({
  label,
  isPassword,
  placeholder,
  displayIcon,
  handleChange,
  src,
}) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <div>
        <input
          type={isPassword ? "password" : "text"}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {displayIcon && src && (
          <span>
            <img src={src} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
