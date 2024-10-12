import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { useState } from "react";

function DisplayGeneralInfo({ general, onSetEditMode, onDeleteData }) {
  const [isHovered, setIsHovered] = useState(false);

  function onMouseEnter() {
    setIsHovered(true);
  }

  function onMouseLeave() {
    setIsHovered(false);
  }

  const isFullNameBlank = general.fullName.length <= 0;

  function handleDeleteGeneralInfo() {
    onDeleteData();
    onSetEditMode();
  }

  return (
    <div
      id="display-general-info"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="data-section">
        <h2>{isFullNameBlank ? "New Resume" : general.fullName}</h2>
        <div className="display-additional-info">
          <p className="display-email">{general.email}</p>
          {general.phoneNumber && (
            <p className="display-phone-number">{general.phoneNumber}</p>
          )}
        </div>
      </div>
      <div className={`button-section ${!isHovered ? "hidden" : ""}`}>
        <EditButton handleClick={onSetEditMode} disabled={isFullNameBlank} />
        <DeleteButton handleClick={handleDeleteGeneralInfo} />
      </div>
    </div>
  );
}

export default DisplayGeneralInfo;
