import Button from "../Button";

function SaveButton({ handleClick }) {
  return (
    <Button
      className={"save-button"}
      buttonText={"Save"}
      type={"submit"}
      handleClick={handleClick}
    />
  );
}

export default SaveButton;
