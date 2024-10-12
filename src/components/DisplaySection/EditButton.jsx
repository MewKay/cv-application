import Button from "../Button";
import EditIcon from "@mui/icons-material/EditOutlined";

function EditButton({ handleClick, disabled }) {
  return (
    <Button
      className={"edit-button"}
      buttonText={<EditIcon />}
      handleClick={handleClick}
      disabled={disabled}
    />
  );
}

export default EditButton;
