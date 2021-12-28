const Input = ({ label, isPassword, placeholder }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
