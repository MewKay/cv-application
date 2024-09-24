import CancelButton from "./CancelButton";
import MonthSelector from "./MonthSelector";
import SaveButton from "./SaveButton";

function SchoolNameInput({ className, inputId, editMode }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>School Name :</label>
      <input id={inputId} type="text" required disabled={!editMode} />
    </div>
  );
}

function StudyTitleInput({ className, inputId, editMode }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Title of Study :</label>
      <input id={inputId} type="text" required disabled={!editMode} />
    </div>
  );
}

function EducationEndDateInput({ className, inputId, namePartId, editMode }) {
  return (
    <fieldset className={className} disabled={!editMode}>
      <legend>Completion By :</legend>
      <MonthSelector id={inputId} namePartId={namePartId} />
    </fieldset>
  );
}

function Education({ editMode }) {
  const inputClassName = "education-input";
  const schoolNameInputId = "school-name-input";
  const studyTitleInputId = "study-title-input";
  const educationEndDateInputId = "education-end-date-input";
  const namePartId = "education-end-date";

  return (
    <section id="education-section">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Add Education</h2>
        <SchoolNameInput
          className={inputClassName}
          inputId={schoolNameInputId}
          editMode={editMode}
        />
        <StudyTitleInput
          className={inputClassName}
          inputId={studyTitleInputId}
          editMode={editMode}
        />
        <EducationEndDateInput
          className={inputClassName}
          inputId={educationEndDateInputId}
          namePartId={namePartId}
          editMode={editMode}
        />

        <div
          className="button-section"
          style={{ display: editMode ? "block" : "none" }}
        >
          <SaveButton />
          <CancelButton />
        </div>
      </form>
    </section>
  );
}

export default Education;
