import { useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function DisplayExperienceItem({
  editMode,
  experienceItemIndex,
  experienceItem,
  onSetEditMode,
  onChangeItemToEdit,
  onDeleteItem,
}) {
  const [isHovered, setIsHovered] = useState(false);

  function onMouseEnter() {
    setIsHovered(true);
  }

  function onMouseLeave() {
    setIsHovered(false);
  }

  function handleGetItemToEdit() {
    if (editMode) {
      return;
    }

    onChangeItemToEdit(experienceItemIndex);
    onSetEditMode();
  }

  function handleGetItemToDelete() {
    if (editMode) {
      return;
    }

    onDeleteItem(experienceItemIndex);
  }

  return (
    <div
      className="experience-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="data-section">
        <div className="company-name-duration-section">
          <p className="display-company-name">{experienceItem.companyName}</p>
          <p className="display-work-duration">{`${experienceItem.workStart} - ${experienceItem.workEnd}`}</p>
        </div>
        <p className="display-position-title">{experienceItem.positionTitle}</p>
        <ul className="main-resp-list-container">
          {experienceItem.mainResp.map((mainRespItem) => (
            <li key={mainRespItem.bulletPointKey}>
              {mainRespItem.bulletPointData}
            </li>
          ))}
        </ul>
      </div>
      <div className={`button-section ${!isHovered ? "hidden" : ""}`}>
        <EditButton handleClick={handleGetItemToEdit} />
        <DeleteButton handleClick={handleGetItemToDelete} />
      </div>
    </div>
  );
}

function DisplayExperience({
  experienceList,
  editMode,
  onSetEditMode,
  onChangeItemToEdit,
  onDeleteItem,
}) {
  return (
    <div id="display-experience">
      <h3>Experience</h3>
      <div className="display-education-list">
        {experienceList.map((experienceItem, index) => (
          <DisplayExperienceItem
            editMode={editMode}
            experienceItemIndex={index}
            experienceItem={experienceItem}
            onSetEditMode={onSetEditMode}
            onChangeItemToEdit={onChangeItemToEdit}
            onDeleteItem={onDeleteItem}
            key={crypto.randomUUID()}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayExperience;
