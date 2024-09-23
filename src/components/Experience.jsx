import MainRespAdder from "./MainRespAdder";
import MonthSelector from "./MonthSelector";

function Experience() {
  const inputClassName = "experience-input";
  const companyNameInputId = "company-name-input";
  const positionTitleInputId = "position-title-input";
  const workDurationSelectClass = "work-duration-select-class";
  const workStartNamePartId = "work-start";
  const workEndNamePartId = "work-end";

  return (
    <section>
      <h2>Add Experience</h2>

      <div className={inputClassName}>
        <label htmlFor={companyNameInputId}>Company Name :</label>
        <input id={companyNameInputId} type="text" required></input>
      </div>

      <div className={inputClassName}>
        <label htmlFor={positionTitleInputId}>Position Title :</label>
        <input id={positionTitleInputId} type="text" required></input>
      </div>

      <fieldset className={inputClassName}>
        <legend>Work Duration :</legend>

        <div id="work-start-select">
          <label>From :</label>
          <MonthSelector
            className={workDurationSelectClass}
            namePartId={workStartNamePartId}
          />
        </div>

        <div id="work-end-select">
          <label>To :</label>
          <MonthSelector
            className={workDurationSelectClass}
            namePartId={workEndNamePartId}
          />
        </div>
      </fieldset>

      <MainRespAdder className={inputClassName} />
    </section>
  );
}

export default Experience;
