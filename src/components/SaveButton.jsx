import Button from "./Button";

function SaveButton({ handleClick }) {
  return (
    <Button
      className={"save-button"}
      buttonText={"Save"}
      handleClick={handleClick}
    />
  );
}

export default SaveButton;
