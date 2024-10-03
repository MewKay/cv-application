import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function DisplayExperienceItem({
  editMode,
  experienceItemIndex,
  experienceItem,
  onSetEditMode,
  onChangeItemToEdit,
}) {
  function handleGetItemToEdit() {
    if (editMode) {
      return;
    }

    onChangeItemToEdit(experienceItemIndex);
    onSetEditMode();
  }

  return (
    <div className="experience-item">
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
      <EditButton handleClick={handleGetItemToEdit} />
      <DeleteButton />
    </div>
  );
}

function DisplayExperience({
  experienceList,
  editMode,
  onSetEditMode,
  onChangeItemToEdit,
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
            key={crypto.randomUUID()}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayExperience;
