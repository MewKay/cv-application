import resumeData from "../resumeData";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function DisplayEducationItem({
  editMode,
  educationItemIndex,
  educationItem,
  onSetEditMode,
  onChangeItemToEdit,
}) {
  function handleGetItemToEdit() {
    if (editMode) {
      return;
    }

    onChangeItemToEdit(educationItemIndex);
    onSetEditMode();
  }

  return (
    <div className="education-item">
      <div className="school-end-date-section">
        <p className="display-school-name">{educationItem.schoolName}</p>
        <p className="display-end-date">{educationItem.endDate}</p>
      </div>
      <p className="display-study-title">{educationItem.studyTitle}</p>
      <EditButton handleClick={handleGetItemToEdit} />
      <DeleteButton />
    </div>
  );
}

function DisplayEducation({ editMode, onSetEditMode, onChangeItemToEdit }) {
  const educationList = resumeData.education;

  return (
    <div id="display-education">
      <h3>Education</h3>
      <div className="display-education-list">
        {educationList.map((educationItem, index) => {
          return (
            <DisplayEducationItem
              editMode={editMode}
              educationItemIndex={index}
              educationItem={educationItem}
              key={crypto.randomUUID()}
              onSetEditMode={onSetEditMode}
              onChangeItemToEdit={onChangeItemToEdit}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DisplayEducation;
