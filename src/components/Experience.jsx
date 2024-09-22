import MonthSelector from "./MonthSelector";

function Experience() {
  const workDurationSelectClass = "work-duration-select-class";
  const workStartNamePartId = "work-start";
  const workEndNamePartId = "work-end";

  return (
    <section>
      <h2>Add Experience</h2>

      <div>
        <label>Company Name :</label>
        <input type="text" required></input>
      </div>

      <div>
        <label>Position Title :</label>
        <input type="text" required></input>
      </div>

      <div>
        <label>Work Duration :</label>

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
      </div>
    </section>
  );
}

export default Experience;
