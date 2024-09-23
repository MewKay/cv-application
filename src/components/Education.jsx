import MonthSelector from "./MonthSelector";

function SchoolNameInput({ className, inputId }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>School Name :</label>
      <input id={inputId} type="text" required></input>
    </div>
  );
}

function StudyTitleInput({ className, inputId }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Title of Study :</label>
      <input id={inputId} type="text" required></input>
    </div>
  );
}

function EducationEndDateInput({ className, inputId, namePartId }) {
  return (
    <fieldset className={className}>
      <legend>Completion By :</legend>
      <MonthSelector id={inputId} namePartId={namePartId} />
    </fieldset>
  );
}

function Education() {
  const inputClassName = "education-input";
  const schoolNameInputId = "school-name-input";
  const studyTitleInputId = "study-title-input";
  const educationEndDateInputId = "education-end-date-input";
  const namePartId = "education-end-date";

  return (
    <section id="education-section">
      <h2>Add Education</h2>
      <SchoolNameInput className={inputClassName} inputId={schoolNameInputId} />
      <StudyTitleInput className={inputClassName} inputId={studyTitleInputId} />
      <EducationEndDateInput
        className={inputClassName}
        inputId={educationEndDateInputId}
        namePartId={namePartId}
      />
    </section>
  );
}

export default Education;
