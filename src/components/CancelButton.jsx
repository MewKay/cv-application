import Button from "./Button";

function CancelButton({ handleClick }) {
  return (
    <Button
      className={"cancel-button"}
      buttonText={"Cancel"}
      handleClick={handleClick}
    />
  );
}

export default CancelButton;
