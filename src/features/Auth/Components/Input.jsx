const Input = ({ label, isPassword, placeholder, value, handleChange }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
