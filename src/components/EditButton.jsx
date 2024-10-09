import Button from "./Button";

function EditButton({ handleClick, disabled }) {
  return (
    <Button
      className={"edit-button"}
      buttonText={"Edit"}
      handleClick={handleClick}
      disabled={disabled}
    />
  );
}

export default EditButton;
