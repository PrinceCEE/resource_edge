const Input = ({ label, isPassword, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
