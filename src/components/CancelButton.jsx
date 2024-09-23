function CancelButton({ className, handleClick }) {
  return (
    <button className={className} onClick={handleClick}>
      Cancel
    </button>
  );
}

export default CancelButton;
