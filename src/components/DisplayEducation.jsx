import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function DisplayEducationItem({
  editMode,
  educationItemIndex,
  educationItem,
  onSetEditMode,
  onChangeItemToEdit,
  onDeleteItem,
}) {
  function handleGetItemToEdit() {
    if (editMode) {
      return;
    }

    onChangeItemToEdit(educationItemIndex);
    onSetEditMode();
  }

  function handleGetItemToDelete() {
    if (editMode) {
      return;
    }

    onDeleteItem(educationItemIndex);
  }

  return (
    <div className="education-item">
      <div className="school-end-date-section">
        <p className="display-school-name">{educationItem.schoolName}</p>
        <p className="display-end-date">{educationItem.endDate}</p>
      </div>
      <p className="display-study-title">{educationItem.studyTitle}</p>
      <EditButton handleClick={handleGetItemToEdit} />
      <DeleteButton handleClick={handleGetItemToDelete} />
    </div>
  );
}

function DisplayEducation({
  educationList,
  editMode,
  onSetEditMode,
  onChangeItemToEdit,
  onDeleteItem,
}) {
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
              onDeleteItem={onDeleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DisplayEducation;
