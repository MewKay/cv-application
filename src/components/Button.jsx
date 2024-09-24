function Button({ className, handleClick, buttonText, type }) {
  return (
    <button className={className} onClick={handleClick} type={type}>
      {buttonText}
    </button>
  );
}

export default Button;
