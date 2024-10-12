import Button from "../Button";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

function DeleteButton({ handleClick }) {
  return (
    <Button
      className={"delete-button"}
      buttonText={<DeleteIcon />}
      handleClick={handleClick}
    />
  );
}

export default DeleteButton;
