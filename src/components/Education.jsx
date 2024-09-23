import MonthSelector from "./MonthSelector";

function Education() {
  const inputClassName = "education-input";
  const schoolNameInputId = "school-name-input";
  const studyTitleInputId = "study-title-input";
  const educationEndDateInputId = "education-end-date-input";
  const namePartId = "education-end-date";

  return (
    <section id="education-section">
      <h2>Add Education</h2>

      <div className={inputClassName}>
        <label htmlFor={schoolNameInputId}>School Name :</label>
        <input id={schoolNameInputId} type="text" required></input>
      </div>

      <div className={inputClassName}>
        <label htmlFor={studyTitleInputId}>Title of Study :</label>
        <input id={studyTitleInputId} type="text" required></input>
      </div>

      <fieldset className={inputClassName}>
        <legend>Completion By :</legend>
        <MonthSelector id={educationEndDateInputId} namePartId={namePartId} />
      </fieldset>
    </section>
  );
}

export default Education;
