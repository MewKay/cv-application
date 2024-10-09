import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

function DisplayGeneralInfo({ general, onSetEditMode, onDeleteData }) {
  const isFullNameBlank = general.fullName.length <= 0;

  function handleDeleteGeneralInfo() {
    onDeleteData();
    onSetEditMode();
  }

  return (
    <div id="display-general-info">
      <h2>{isFullNameBlank ? "New Resume" : general.fullName}</h2>
      <div className="display-additional-info">
        <p className="display-email">{general.email}</p>
        <p className="display-phone-number">{general.phoneNumber}</p>
      </div>
      <EditButton handleClick={onSetEditMode} disabled={isFullNameBlank} />
      <DeleteButton handleClick={handleDeleteGeneralInfo} />
    </div>
  );
}

export default DisplayGeneralInfo;
