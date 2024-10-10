import Button from "../Button";

function DeleteButton({ handleClick }) {
  return (
    <Button
      className={"delete-button"}
      buttonText={"Delete"}
      handleClick={handleClick}
    />
  );
}

export default DeleteButton;
