import Button from "./Button";

function EditButton({ handleClick }) {
  return (
    <Button
      className={"edit-button"}
      buttonText={"Edit"}
      handleClick={handleClick}
    />
  );
}

export default EditButton;
