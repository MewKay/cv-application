function Button({ className, handleClick, buttonText, type, disabled }) {
  return (
    <button
      className={className}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;
