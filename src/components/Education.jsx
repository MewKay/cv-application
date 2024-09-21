function Education() {
  const inputClassName = "education-input";
  const schoolNameInputId = "school-name-input";
  const studyTitleInputId = "study-title-input";
  const endDateInputId = "end-date-input";

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

      <div className={inputClassName}>
        <label htmlFor={endDateInputId}>Completion By :</label>
        <input id={endDateInputId} type="text" required></input>
      </div>
    </section>
  );
}

export default Education;
