const Button = ({ children, className, handleClick, isDisabled }) => {
  return (
    <button className={className} onClick={handleClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
