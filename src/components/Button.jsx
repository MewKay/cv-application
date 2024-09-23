function Button({ className, handleClick, buttonText }) {
  return (
    <button className={className} onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default Button;
