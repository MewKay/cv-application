import Button from "./Button";

function CancelButton({ handleClick }) {
  return (
    <Button
      className={"cancel-button"}
      buttonText={"Cancel"}
      type="reset"
      handleClick={handleClick}
    />
  );
}

export default CancelButton;
